import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BGColour from 'components/_common/BGColour';
import DeleteAccountForm from 'components/_base/DeleteAccountForm';

class DeleteAccountPageContainer extends Component {

    state = {
        agree: false,
        formErrors: {
            agree: ''
        },
        askModal: false
    }

    // 회원 삭제 요청
    clickToDelete = async(e) => {
        e.preventDefault();

        //요청
        await this.props.dispatch({
            type: 'IS_LOADING_OPEN'
        });

        this.setState({
            agree: '',
        });

        await this.props.dispatch({
            type: 'NO_PERMIT_AUTH'
        });

        await this.props.dispatch({
            type: 'IS_LOADING_CLOSE'
        });

        await this.props.history.push(`/delete/success`);

        // await this.props.dispatch({
        //     type: 'ALERT_OPEN',
        //     alertType: 'success',
        //     alertMsg: '성공적으로 회원탈퇴 되었습니다.'
        // });
    }

    // 모달 토글
    modalToggle = () => {
        let { agree } = this.state;

        if (!agree) {
            this.formValidation('agree', '동의해주세요.');
        } else {
            this.setState({
                askModal: !this.state.askModal
            });
        }
    }

    // 모달 닫기
    onModalClose = () => {
        this.setState({
            askModal: false
        });
    }

    // 체크박스 인풋 onChange
    handleCheckbox = (e) => {
        let name = e.target.name;
        let isChecked = e.target.checked;

        this.setState({
            [name]: isChecked
        });

        if (isChecked) {
            this.formValidation(name, '');
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

        let { agree, formErrors, askModal } = this.state;

        return (
            <>
                <BGColour />
                <DeleteAccountForm
                    clickToDelete={this.clickToDelete}
                    agree={agree}
                    handleCheckbox={this.handleCheckbox}
                    formErrors={formErrors}
                    isModalOpen={askModal}
                    modalToggle={this.modalToggle}
                    onModalClose={this.onModalClose}
                />
            </>
        )
    }
};

export default connect()(withRouter(DeleteAccountPageContainer));