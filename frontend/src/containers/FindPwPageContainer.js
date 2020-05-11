import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailRegex } from 'lib/functions';

import FindPwForm from 'components/_base/FindPwForm';

class FindPwPageContainer extends Component {

    state = {
        email: '',
        formErrors: {
            email: '',
        }
    }

    // 이메일로 인증코드 전송 요청
    clickToEmail = async (e) => {
        e.preventDefault();
        let { email, formErrors } = this.state;

        if (email.length == 0) {
            await this.formValidation('email', '이메일을 입력해주세요.');
        } else if (formErrors.email.length > 0) {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '입력된 값을 다시 한 번 확인해주세요.'
            });
        } else {
            await this.props.dispatch({
                type: 'IS_LOADING_OPEN'
            });

            this.setState({
                email: ''
            });

            await this.props.history.push(`/find_password/confirm`);

            await this.props.dispatch({
                type: 'IS_LOADING_CLOSE'
            });

            await this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '이메일이 전송되었습니다.'
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

        if (name == 'email') {
            if (value.length == 0) {
                this.formValidation(name, '이메일을 입력해주세요.');
            } else if (!emailRegex(value)){
                this.formValidation(name, '이메일 형식이 올바르지 않습니다.');
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

        let { email, formErrors } = this.state;

        return (
            <FindPwForm
                handleChange={this.handleChange}
                clickToEmail={this.clickToEmail}
                email={email}
                formErrors={formErrors}
            />
        )
    }
};

export default connect()(withRouter(FindPwPageContainer));