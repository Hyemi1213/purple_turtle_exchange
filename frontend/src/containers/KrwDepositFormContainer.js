import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { allowOnePeriod, onlyNumber } from 'lib/functions';

import MainBG from 'components/_base/MainBG';
import DepositForm from 'components/_base/DepositForm';
import MoneyTradeForm from 'components/_base/MoneyTradeForm';
import KrwTransactionCard from 'components/_base/KrwTransactionCard';

class KrwDepositFormContainer extends Component {

    state = {
        amount: '',
        askModal: false,
        formErrors: {
            amount: ''
        },
        fee: 0.0001,
        minimumToWithdraw: 0.01234,
        otpcode: '',
        isWithdrawl: false,
        historyList: [],
        isKrwConfirmModalOpen: false,
        krwConfirmModalUserInfoLists: [],
        krwConfirmModalSubmitInfoLists: []
    }

    componentDidMount() {
        this.getRecentRequest();
    }

    //최근 입금 신청 내역 불러오기
    getRecentRequest = () => {
        this.setState({
            historyList: [{
                isCancelable: true,
                date: '2018.05.05 12:26:34',
                contents: [{
                    title: '은행',
                    content: '신한은행'
                }, {
                    title: '예금주',
                    content: 'PT3'
                }, {
                    title: '계좌번호',
                    content: '123-123-12348'
                }, {
                    title: '입금신청액',
                    content: 130000
                }, {
                    title: '받는이 메세지',
                    content: '귀여운수달12'
                }]
            }, {
                isCancelable: false,
                date: '2019.03.05 15:26:34',
                contents: [{
                    title: '은행',
                    content: '신한은행'
                }, {
                    title: '예금주',
                    content: 'PT3'
                }, {
                    title: '계좌번호',
                    content: '123-123-12348'
                }, {
                    title: '입금신청액',
                    content: 130000
                }, {
                    title: '받는이 메세지',
                    content: '귀여운수달12'
                }]
            }]
        })
    }

    //krw 입금 신청
    clickToSubmit = async() => {
        try {
            await this.props.dispatch({
                type: 'CURRENT_STATUS',
                status: 'deposit'
            });
            await this.onModalClose();

            let { isMobile } = this.props.base;
            if (isMobile) {
                await this.props.history.push(`/assets/krw/success`);
            }else {
                await this.getUserAccountData();
                await this.getDepositAccountData();
                this.setState({
                    isKrwConfirmModalOpen: true,
                    amount: ''
                })
            }
        }
        catch(e){
            console.error(e);
        }
        
    }

    //회원의 계좌정보 불러오기
    getUserAccountData = () => {
        this.setState({
            krwConfirmModalUserInfoLists: [{
                title: '은행',
                content: '하나은행'
            }, {
                title: '계좌번호',
                content: '65-654654-6546841'
            }, {
                title: '예금주',
                content: '홍길동'
            }]
        })
    }

    //krw 입금 정보 불러오기
    getDepositAccountData = () => {
        let { amount } = this.state;
        this.setState({
            krwConfirmModalSubmitInfoLists: [{
                title: '은행',
                content: '신한은행'
            }, {
                title: '예금주',
                content: 'PT3'
            }, {
                title: '계좌번호',
                content: '654-5416541-351'
            }, {
                title: '입금액',
                content: amount
            }, {
                title: '받는이 메세지',
                content: '귀여운수달12',
                infobox: ['송금시에 이 메세지를 입력하여 보내주십시오', '입금코드와 금액이 입금예약사항과 정확히 일치해야합니다.']
            }]
        })
    }

    //입금 신청 취소하기 버튼 클릭했을 때 모달 열기
    clickToOpenModal = (val) => {
    }

    // 모달 토글
    modalToggle = (val) => {

        if (val == 'krwConfirm'){
            //krw 입출금 확인 모달
            this.setState({
                isKrwConfirmModalOpen: !this.state.isKrwConfirmModalOpen
            });

        }else {
            //나머지 기본 모달
            //val == 'default'
            let { amount } = this.state;
            if (amount.length < 1) {
                this.formValidation('amount', '수량을 입력해주세요.');
            } else {
                this.setState({
                    askModal: !this.state.askModal
                });
            }
        }

    }

    // 모달 닫기
    onModalClose = () => {
        this.setState({
            askModal: false,
            isKrwConfirmModalOpen: false
        });
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let { minimumToWithdraw } = this.state;

        if (name == 'amount') {
            this.setState({
                [name]: value
            });

            if (value.length == 0) {
                this.formValidation(name, '수량을 입력해주세요.');
            } else if (!allowOnePeriod(value)) {
                this.setState({
                    [name]: value.substring(0, value.length - 1)
                });
            } else if (value < minimumToWithdraw) {
                this.formValidation(name, '최소 출금량 보다 적습니다.');
            } else {
                this.formValidation(name, '');
            }

        }else if(name == 'otpcode') {
            if (onlyNumber(value)){
                this.setState({
                    [name]: value
                })
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

        let { amount, formErrors, askModal, fee, minimumToWithdraw, otpcode, historyList, isWithdrawl, isKrwConfirmModalOpen, krwConfirmModalUserInfoLists, krwConfirmModalSubmitInfoLists } = this.state;

        let { isBankExist } = this.props;

        let infoLists = [{
            content: `거래소 자율 규제안에 의해 1인 1계좌만 등록이 가능합니다.`
        }, {
            content: `현재 NH농협 계좌만 등록이 가능합니다.`
        }];

        let modalInfoLists = [{
            content: '인증된 계좌로만 보내야 출금이 승인됩니다.'
        }, {
            content: '비인증 계좌로 보내실 경우 출금이 승인되지 않습니다.'
        }, {
            content: '다른 문의사항이 있을 시에 하단 고객센터에 문의해주십시오.'
        }, {
            content: '(추후 주의사항 텍스트 작성요망)'
        }];

        let modalContentLists = [{
            title: '입금액',
            content: `${amount} krw`
        }, {
            title: '수수료',
            content: `${fee} krw`
        }];

        return (
            <>
                {isBankExist ? 
                    <>
                        <MainBG
                            isMobileOnly
                            height={26.7}
                        />
                        <MoneyTradeForm
                            isKrwDeposit={true}
                            handleChange={this.handleChange}
                            clickToSubmit={this.clickToSubmit}
                            infoLists={infoLists}
                            currentAssetSymbol='krw'
                            amount={amount}
                            otpcode={otpcode}
                            clickToModal={this.modalToggle}
                            formErrors={formErrors}
                            isModalOpen={askModal}
                            onModalClose={this.onModalClose}
                            fee={fee}
                            minimumToWithdraw={minimumToWithdraw}
                            modalContentLists={modalContentLists}
                            modalInfoLists={modalInfoLists}
                            noPadding
                            isKrwConfirmModalOpen={isKrwConfirmModalOpen}
                            krwConfirmModalUserInfoLists={krwConfirmModalUserInfoLists}
                            krwConfirmModalSubmitInfoLists={krwConfirmModalSubmitInfoLists}
                        />
                        <KrwTransactionCard
                            clickToOpenModal={this.clickToOpenModal}
                            lists={historyList}
                            isWithdrawl={isWithdrawl}
                        />
                    </>
                :
                    <>
                        <MainBG
                            isMobileOnly
                            height={20.7}
                        />
                        <DepositForm
                            isKrw={true}
                        />
                    </>
                }
                
            </>
            
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(KrwDepositFormContainer));