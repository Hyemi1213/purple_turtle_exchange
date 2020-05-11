import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentMenu } from 'lib/functions';
import { withRouter } from 'react-router-dom';
import { onlyNumber } from 'lib/functions';

import BGColour from 'components/_common/BGColour';
import SecurityForm from 'components/_base/SecurityForm';
import ManageBankingForm from 'components/_base/ManageBankingForm';

class SecurityFormContainer extends Component {

    state = {
        emailAuth: {
            content: 'asdf@mail.com'
        },
        phoneAuth: {
            isAuth: false,
            content: ''
        },
        bankingAuth: {
            isAuth: false,
            content: ''
        },
        clickedMenu: '',
        formErrors: {
            account: '',
            accountHolder: '',
            phone: '',
            bday: '',
            agree: '',
            currentBank: ''
        },
        account: '',
        accountHolder: '',
        phone: '',
        bday: '',
        agree: false,
        currentModalOpen: '',
        modalContentLists: [],
        bankLists: [{
            value: 'kukmin',
            label: '국민은행'
        }, {
            value: 'woori',
            label: '우리은행'
        }, {
            value: 'nh',
            label: '농협은행'
        }],
        currentBank: [],
        ruleContent: '이용약관이다'
    }

    componentDidMount() {
        saveCurrentMenu(this.props.dispatch, this.props.title);
    }

    //핸드폰 인증
    clickToManagePhone = () => {
    }

    //서버에 계좌 인증 요청
    clickToManageBanking = () => {
        this.setState({
            currentModalOpen: '',
            account: '',
            accountHolder: '',
            phone: '',
            bday: '',
            agree: false,
            clickedMenu: 'banking'
        });
    }

    //보안인증 메인 페이지로 이동
    clickToMainPage = () => {
        this.setState({
            clickedMenu: ''
        })
    }
    
    //은행계좌 등록하기
    clickToRegisterAccount = () => {
        this.setState({
            currentModalOpen: '',
            clickedMenu: '',
            account: '',
            accountHolder: '',
            phone: '',
            bday: '',
            agree: false
        });
    }

    //모달 열기
    clickToOpenModal = (val) => {

        //은행계좌 인증 모달
        if(val == 'banking') {
            let { account, accountHolder, phone, bday, currentBank, agree } = this.state;

            if(currentBank.length == 0) {
                this.formValidation('currentBank', '은행을 선택해주세요.')
            }else if(account.length == 0) {
                this.formValidation('account', '계좌번호를 입력해주세요.')
            }else if(accountHolder.length == 0) {
                this.formValidation('accountHolder', '예금주를 입력해주세요.')
            }else if(phone.length == 0) {
                this.formValidation('phone', '핸드폰번호를 입력해주세요.')
            }else if(bday == 0) {
                this.formValidation('bday', '생년월일을 입력해주세요.')
            }else if(!agree) {
                this.formValidation('agree', '동의해주세요.')
            }else {
                this.setState({
                    modalContentLists: [{
                        title: '은행선택',
                        content: currentBank.label
                    }, {
                        title: '계좌번호',
                        content: account
                    }, {
                        title: '예금주',
                        content: accountHolder
                    }, {
                        title: '핸드폰 번호',
                        content: phone
                    }],
                    currentModalOpen: val
                })
            }
        }else if(val == 'rules') {
            this.setState({
                currentModalOpen: val
            })
        }
    }

    //모달 토글
    clickToToggleModal = (val) => {
        let { currentModalOpen } = this.state;

        if(currentModalOpen.length > 0){
            this.setState({
                currentModalOpen: ''
            })
        }else {
            this.setState({
                currentModalOpen: val
            })
        }
    }

    clickToCloseModal = () => {
        this.setState({
            currentModalOpen: ''
        })
    }

    //셀렉트바 onChange
    handleSelectBar = (val) => {
        this.setState({
            currentBank: val,
            formErrors: {
                ...this.state.formErrors,
                currentBank: ''
            }
        })
    }

    //약관 모달에서 동의 눌렀을 때 
    clickToAgree = () => {
        this.setState({
            agree: true
        });
        this.clickToCloseModal();
    }

    handleChange = (e) => {
        let name = e.target.name;
        
        if(name == 'agree') {
            let checked = e.target.checked;
            this.setState({
                agree: checked
            })
        }else {
            let value = e.target.value;

            if(onlyNumber(value) || name == 'accountHolder') {
                this.setState({
                    [name]: value
                });

                if(name == 'account') {
                    if(value.length == 0) {
                        this.formValidation(name, '계좌번호를 입력해주세요.')
                    }else {
                        this.formValidation(name, '')
                    }
                }else if(name == 'accountHolder') {
                    if (value.length == 0) {
                        this.formValidation(name, '예금주를 입력해주세요.')
                    } else {
                        this.formValidation(name, '')
                    }
                }else if(name == 'phone') {
                    if (value.length == 0) {
                        this.formValidation(name, '핸드폰번호를 입력해주세요.')
                    } else {
                        this.formValidation(name, '')
                    }
                }else if(name == 'bday') {
                    if (value.length == 0) {
                        this.formValidation(name, '생년월일을 입력해주세요.')
                    } else {
                        this.formValidation(name, '')
                    }
                }
            }
        }
    }

    formValidation = (name, errorMsg) => {
        this.setState(prevState => ({
            formErrors: {
                ...prevState.formErrors,
                [name]: errorMsg
            }
        }));
    }

    render () {

        let { emailAuth, phoneAuth, bankingAuth, clickedMenu, formErrors, account, accountHolder, phone, bday, agree, currentModalOpen, modalContentLists, bankLists, ruleContent } = this.state;

        let currentPage = '';

        if(clickedMenu == 'banking') {
            currentPage = <ManageBankingForm
                formErrors={formErrors}
                account={account}
                accountHolder={accountHolder}
                phone={phone}
                bday={bday}
                handleChange={this.handleChange}
                agree={agree}
                clickToCancelBank={this.clickToMainPage}
                currentModalOpen={currentModalOpen}
                clickToOpenModal={this.clickToOpenModal}
                clickToToggleModal={this.clickToToggleModal}
                clickToCloseModal={this.clickToCloseModal}
                clickToRegisterAccount={this.clickToRegisterAccount}
                modalContentLists={modalContentLists}
                handleSelectBar={this.handleSelectBar}
                bankLists={bankLists}
                clickToAgree={this.clickToAgree}
                ruleContent={ruleContent}
            />
        }

        return (
            <div className='g-content-padding-top'>
                {clickedMenu.length > 0 ? 
                    <>
                        <BGColour />
                        {currentPage}
                    </>
                    :
                    <>
                        <BGColour />
                        <SecurityForm
                            emailAuth={emailAuth}
                            phoneAuth={phoneAuth}
                            bankingAuth={bankingAuth}
                            clickToManagePhone={this.clickToManagePhone}
                            clickToManageBanking={this.clickToManageBanking}
                        />
                    </>
                }
            </div>
        )
    }
};

export default connect()(withRouter(SecurityFormContainer));