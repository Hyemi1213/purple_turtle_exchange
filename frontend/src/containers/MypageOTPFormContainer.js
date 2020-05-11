import React, { Component } from 'react';
import { saveCurrentMenu } from 'lib/functions';
import { connect } from 'react-redux';

import BGColour from 'components/_common/BGColour';
import MypageOTPForm from 'components/_base/MypageOTPForm';

class MypageOTPFormContainer extends Component {

    state = {
        isActive: true,
        otpKey: '1234',
        code: '',
        currentPage: '',
        formErrors: {
            code: ''
        }
    }

    componentDidMount() {
        saveCurrentMenu(this.props.dispatch, this.props.title);
    }

    //otp 활성화 요청
    clickToActivateOTP = () => {

        let { code } = this.state;

        if(code.length == 0) {
            this.formValidation('code', '코드를 입력해주세요.');
        }else {
            this.setState({
                isActive: true,
            })
            this.clickToGoBackToFirst();
            //otp키 받아오기 요청
        }
    }

    //otp 비활성화 요청
    clickToDeactivateOTP = () => {
        let { code } = this.state;

        if (code.length == 0) {
            this.formValidation('code', '코드를 입력해주세요.');
        } else {
            this.setState({
                isActive: false,
            })
            this.clickToGoBackToFirst();
        }
        
    }

    //비활성화/활성화 컨테이너 열기위한 버튼 클릭 시
    clickToRequest = (val) => {
        // val 요청을 위한 컨테이너 오픈
        this.setState({
            currentPage: val
        })
    }

    // otp 메인 화면으로 이동
    clickToGoBackToFirst = () => {
        this.setState({
            currentPage: '',
            code: ''
        })
    };

    // 복사된 후 callback
    afterCopy = (txt, result) => {
        if (result) {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '복사되었습니다.'
            });
        } else {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '복사에 실패하였습니다.'
            });
        }
    }

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

        let { isActive, otpKey, code, formErrors, currentPage } = this.state;

        return (
            <>
                <BGColour />
                <MypageOTPForm
                    isActive={isActive}
                    otpKey={otpKey}
                    code={code}
                    formErrors={formErrors}
                    handleChange={this.handleChange}
                    clickToDeactivateOTP={this.clickToDeactivateOTP}
                    clickToActivateOTP={this.clickToActivateOTP}
                    afterCopy={this.afterCopy}
                    clickToRequest={this.clickToRequest}
                    currentPage={currentPage}
                    clickToGoBackToFirst={this.clickToGoBackToFirst}
                />
            </>
        )
    }
};

export default connect()(MypageOTPFormContainer);