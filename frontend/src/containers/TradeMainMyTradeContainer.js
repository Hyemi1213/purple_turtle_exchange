import React, { Component } from 'react';
import { connect } from 'react-redux';

import TradeMainMyTradeTablePCForm from 'components/_base/TradeMainMyTradeTablePCForm';

class TradeMainMyTradeContainer extends Component {

    state = {
        currentMenuValue: 'finished',
        tableBodyList: [],
        TableHeadPCFinished: [],
        TableHeadPCUnfinished: [],
        isModalOpen: false,
        modalContentLists: [],
        finalContentContent: []
    }

    componentDidMount() {
        let { baseCurrency } = this.props.base;

        if (baseCurrency.length !== 0) {
            this.getFinishedList();
        }

    }

    componentDidUpdate(prevProps) {
        let { baseCurrency, quoteCurrency } = this.props.base;

        if (prevProps.base.baseCurrency !== baseCurrency || prevProps.base.quoteCurrency !== quoteCurrency) {
            this.getFinishedList();
        }
    }

    //주문취소 요청하기
    clickToCancelOrder = async() => {
        try {
            this.onModalClose();
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '주문 취소가 완료되었습니다.'
            });
        }
        catch(e) {
            console.error(e)
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '주문 취소에 실패하였습니다.'
            });
        }
    }

    //모달 열기
    clickToOpenModal = (val) => {
        let { baseCurrency, quoteCurrency } = this.props.base;
        this.setState({
            isModalOpen: true,
            modalContentLists: [{
                title: '종류',
                content: `${baseCurrency}/${quoteCurrency}`
            }, {
                title: '유형',
                content: val.isSell ? '매도' : '매수'
            }, {
                title: '수량',
                content: `${val.amount} ${baseCurrency}`
            }, {
                title: '가격',
                content: `${val.price} ${quoteCurrency}`
            }],
            finalContentContent: `${val.leftAmount} ${baseCurrency}`
        })
    }

    //모달 닫기
    onModalClose = () => {
        this.setState({
            isModalOpen: false
        })
    }

    //모달 열고닫기
    clickToModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }))
    }

    //체결내역 불러오기
    getFinishedList = () => {

        let { baseCurrency, quoteCurrency } = this.props.base;
        this.setState({
            TableHeadPCFinished: [{
                title: '종류',
            }, {
                title: '시간',
            }, {
                title: `수량(${baseCurrency.toUpperCase()})`
            }, {
                title: `가격(${quoteCurrency.toUpperCase()})`
            }],
            tableBodyList: [{
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                fee: 0.01,
            }, {
                date: '2019.01.15 22:06:14',
                isSell: true,
                amount: 500.215,
                price: 0.751125412,
                fee: 0.01,
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                fee: 0.01,
            }, {
                date: '2019.01.15 22:06:14',
                isSell: true,
                amount: 500.215,
                price: 0.751125412,
                fee: 0.01,
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                fee: 0.01,
            }, {
                date: '2019.01.15 22:06:14',
                isSell: true,
                amount: 500.215,
                price: 0.751125412,
                fee: 0.01,
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                fee: 0.01,
            }, {
                date: '2019.01.15 22:06:14',
                isSell: true,
                amount: 500.215,
                price: 0.751125412,
                fee: 0.01,
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                fee: 0.01,
            }, {
                date: '2019.01.15 22:06:14',
                isSell: true,
                amount: 500.215,
                price: 0.751125412,
                fee: 0.01,
            }]
        })
    }

    //미체결 내역 불러오기
    getUnfinishedList = () => {

        let { baseCurrency, quoteCurrency } = this.props.base;
        this.setState({
            TableHeadPCUnfinished: [{
                title: '종류'
            }, {
                title: '시간'
            }, {
                title: `수량(${baseCurrency.toUpperCase()})`
            }, {
                title: `가격(${quoteCurrency.toUpperCase()})`
            }, {
                title: '미체결수량'
            }, {
                title: '취소'
            }],
            tableBodyList: [{
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }, {
                date: '2018.05.05 12:26:34',
                isSell: false,
                amount: 10.21510,
                price: 0.2124,
                leftAmount: 5
            }]
        })
    }


    //체결내역 미체결 내역 메뉴 클릭 시
    clickToChangeMenu = (val) => {
        this.setState({
            currentMenuValue: val
        });

        if(val == 'finished') {
            this.getFinishedList();
        }else if(val == 'unfinished') {
            this.getUnfinishedList();
        }
    }

    render () {

        let { currentMenuValue, tableBodyList, TableHeadPCFinished, TableHeadPCUnfinished, isModalOpen, modalContentLists, finalContentContent } = this.state;

        let { isAuthed } = this.props.user;

        return (
            <TradeMainMyTradeTablePCForm
                clickToChangeMenu={this.clickToChangeMenu}
                currentMenuValue={currentMenuValue}
                tableBodyList={tableBodyList}
                isAuthed={isAuthed}
                TableHeadPCFinished={TableHeadPCFinished}
                TableHeadPCUnfinished={TableHeadPCUnfinished}
                isModalOpen={isModalOpen}
                clickToCancelOrder={this.clickToCancelOrder}
                clickToOpenModal={this.clickToOpenModal}
                onModalClose={this.onModalClose}
                clickToModal={this.clickToModal}
                modalContentLists={modalContentLists}
                finalContentContent={finalContentContent}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base,
        user: state.user
    }
}

export default connect(mapStateToProps)(TradeMainMyTradeContainer);