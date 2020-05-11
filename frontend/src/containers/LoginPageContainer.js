import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailRegex, passwordRegex } from 'lib/functions';
import uuid from 'uuid/v1';

import LoginForm from 'components/_base/LoginForm';
import axiosInstance from '../middlewares/axiosInstance';

class LoginPageContainer extends Component {

    state = {
        email: 'test@naver.com',
        password: 'Xptmxj1!',
        formErrors: {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        console.log(uuid());
    }

    // 로그인 요청
    submitToLogin = async(e) => {
        e.preventDefault();
        let { email, password, formErrors } = this.state;

        if(email.length == 0) {
            await this.formValidation('email', '이메일을 입력해주세요.');
        }else if(password.length == 0){
            await this.formValidation('password', '비밀번호를 입력해주세요.');
        }else if (formErrors.email.length > 0 || formErrors.password.length > 0) {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '입력된 값을 다시 한 번 확인해주세요.'
            });
        }else {
            await this.props.dispatch({
                type: 'IS_LOADING_OPEN'
            });

            // try {
            //     let result = await axiosInstance.post('/authentication/', {
            //         email: email,
            //         password: password,
            //         uuid: uuid()
            //     });

            //     console.log(result);
            // }catch(e) {
            //     console.error(e);
            // }

            this.props.dispatch({
                type: 'SAVE_USER_INFO',
                email: email
            });

            this.setState({
                email: '',
                password: ''
            });

            this.props.dispatch({
                type: 'PERMIT_AUTH'
            });

            await this.props.history.push(`/otp`);

            await this.props.dispatch({
                type: 'IS_LOADING_CLOSE'
            });

        }
    }

    // 인풋 onChange
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });

        if(name == 'email') {
            if(value.length == 0){
                this.formValidation(name, '이메일을 입력해주세요.');
            } else if (!emailRegex(value)) {
                this.formValidation(name, '이메일 형식이 맞지 않습니다.');
            }else {
                this.formValidation(name, '');
            }
        }else if(name == 'password') {
            if (value.length == 0) {
                this.formValidation(name, '비밀번호를 입력해주세요.');
            } else if (!passwordRegex(value)) {
                this.formValidation(name, '비밀번호 형식이 맞지 않습니다.');
            }else {
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

    render () {

        let { email, password, formErrors } = this.state;

        return (
            <>
            <LoginForm
                handleChange={this.handleChange}
                submitToLogin={this.submitToLogin}
                formErrors={formErrors}
                email={email}
                password={password}
            />
            </>
        )
    }
};

export default connect()(withRouter(LoginPageContainer));