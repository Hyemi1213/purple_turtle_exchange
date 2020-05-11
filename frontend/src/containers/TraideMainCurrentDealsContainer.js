import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TradeMainCurrentDealTablePCForm from 'components/_base/TradeMainCurrentDealTablePCForm';

class TraideMainCurrentDealsContainer extends Component {

    //pc용

    state = {
        tableHeadList: [],
        tableBodyList: [],
    }

    componentDidMount() {
        let { baseCurrency } = this.props.base;

        if(baseCurrency.length !== 0) {
            this.getMarketLists();
            this.getCurrencyInfo();
        }

    }

    componentDidUpdate(prevProps) {
        let { baseCurrency, quoteCurrency } = this.props.base;

        if (prevProps.base.baseCurrency !== baseCurrency || prevProps.base.quoteCurrency !== quoteCurrency) {
            this.getMarketLists();
            this.getCurrencyInfo();
        }
    }

    getCurrencyInfo = () => {
        let { baseCurrency, quoteCurrency } = this.props.base;
        this.setState({
            tableHeadList: [{
                title: '종류',
            }, {
                title: `수량(${baseCurrency})`
            }, {
                title: `가격(${quoteCurrency})`
            }]
        })
    }

    getMarketLists = () => {
        this.setState({
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

    render () {

        let { tableBodyList, tableHeadList } = this.state;

        let { isMobile } = this.props.base;

        return (
            <TradeMainCurrentDealTablePCForm
                tableHeadList={tableHeadList}
                tableBodyList={tableBodyList}
                isMobile={isMobile}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(TraideMainCurrentDealsContainer));