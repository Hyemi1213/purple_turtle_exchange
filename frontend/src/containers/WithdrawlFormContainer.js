import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allowOnePeriod } from 'lib/functions';

import MainBG from 'components/_base/MainBG';
import MoneyTradeForm from 'components/_base/MoneyTradeForm';

class WithdrawlFormContainer extends Component {

    state = {
        address: '',
        amount: '',
        formErrors: {
            address: '',
            amount: ''
        },
        askModal: false,
        fee: 0.0001,
        minimumToWithdraw: 0.01234,
        isAbleToQr: false
    }

    //출금 요청
    clickToWithdraw = async() => {
        await this.props.dispatch({
            type: 'IS_LOADING_OPEN'
        });

        this.setState({
            address: '',
            amount: ''
        });
        
        await this.onModalClose();

        await this.props.dispatch({
            type: 'IS_LOADING_CLOSE'
        });

        await this.props.dispatch({
            type: 'ALERT_OPEN',
            alertType: 'success',
            alertMsg: '성공적으로 출금되었습니다.'
        });
        
    }

    //클릭 시 출금 가능한 선에서 최대 금액으로 출금 수량 변경
    clickToWithdrawlMax = () => {
    }

    // 인풋 onChange
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let { minimumToWithdraw } = this.state;

        this.setState({
            [name]: value
        });

        if (name == 'address') {
            if (value.length == 0) {
                this.formValidation(name, '주소를 입력해주세요.');
            } else {
                this.formValidation(name, '');
            }
        } else if (name == 'amount') {
            if (value.length == 0) {
                this.formValidation(name, '수량을 입력해주세요.');
            } else if (!allowOnePeriod(value)) {
                this.setState({
                    [name]: value.substring(0, value.length - 1) 
                });
            } else if(value <  minimumToWithdraw) {
                this.formValidation(name, '최소 출금량 보다 적습니다.');
            } else {
                this.formValidation(name, '');
            }
        } 
    }

    // 모달 토글
    modalToggle = () => {
        let { address, amount } = this.state;

        if(address.length < 1 ) {
            this.formValidation('address', '주소를 입력해주세요.');
        } else if (amount.length < 1) {
            this.formValidation('amount', '수량을 입력해주세요.');
        }else {
            this.setState({
                askModal: !this.state.askModal
            });
        }
        
    }

    //qr코드 모달 열기
    toggleQrCode = () => {
        let { isMobile } = this.props.base;
        if(isMobile) {
            this.setState({
                isAbleToQr: true
            }); 
        }else {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: 'PC에서는 QR코드 기능을 제공하지 않습니다.'
            });
        }
    }

    //qr코드 스캔
    handleQrScan = (data) => {
        if (data) {
            this.setState({
                address: data
            })
        }
    }

    //qr코드 스캔 에러
    handleQrError = (err) => {
        console.error(err);
    }

    // 모달 닫기
    onModalClose = () => {
        this.setState({
            askModal: false
        });
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

        let { address, amount, formErrors, askModal, fee, minimumToWithdraw, isAbleToQr } = this.state;

        let { currentAssetSymbol, currentAssetName } = this.props.asset;

        let infoLists = [{
            content: `암호화폐의 특성상 출금신청이 완료되면 취소할 수 없습니다. 보내지 전 주소와 수량을 꼭 확인해주세요.`
        }, {
            content: `${currentAssetName}은 ${currentAssetName} 지갑으로만 송금 가능합니다. 다른 암호화폐 지갑으로 잘못 송금하는 경우인PT3에서 도와드릴 수 있는 부분이 없습니다.`
        }, {
            content: `출금신청 완료 이후의 송금 과정은 블록체인 네트워크에서 처리됩니다.이 과정에서 발생할 수 있는 송금 지연 등의 문제는 PT3에서 처리가 불가능합니다.`
        }];

        let modalContentLists = [{
            title: '종류',
            content: currentAssetSymbol
        }, {
            title: '수량',
            content: `${amount} ${currentAssetSymbol}`
        }, {
            title: '수수료',
            content: `${fee} ${currentAssetSymbol}`
        }, {
            title: '지갑주소',
            content: address,
            blocklize: true
        }];

        return (
            <>
                <MainBG
                    isMobileOnly
                    height={23.5}
                />
                <MoneyTradeForm
                    clickToModal={this.modalToggle}
                    clickToSubmit={this.clickToWithdraw}
                    handleChange={this.handleChange}
                    address={address}
                    amount={amount}
                    formErrors={formErrors}
                    isModalOpen={askModal}
                    onModalClose={this.onModalClose}
                    fee={fee}
                    currentAssetSymbol={currentAssetSymbol}
                    minimumToWithdraw={minimumToWithdraw}
                    infoLists={infoLists}
                    clickToWithdrawlMax={this.clickToWithdrawlMax}
                    modalContentLists={modalContentLists}
                    handleQrScan={this.handleQrScan}
                    handleQrError={this.handleQrError}
                    toggleQrCode={this.toggleQrCode}
                    isAbleToQr={isAbleToQr}
                    isWithdrawl={true}
                    noPadding
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        asset: state.asset,
        base: state.base
    }
}

export default connect(mapStateToProps)(WithdrawlFormContainer);