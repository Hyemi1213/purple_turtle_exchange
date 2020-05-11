import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allowOnePeriod } from 'lib/functions';
import { tradeMenu } from 'lib/variables';

import OrderForm from 'components/_base/OrderForm';
import MainBG from 'components/_base/MainBG';

class OrderFormContainer extends Component {

    state = {
        price: '',
        amount: '',
        isModalOpen: false,
        formErrors: {
            price: '',
            amount: ''
        },
        isBuying: true,
        currentBalance: 100,
        fee: 0.1,
        currentMenu: 'buy',
        modalContentLists: [],
        buyLists: [],
        sellLists: [],
        minimumAmount: 0,
        availableAmount: 0,
        usingAmount: 0
    }

    async componentDidMount() {

        let { baseCurrency, isMobile } = this.props.base;

        if (isMobile || (baseCurrency.length !== 0 && !isMobile)) {
            await this.getBuyLists();
            await this.getSellLists();
            await this.modifyOrderLists();
            await this.getMinimumAmount();
            await this.getCurrentPrice();
        }

    }

    async componentDidUpdate(prevProps) {
        let { baseCurrency, quoteCurrency } = this.props.base;

        if (prevProps.base.baseCurrency !== baseCurrency || prevProps.base.quoteCurrency !== quoteCurrency) {
            await this.getBuyLists();
            await this.getSellLists();
            await this.modifyOrderLists();
            await this.getMinimumAmount();
            await this.getCurrentPrice();
        }
    }

    // pc-only 현재시세 가져오기
    getCurrentPrice = () => {

        let { isMobile } = this.props.base;

        if(!isMobile) {
            this.setState({
                currentPrice: 0,
                currentPricePercentage: 0.12
            })
        }
    }

    //호가 매도 리스트 받아오기
    getSellLists = () => {

        let { isMobile } = this.props.base;

        if(isMobile) {
            //최대 4개
            this.setState({
                sellLists: [{
                    price: 45465413523.5462151,
                    amount: 74526564.121
                }, {
                    price: 6656.251,
                    amount: 2.121
                }, {
                    price: 11541352.5465121,
                    amount: 6571463.54
                }, {
                    price: 641.215,
                    amount: 0.121
                }]
            })
        }else {
            //pc
            //최대 8개
            this.setState({
                sellLists: [{
                    price: 45465413523.5462151,
                    amount: 0.121
                }, {
                    price: 6656.251,
                    amount: 0.121
                }, {
                    price: 11541352.5465121,
                    amount: 3.54
                }, {
                    price: 641.215,
                    amount: 4.121
                }, {
                    price: 445452.5465121,
                    amount: 5.54
                }, {
                    price: 741.215,
                    amount: 6.121
                }, {
                    price: 152.5465121,
                    amount: 0.54
                }, {
                    price: 34641.215,
                    amount: 8.121
                },]
            })
        }
        
    }

    //호가 매수 리스트 받아오기
    getBuyLists = () => {


        let { isMobile } = this.props.base;

        if(isMobile) {
            //최대 4개
            this.setState({
                buyLists: [{
                    price: 352.5465121,
                    amount: 6.54
                }, {
                    price: 361.215,
                    amount: 0.121
                }, {
                    price: 352.5465121,
                    amount: 163.54
                }, {
                    price: 31.215,
                    amount: 4210.121
                }]
            });
        } else {
            //pc
            //최대 8개
            this.setState({
                buyLists: [{
                    price: 352.5465121,
                    amount: 6.54
                }, {
                    price: 361.215,
                    amount: 0.121
                }, {
                    price: 352.5465121,
                    amount: 163.54
                }, {
                    price: 31.215,
                    amount: 4210.121
                }, {
                    price: 52.5465121,
                    amount: 3.54
                }, {
                    price: 131.215,
                    amount: 12.121
                }, {
                    price: 42.5465121,
                    amount: 61.54
                }, {
                    price: 41.215,
                    amount: 2.121
                }]
            });
        }
        
    }

    //퍼센트에 따른 수량 변경
    percentageAmount = (val) => {
    }

    //최소주문량
    getMinimumAmount = () => {
        this.setState({
            minimumAmount: 1
        })
    }

