import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sortCondition } from 'lib/functions';

import HomePageForm from 'components/_base/HomePageForm';

class HomePageContainer extends Component {

    state = {
        quoteCurrencyLists: [],
        currentQuoteCurrency: 'krw',
        tableHeadList: [{
            title: '마켓페어',
            value: 'pair',
            isSorted: false
        }, {
            title: '현재가',
            value: 'price',
            isSorted: false
        }, {
            title: '변동률',
            value: 'change',
            isSorted: false
        }, {
            title: '거래량',
            value: 'volumn',
            isSorted: false
        }, {
            title: '최고가',
            value: 'highest',
            isSorted: false
        }, {
            title: '최저가',
            value: 'lowest',
            isSorted: false
        }],
        tableBodyList: [],
        hasMore: true
    }

    componentDidMount() {
        this.getQuoteCurrencyLists();
        this.getTradeData();
    }

    // 암호화폐 정보들 불러오기 요청
    getTradeData = () => {
        this.setState({
            tableBodyList: [{
                pair: 'eth',
                price: 0.0032151,
                volatility: 2.6,
                volumn: 3215312154,
                highest: 321512,
                lowest: 65132412
            }, {
                pair: 'btc',
                price: 256416562.51544231,
                volatility: -10.55,
                volumn: 1651654135335463512,
                highest: 321512,
                lowest: 65132412
            }, {
                pair: 'cud',
                price: 1.1513,
                volatility: -5.55,
                volumn: 621,
                highest: 321512,
                lowest: 65132412
            }]
        });
    }

    //QuoteCurrency 리스트 불러오기 요청
    getQuoteCurrencyLists = () => {
        this.setState({
            quoteCurrencyLists: [{
                name: 'krw',
                value: 'krw',
            }, {
                name: 'btc',
                value: 'btc',
            }, {
                name: 'eth',
                value: 'eth',
            }, {
                name: 'eos',
                value: 'eos',
            }]
        })
    }

    //정렬
    clickToSort = (val) => {
        if (val.isSorted) {
            this.setState(prevState => ({
                tableBodyList: prevState.tableBodyList.sort((a, b) => {
                    return sortCondition(a[val.value], b[val.value]);
                }),
                tableHeadList: prevState.tableHeadList.map((list, idx) => {
                    return list.value == val.value ? { ...list, isSorted: !list.isSorted } : list
                })
            }));
        } else {
            this.setState(prevState => ({
                tableBodyList: prevState.tableBodyList.sort((a, b) => {
                    return sortCondition(b[val.value], a[val.value]);
                }),
                tableHeadList: prevState.tableHeadList.map((list, idx) => {
                    return list.value == val.value ? { ...list, isSorted: !list.isSorted } : list
                })
            }));
        }
    }

    //상세페이지로 이동
    moveToDetailPage = (val) => {
        let { currentQuoteCurrency } = this.state;
        this.props.history.push(`/trade/${val.pair}_${currentQuoteCurrency}`);

    }

    //암호화폐 목록 더 불러오기 요청
    clickToGetMoreLists = () => {
    }

    //탭 클릭
    clickedTab = (val) => {
        this.setState({
            currentQuoteCurrency: val
        });
    }

    render () {

        let { quoteCurrencyLists, currentQuoteCurrency, tableHeadList, tableBodyList, hasMore } = this.state;

        let { isMobile } = this.props.base;

        return (
            <>
                <HomePageForm
                    quoteCurrencyLists={quoteCurrencyLists}
                    tableHeadList={tableHeadList}
                    tableBodyList={tableBodyList}
                    clickedMenu={this.clickedTab}
                    currentTabMenu={currentQuoteCurrency}
                    clickToSort={this.clickToSort}
                    quoteCurrency={currentQuoteCurrency}
                    clickToGetMoreLists={this.clickToGetMoreLists}
                    hasMore={hasMore}
                    moveToDetailPage={this.moveToDetailPage}
                    isMobile={isMobile}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(HomePageContainer));