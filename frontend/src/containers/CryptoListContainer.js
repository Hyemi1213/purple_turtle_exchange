import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sortCondition } from 'lib/functions';

import CryptoListForm from 'components/_base/CryptoListForm';

class CryptoListContainer extends Component {

    state = {
        tableBodyList: [],
        tableHeadList: [{
            title: '페어',
            value: 'pair',
            isSorted: false
        }, {
            title: '현재가',
            value: 'price',
            isSorted: false
        }, {
            title: '변동률',
            value: 'volatility',
            isSorted: false
        }, {
            title: '거래량',
            value: 'volumn',
            isSorted: false
        }],
        cryptoLists: [],
        sortLists: [{
            title: '즐겨찾기',
            titleVal:'fav',
            isFav: true,
            isSorted: false
        }],
        currentSelectVal: [],
        search: '',
    }

    async componentDidMount() {

        await this.getTradeData();
        await this.getCryptoLists();
        await this.clickToSortFav();

        let { quoteCurrency } = this.props.base;

        this.setState({
            //기본 마켓페어
            currentSelectVal: {
                value: quoteCurrency,
                label: quoteCurrency.toUpperCase()
            }
        });
    }

    // (공통)셀렉트 바 안에 들어갈 암호화폐 갖고오기
    getCryptoLists = () => {

        this.setState({
            cryptoLists: [{
                value: 'eth',
                label: 'ETH'
            }, {
                value: 'btc',
                label: 'BTC'
            }, {
                value: 'cud',
                label: 'CUD'
            }, {
                value: 'krw',
                label: 'KRW'
            }]
        })
    }

    // (공통)암호화폐 검색하기
    searchCrypto = (e) => {
        e.preventDefault();
        let { search } = this.state;
    }

    // (공통)즐겨찾기 설정 및 해제
    clickToSetFav = (val) => {
    }

    // (공통)즐겨찾기 정렬
    clickToSortFav = (val) => {
        let { sortLists } = this.state;

        if(!sortLists[0].isSorted) {
            this.setState(prevState => ({
                tableBodyList: prevState.tableBodyList.sort((a, b) => {
                    return sortCondition(a.isFav, b.isFav)
                }),
                sortLists: prevState.sortLists.map((list, idx) => {
                    return { ...list, isSorted: !list.isSorted }
                })
            }))
        }else {
            this.setState(prevState => ({
                tableBodyList: prevState.tableBodyList.sort((a, b) => {
                    return sortCondition(b.isFav, a.isFav)
                }),
                sortLists: prevState.sortLists.map((list, idx) => {
                    return { ...list, isSorted: !list.isSorted }
                })
            }))
        }
    }

    // (공통)table head 정렬
    clickToSort = (val) => {
        if(val.isSorted) {
            this.setState(prevState => ({
                tableBodyList: prevState.tableBodyList.sort((a, b) => {
                    return sortCondition(a[val.value], b[val.value]);
                }),
                tableHeadList: prevState.tableHeadList.map((list, idx) => {
                    return list.value == val.value ? {...list, isSorted: !list.isSorted } : list
                })
            }));
        }else {
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

    // (공통)암호화폐 정보 리스트들 갖고오기
    getTradeData = () => {
        this.setState({
            tableBodyList: [{
                pair: 'eth',
                price: 0.0032151,
                volatility: 2.6,
                volumn: 3215312154,
                isFav: false,
            }, {
                pair: 'btc',
                price: 256416562.51544231,
                volatility: -10.55,
                volumn: 1651654135335463512,
                isFav: true,
            }, {
                pair: 'cud',
                price: 1.1513,
                volatility: -5.55,
                volumn: 621,
                isFav: true,
            }, {
                pair: 'eth',
                price: 0.0032151,
                volatility: 2.6,
                volumn: 3215312154,
                isFav: false,
            }, {
                pair: 'btc',
                price: 256416562.51544231,
                volatility: -10.55,
                volumn: 1651654135335463512,
                isFav: true,
            }, {
                pair: 'cud',
                price: 1.1513,
                volatility: -5.55,
                volumn: 621,
                isFav: true,
            }]
        });
    }

    //셀렉트바 클릭 시 
    handleSelectBar = (val) => {
        this.setState({
            currentSelectVal: val
        });

        let { baseCurrency, isMobile } = this.props.base;
        
        if(isMobile) {
            this.getTradeData();
        }else {
            this.props.dispatch({
                type: 'SAVE_CURRENCY',
                baseCurrency: baseCurrency,
                quoteCurrency: val.value
            })

            this.props.history.push(`/trade/${baseCurrency}_${val.value}`);
        }
        
    }

    // (공통)암호화폐 리스트 하나 클릭 했을 때 디테일 페이지로 이동
    moveToDetailPage = (val) => {
        let { currentSelectVal } = this.state;

        //드롭다운된거 다시 닫기(CurrentMarketPariInfo.js 참고)
        let { clickToClose } = this.props;
        clickToClose !== undefined && clickToClose();

        this.props.dispatch({
            type: 'SAVE_CURRENCY',
            baseCurrency: val.pair,
            quoteCurrency: currentSelectVal.value
        })

        this.props.history.push(`/trade/${val.pair}_${currentSelectVal.value}`);
    }

    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    render () {

        let { tableBodyList, tableHeadList, cryptoLists, sortLists, currentSelectVal, search } = this.state;

        let { baseCurrency, quoteCurrency } = this.props.base;

        let { isMobile } = this.props.base;

        return (
            <CryptoListForm
                tableHeadList={tableHeadList}
                tableBodyList={tableBodyList}
                clickToSort={this.clickToSort}
                cryptoLists={cryptoLists}
                sortLists={sortLists}
                clickToSortFav={this.clickToSortFav}
                clickToSetFav={this.clickToSetFav}
                handleSelectBar={this.handleSelectBar}
                currentSelectVal={currentSelectVal}
                handleInput={this.handleInput}
                search={search}
                searchCrypto={this.searchCrypto}
                moveToDetailPage={this.moveToDetailPage}
                baseCurrency={baseCurrency}
                quoteCurrency={quoteCurrency}
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

export default connect(mapStateToProps)(withRouter(CryptoListContainer));