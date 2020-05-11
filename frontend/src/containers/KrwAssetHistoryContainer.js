import React, { Component } from 'react';
import { connect } from 'react-redux';
import { historyMenu } from 'lib/variables';

import MainBG from 'components/_base/MainBG';
import AssetHistoryForm from 'components/_base/AssetHistoryForm';

class KrwAssetHistoryContainer extends Component {

    //모바일에서는 내역 페이지네이션
    //pc에서는 내역 무한스크롤

    state = {
        totalPages: '',
        pageLimit: 8,
        currentPage: '',
        startIndex: '',
        endIndex: '',
        currentMenu: 'all',
        historyLists: [],
        allLists: [],
        offset: 0,
        limit: 5,
        totalRecords: 0

    }

    componentDidMount() {
        this.getDatas();
    }

    //입출금 내역 서버에 요청하기
    getDatas = () => {
        this.setState({
            historyLists: [{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.111 16:45:28',
                amount: 1697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.111 16:45:28',
                amount: 1697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.111 16:45:28',
                amount: 1697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.111 16:45:28',
                amount: 1697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }],
            allLists: [{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.011.11 16:45:28',
                amount: 11697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.111 16:45:28',
                amount: 1697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.111 16:45:28',
                amount: 1697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            },{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'krw',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.111 16:45:28',
                amount: 1697468463154651,
                currentCrypto: 'krw',
                isConfirmed: false
            }],
            totalRecords: 19
        })
    }

    //pc
    fetchFromScroll = () => {

        let { currentMenu } = this.state;

        if(currentMenu == 'all') {
            let { limit } = this.state;

            this.setState(prevState => ({
                offset: limit + prevState.offset
            }));

            // 서버에서 요청해서 결과값의 length가 0이면 더이상 서버에 요청하지않는 코드 추가하기

            this.setState(prevState => ({
                historyLists: prevState.historyLists.concat([{
                    isDeposit: true,
                    date: '02018.11.11 16:45:28',
                    amount: 11512428,
                    currentCrypto: '0btc',
                    isConfirmed: true
                }, {
                    isDeposit: true,
                    date: '12018.11.11 16:45:28',
                    amount: 1512428,
                    currentCrypto: '1btc',
                    isConfirmed: true
                },])
            }))
        }
        
    }

    //어떤 메뉴를 선택했는지
    clickedMenu = (val) => {
        this.setState({
            currentMenu: val,
            totalPages: '',
            currentPage: '',
            startIndex: '',
            endIndex: '',
        });

        //어떤 메뉴를 클릭했느냐에 따라서 historyLists 안의 객체들 변경해주기

        let { allLists } = this.state;

        let { isMobile } = this.props.base;

        if(isMobile) {
            //페이지네이션
            if (val == 'deposit') {
                this.setState({
                    totalRecords: allLists.filter((list) => list.isDeposit).length
                })
            } else if (val == 'withdrawl') {
                this.setState({
                    totalRecords: allLists.filter((list) => !list.isDeposit).length
                })
            } else {
                this.setState({
                    totalRecords: allLists.length
                })
            }
        }else {
            //무한스크롤
            if(val == 'deposit') {

                this.setState({
                    historyLists: allLists.filter((list) => list.isDeposit)
                })
            }else if(val == 'withdrawl') {

                this.setState({
                    historyLists: allLists.filter((list) => !list.isDeposit)
                })
            }else {
                this.getDatas();
            }
        }
        
    }

    //페이지 변경
    onChangePage = data => {
        this.setState({
            pageLimit: data.pageLimit,
            totalPages: data.totalPages,
            currentPage: data.page,
            startIndex: data.startIndex,
            endIndex: data.endIndex
        });
    };

    render () {

        let { currentMenu, historyLists, pageLimit, startIndex, endIndex, allLists, totalRecords } = this.state;

        let { isMobile } = this.props.base;


        //페이지네이션
        let rowsPerPage = [];

        if(isMobile) {
            if (currentMenu == 'deposit') {
                rowsPerPage = allLists.filter((list) => list.isDeposit).slice(startIndex, endIndex + 1);
            } else if (currentMenu == 'withdrawl') {
                rowsPerPage = allLists.filter((list) => !list.isDeposit).slice(startIndex, endIndex + 1);
            } else {
                rowsPerPage = allLists.slice(startIndex, endIndex + 1)
            }
        }

        return (
            <>
                <MainBG
                    isMobileOnly
                    height={26.7}
                />
                <AssetHistoryForm
                    noPagination={!isMobile}
                    pureHistoryListsPc={historyLists}
                    historyLists={rowsPerPage.length > 0 ? rowsPerPage : []}
                    totalRecords={totalRecords}
                    pageLimit={pageLimit || 10}
                    initialPage={1}
                    pagesToShow={5}
                    onChangePage={this.onChangePage}
                    transacMenu={historyMenu}
                    clickedMenu={this.clickedMenu}
                    currentMenu={currentMenu}
                    isMobile={isMobile}
                    scrollBoxHeight={52}
                    fetchFromScroll={this.fetchFromScroll}
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

export default connect(mapStateToProps)(KrwAssetHistoryContainer);