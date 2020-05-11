import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import OTPForm from 'components/_base/OTPForm';

class OTPPageContainer extends Component {

    state = {
        code: '',
        formErrors: {
            code: '',
        }
    }

    // 인증코드 확인 요청
    clickToLogin = async (e) => {
        e.preventDefault();
        let { code, formErrors } = this.state;

        if (code.length == 0) {
            await this.formValidation('code', '코드를 입력해주세요.');
        } else if (formErrors.code.length > 0) {
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
                code: ''
            });

            await this.props.dispatch({
                type: 'PERMIT_AUTH'
            });

            await this.props.history.push(`/`);

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

        if (name == 'code') {
            if (value.length == 0) {
                this.formValidation(name, '코드를 입력해주세요.');
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

        let { code, formErrors } = this.state;
        
        return (
            <OTPForm
                handleChange={this.handleChange}
                clickToLogin={this.clickToLogin}
                code={code}
                formErrors={formErrors}
            />
        )
    }
};

export default connect()(withRouter(OTPPageContainer));