    // 최고 수량 기준으로 뒤에 % 배경 사이즈 조절하기
    modifyOrderLists = () => {

        let { buyLists, sellLists } = this.state;

        // 매수&매도 현재 나와있는 리스트에서 제일 큰 값
        // let greatestAmount = buyLists.concat(sellLists).reduce((prev, current) => (prev.amount > current.amount) ? prev : current).amount;

        //매수 현재 나와있는 리스트에서 제일 큰 값
        let buyGreatestAmount = buyLists.reduce((prev, current) => (prev.amount > current.amount) ? prev : current).amount;

        //매도 현재 나와있는 리스트에서 제일 큰 값
        let sellGreatestAmount = sellLists.reduce((prev, current) => (prev.amount > current.amount) ? prev: current).amount;

        this.setState(prevState => ({
            buyLists: prevState.buyLists.map((list) => {
                //배경 뒤 가로 길이(0%~100%) = 수량 / 제일 큰 값 * 100
                list.orderListPseudoWidth = parseInt(list.amount / buyGreatestAmount * 100);
                return list;
            }), 
            sellLists: prevState.sellLists.map((list) => {
                //배경 뒤 가로 길이(0%~100%) = 수량 / 제일 큰 값 * 100
                list.orderListPseudoWidth = parseInt(list.amount / sellGreatestAmount * 100);
                return list;
            })
        }));

    }

    //어떤 메뉴를 선택했는지
    clickedMenu = (val) => {
        this.setState({
            currentMenu: val,
            isBuying: val == 'buy'
        });

        //어떤 메뉴를 클릭했느냐에 따라서 historyLists 안의 객체들 변경해주기
    }

    //매수매도 서버에 요청하기
    clickToOrder = (val) => {
        if(val == 'buy') {
            //매수하기
            this.setState({
                price: '',
                amount: ''
            })  
            this.onModalClose();
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '성공적으로 매수되었습니다.'
            });
        }else {
            //매도하기
            this.setState({
                price: '',
                amount: ''
            })  
            this.onModalClose();
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '성공적으로 매도되었습니다.'
            });
        }
        
    }

    //매수&매도 재확인 모달 열기
    modalToggle = () => {

        let { price, amount, fee } = this.state;

        let { baseCurrency } = this.props.base;

        if(price.length == 0){
            this.formValidation('price', '가격을 입력해주세요.');
        }else if (amount.length == 0){
            this.formValidation('amount', '수량을 입력해주세요.');
        }else {
            this.setState({
                isModalOpen: !this.state.isModalOpen,
                modalContentLists: [{
                    title: '주문코인',
                    content: baseCurrency
                }, {
                    title: '주문량',
                    content: amount
                }, {
                    title: '매수가',
                    content: price
                }, {
                    title: '수수료',
                    content: fee
                }]
            });
        }
    }

    onModalClose = () => {
        this.setState({
            isModalOpen: false
        });
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });

        if(name == 'price') {
            if(value.length == 0) {
                this.formValidation(name, '가격을 입력해주세요.');
            }else if(!allowOnePeriod(value) || this.state.currentBalance < value){
                this.setState({
                    [name]: value.substring(0, value.length - 1) 
                });
            }else {
                this.formValidation(name, '');
            }
        }else if(name == 'amount') {
            if(value.length == 0) {
                this.formValidation(name, '수량을 입력해주세요.');
            }else if(!allowOnePeriod(value)){
                this.setState({
                    [name]: value.substring(0, value.length - 1) 
                });
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

        let { price, amount, formErrors, isBuying, isModalOpen, currentBalance, fee, currentMenu, modalContentLists, buyLists, sellLists, minimumAmount, availableAmount, usingAmount, currentPrice, currentPricePercentage } = this.state;

        let { isAuthed } = this.props.user;

        let { isMobile, baseCurrency, quoteCurrency } = this.props.base;

        return (
            <>
                <MainBG
                    isMobileOnly
                    height={20}
                />
                <OrderForm
                    formErrors={formErrors}
                    isBuying={isBuying}
                    isModalOpen={isModalOpen}
                    price={price}
                    amount={amount}
                    fee={fee}
                    baseCurrency={baseCurrency.toUpperCase()}
                    quoteCurrency={quoteCurrency.toUpperCase()}
                    currentBalance={currentBalance}
                    modalToggle={this.modalToggle}
                    onModalClose={this.onModalClose}
                    clickToOrder={this.clickToOrder}
                    handleChange={this.handleChange}

                    movingTabMenu={tradeMenu}
                    clickedMenu={this.clickedMenu}
                    currentMenu={currentMenu}
                    modalContentLists={modalContentLists}
                    buyLists={buyLists}
                    sellLists={sellLists}
                    percentageAmount={this.percentageAmount }
                    minimumAmount={minimumAmount}

                    availableAmount={availableAmount}
                    usingAmount={usingAmount}
                    isAuthed={isAuthed}

                    currentPrice={currentPrice}
                    currentPricePercentage={currentPricePercentage}
                    isMobile={isMobile}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        base: state.base
    }
}

export default connect(mapStateToProps)(OrderFormContainer);