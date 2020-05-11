import React, { Component } from 'react';
import { saveCurrentMenu } from 'lib/functions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { passwordRegex } from 'lib/functions';

import BGColour from 'components/_common/BGColour';
import ChangePwForm from 'components/_base/ChangePwForm';

class ChangePwFormContainer extends Component {

    state = {
        currentPw: '',
        newPw: '',
        newPwConf: '',
        formErrors: {
            currentPw: '',
            newPw: '',
            newPwConf: ''
        }
    }

    componentDidMount() {
        saveCurrentMenu(this.props.dispatch, this.props.title);
    }

    // 비밀번호 변경 요청
    clickToChangePw = async (e) => {
        e.preventDefault();
        let { currentPw, newPw, newPwConf, formErrors } = this.state;

        if (currentPw.length == 0) {
            await this.formValidation('currentPw', '비밀번호를 입력해주세요.');
        } else if (newPw.length == 0) {
            await this.formValidation('newPw', '비밀번호를 입력해주세요.');
        } else if( newPwConf.length == 0){
            await this.formValidation('newPwConf', '비밀번호를 입력해주세요.');
        } else if (formErrors.currentPw.length > 0 || formErrors.newPw.length > 0 || formErrors.newPwConf.length > 0) {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '입력된 값을 다시 한 번 확인해주세요.'
            });
        } else {
            //요청
            await this.props.dispatch({
                type: 'IS_LOADING_OPEN'
            });

            this.setState({
                currentPw: '',
                newPw: '',
                newPwConf: ''
            });

            await this.props.history.push('/mypage');

            await this.props.dispatch({
                type: 'IS_LOADING_CLOSE'
            });

            await this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '비밀번호 변경이 완료되었습니다.'
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

        if (name == 'currentPw') {
            if (value.length == 0) {
                this.formValidation(name, '비밀번호를 입력해주세요.');
            } else {
                this.formValidation(name, '');
            }
        } else if (name == 'newPw') {
            if (value.length == 0) {
                this.formValidation(name, '비밀번호를 입력해주세요.');
            } else if (!passwordRegex(value)) {
                this.formValidation(name, '비밀번호 형식이 올바르지 않습니다.');
            } else {
                this.formValidation(name, '');
            }
        } else if (name == 'newPwConf') {
            let { newPw } = this.state;
            if (value.length == 0) {
                this.formValidation(name, '비밀번호를 입력해주세요.');
            } else if (newPw !== value) {
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

    render () {

        let { currentPw, newPw, newPwConf, formErrors } = this.state;

        return (
            <>
                <BGColour/>
                <ChangePwForm
                    className='g-content-padding-top'
                    clickToChangePw={this.clickToChangePw}
                    currentPw={currentPw}
                    newPw={newPw}
                    newPwConf={newPwConf}
                    formErrors={formErrors}
                    handleChange={this.handleChange}
                />
            </>
        )
    }
};

export default connect()(withRouter(ChangePwFormContainer));