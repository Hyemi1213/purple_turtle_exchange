import React, { Component } from 'react';
import axiosInstance from 'middlewares/axiosInstance';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailRegex, passwordRegex } from 'lib/functions';

import SignupForm from 'components/_base/SignupForm';

class SignupPageContainer extends Component {

    state = {
        email: 'ffan0811@gmail.com',
        password: 'Xptmxj1!',
        passwordConf: 'Xptmxj1!',
        terms: false,
        privacy: false,
        agreeAll: false,
        formErrors: {
            email: '',
            password: '',
            passwordConf: '',
            terms: '',
            privacy: ''
        },
        isModalOpen: false,
        currentRule: '',
        currentRuleContent: ''
    }

    // 회원가입 요청
    submitToSingup = async (e) => {
        e.preventDefault();
        let { email, password, passwordConf, formErrors, terms, privacy } = this.state;

        if (email.length == 0) {
            this.formValidation('email', '이메일을 입력해주세요.');
        } else if (password.length == 0) {
            this.formValidation('password', '비밀번호를 입력해주세요.');
        } else if (passwordConf.length == 0) {
            this.formValidation('passwordConf', '비밀번호를 입력해주세요.');
        } else if (!terms) {
            this.formValidation('terms', '동의해주세요.');
        } else if (!privacy) {
            this.formValidation('privacy', '동의해주세요.');
        } else if (formErrors.email.length > 0 || formErrors.password.length > 0 || formErrors.passwordConf.length > 0 || formErrors.terms.length > 0 || formErrors.privacy.length > 0) {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '입력된 값을 다시 한 번 확인해주세요.'
            });
        } else {
            await this.props.dispatch({
                type: 'IS_LOADING_OPEN'
            });

            try {

                //회원가입 요청
                let result = await axiosInstance.post('/users', {
                    email: email,
                    password: passwordConf
                });

                console.log(result);

                this.setState({
                    email: '',
                    password: '',
                    passwordConf: '',
                    terms: false,
                    privacy: false
                });

                await this.props.dispatch({
                    type: 'IS_LOADING_CLOSE'
                });

                await this.props.history.push(`/signup/confirm`);

            } catch (e) {
                let error = e.response;
                console.log(error);
                if (error.data.code = '0x00000000') {
                    this.props.dispatch({
                        type: 'ALERT_OPEN',
                        alertType: 'danger',
                        alertMsg: '이미 등록된 이메일입니다.'
                    });
                } else {
                    this.props.dispatch({
                        type: 'ALERT_OPEN',
                        alertType: 'danger',
                        alertMsg: '이미 등록된 이메일입니다.'
                    });
                }

                await this.props.dispatch({
                    type: 'IS_LOADING_CLOSE'
                });
            }
        }
    }

    // 체크박스 인풋 onChange
    handleCheckbox = (e) => {
        let name = e.target.name;
        let isChecked = e.target.checked;

        this.setState({
            [name]: isChecked
        });
        if (name == 'agreeAll') {
            if (isChecked) {
                this.setState(prevState => ({
                    terms: true,
                    privacy: true,
                    formErrors: {
                        ...prevState.formErrors,
                        terms: '',
                        privacy: ''
                    },
                }))
            } else {
                this.setState({
                    terms: false,
                    privacy: false
                });
            }
        }
        if (isChecked) {
            this.formValidation(name, '');
        }
    }

    clickToAgree = (val) => {
        this.setState({
            [val]: true
        });
        this.onModalClose();
    }

    //이용약관/개인정보보호정책 모달 열기
    openRulesModal = (val) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            currentRule: val == 'terms' ? { label: '이용약관', value: val } : { label: '개인정보 처리방침', value: val },
            currentRuleContent: val == 'terms' ? '이용약관 내용' : '개인정보 처리방침 내용'
        });
    }

    onModalClose = () => {
        this.setState({
            isModalOpen: false
        });
    }

    // 인풋 onChange
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });

        if (name == 'email') {
            if (value.length == 0) {
                this.formValidation(name, '이메일을 입력해주세요.');
            } else if (!emailRegex(value)) {
                this.formValidation(name, '이메일 형식이 올바르지 않습니다.');
            } else {
                this.formValidation(name, '');
            }
        } else if (name == 'password') {
            if (value.length == 0) {
                this.formValidation(name, '비밀번호를 입력해주세요.');
            } else if (!passwordRegex(value)) {
                this.formValidation(name, '비밀번호 형식이 올바르지 않습니다.');
            } else {
                this.formValidation(name, '');
            }
        } else if (name == 'passwordConf') {
            let { password } = this.state;
            if (value.length == 0) {
                this.formValidation(name, '비밀번호를 입력해주세요.');
            }
            else if (password !== value) {
                this.formValidation(name, '비밀번호가 같지 않습니다.');
            } else {
                this.formValidation(name, '');
            }
        }
    }

    //폼에러 메세지 바꿔주는 함수
    formValidation = (name, errorMsg) => {
        this.setState(prevState => ({
            formErrors: {
                ...prevState.formErrors,
                [name]: errorMsg
            }
        }));
    }

    render() {

        let { email, password, passwordConf, formErrors, terms, privacy, agreeAll, isModalOpen, currentRule, currentRuleContent } = this.state;

        return (
            <>
                <SignupForm
                    email={email}
                    password={password}
                    passwordConf={passwordConf}
                    formErrors={formErrors}
                    submitToSingup={this.submitToSingup}
                    handleChange={this.handleChange}
                    handleCheckbox={this.handleCheckbox}
                    terms={terms}
                    privacy={privacy}
                    agreeAll={agreeAll}
                    openRulesModal={this.openRulesModal}
                    onModalClose={this.onModalClose}
                    isModalOpen={isModalOpen}
                    currentRule={currentRule}
                    currentRuleContent={currentRuleContent}
                    clickToAgree={this.clickToAgree}
                />
            </>
        )
    }
};

export default connect()(withRouter(SignupPageContainer));