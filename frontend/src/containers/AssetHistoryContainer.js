import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentMenu } from 'lib/functions';
import { withRouter } from 'react-router-dom';
import { historyMenu, historyTxTableHeadPC } from 'lib/variables';

import MainBG from 'components/_base/MainBG';
import AssetHistoryForm from 'components/_base/AssetHistoryForm';
import MyPageTransactionForm from 'components/_base/MyPageTransactionForm/MyPageTransactionForm';

class AssetHistoryContainer extends Component {

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
        totalRecords: 0,
        currentPageTitle: ''
    }

    componentDidMount() {

        //mypage의 입출금내역은 전체 다 보여주고 asset의 입출금내역은 특정 한 암호화폐의 입출금내역을 보여준다.
        if (this.props.location.pathname.indexOf('mypage') !== -1){
            //mypage 입출금 내역
            this.props.dispatch({
                type: 'YES_MYPAGE_SUB_MENU'
            });
            this.setState({
                currentPageTitle: 'mypage'
            });
            saveCurrentMenu(this.props.dispatch, this.props.title);
            this.getMypageHistoryList();
        }else {
            //asset 입출금 내역
            this.setState({
                currentPageTitle: 'asset'
            });
            this.getAssetHistoryList();
        }
    }

    componentWillUnmount(){
        this.props.dispatch({
            type: 'NO_MYPAGE_SUB_MENU'
        })
    }

    componentDidUpdate(prevProps, prevStates){
        let prevIsMobile = prevProps.base.isMobile;
        let isMobile = this.props.base.isMobile;
        if(prevIsMobile !== isMobile) {
            this.getMypageHistoryList();
        }
    }

    //asset 입출금 내역 불러오기
    getAssetHistoryList = () => {
        this.setState({
            historyLists: [{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'btc',
                txid: '0x1d82648fca70789b8554a27fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'btc',
                txid: '0xasdfsdf3ww68d4c654s3d15ff37eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2018.11.11 16:45:28',
                amount: 69865132154,
                currentCrypto: 'eth',
                txid: '0x547541a63sd5f41a6s85dc46a3s5d1cb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 68768415135,
                currentCrypto: 'btc',
                txid: '0xa6s854df6as1cas4dvsdc7eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'aos',
                txid: '0x6846sd11fas5d6f4fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }],
            allLists: [{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'btc',
                txid: '0x1d82648fca70789b8554a27fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'btc',
                txid: '0xasdfsdf3ww68d4c654s3d15ff37eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2018.11.11 16:45:28',
                amount: 69865132154,
                currentCrypto: 'eth',
                txid: '0x547541a63sd5f41a6s85dc46a3s5d1cb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 68768415135,
                currentCrypto: 'btc',
                txid: '0xa6s854df6as1cas4dvsdc7eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'aos',
                txid: '0x6846sd11fas5d6f4fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }],
            totalRecords: 9
        })
    }

    //mypage 입출금 내역 불러오기
    getMypageHistoryList = () => {
        this.setState({
            historyLists: [{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'btc',
                txid: '0x1d82648fca70789b8554a27fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'btc',
                txid: '0xasdfsdf3ww68d4c654s3d15ff37eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2018.11.11 16:45:28',
                amount: 69865132154,
                currentCrypto: 'eth',
                txid: '0x547541a63sd5f41a6s85dc46a3s5d1cb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 68768415135,
                currentCrypto: 'btc',
                txid: '0xa6s854df6as1cas4dvsdc7eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'aos',
                txid: '0x6846sd11fas5d6f4fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }],
            allLists: [{
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'btc',
                txid: '0x1d82648fca70789b8554a27fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 697468463154651,
                currentCrypto: 'btc',
                txid: '0xasdfsdf3ww68d4c654s3d15ff37eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: false,
                date: '2018.11.11 16:45:28',
                amount: 69865132154,
                currentCrypto: 'eth',
                txid: '0x547541a63sd5f41a6s85dc46a3s5d1cb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 68768415135,
                currentCrypto: 'btc',
                txid: '0xa6s854df6as1cas4dvsdc7eb4ee701962530de2b851f683',
                isConfirmed: false
            }, {
                isDeposit: true,
                date: '2018.11.11 16:45:28',
                amount: 512428,
                currentCrypto: 'aos',
                txid: '0x6846sd11fas5d6f4fdb25c86000a8f37eb4ee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }, {
                isDeposit: false,
                date: '2019.01.11 16:45:28',
                amount: 6841635165435416516,
                currentCrypto: 'eos',
                txid: '0x6846sadfa3s5df4a6s5dc16a5sdcee701962530de2b851f683',
                isConfirmed: true
            }],
            totalRecords: 9
        })
    }

    //pc asset 입출금 내역 스크롤 내려가서 데이터 다시 받아올 때
    fetchFromScroll = () => {

        let { currentMenu } = this.state;

        if(currentMenu == 'all'){

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

        let { allLists, currentPageTitle } = this.state;

        let { isMobile } = this.props.base;

        if (isMobile) {
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
        } else {

            //무한스크롤
            if (val == 'deposit') {

                this.setState({
                    historyLists: allLists.filter((list) => list.isDeposit)
                })
            } else if (val == 'withdrawl') {

                this.setState({
                    historyLists: allLists.filter((list) => !list.isDeposit)
                })
            } else {
                this.getAssetHistoryList();
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
    

    render() {

        let { currentMenu, historyLists, pageLimit, startIndex, endIndex, currentPageTitle, allLists, totalRecords } = this.state;

        let { isMobile } = this.props.base;

        let { isPCMypageHistory } = this.props;

        //페이지네이션
        let rowsPerPage = [];

        if (isMobile) {
            if (currentMenu == 'deposit') {
                rowsPerPage = allLists.filter((list) => list.isDeposit).slice(startIndex, endIndex + 1);
            } else if (currentMenu == 'withdrawl') {
                rowsPerPage = allLists.filter((list) => !list.isDeposit).slice(startIndex, endIndex + 1);
            } else {
                rowsPerPage = allLists.slice(startIndex, endIndex + 1);
            }
        }else {
            // PC myapge/asset_history 마이페이지/입출금 내역 페이지
            rowsPerPage = historyLists.slice(startIndex, endIndex + 1);
        }


        return (
            <>
                <MainBG
                    isMobileOnly
                    height={currentPageTitle == 'mypage' ? 15.8 : 30.2}
                />
                {isPCMypageHistory && !isMobile ? 
                    //PC에서 mypage/asset_history 마이페이지/입출금 내역 페이지
                    <MyPageTransactionForm
                        currentPageName='history'
                        pageTitle='입출금 내역'
                        onChangePage={this.onChangePage}
                        pcTableBodyList={rowsPerPage.length > 0 ? rowsPerPage : []}
                        totalRecords={historyLists.length}
                        pageLimit={pageLimit || 10}
                        initialPage={1}
                        pagesToShow={5}
                        pcTableHeadList={historyTxTableHeadPC}
                        isMyPageLink
                    />
                    :
                    //PC assets/ 나의지갑 페이지 + 모바일 나의지갑 페이지랑 마이페이지 입출금 내역
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
                        scrollBoxHeight={52}
                        fetchFromScroll={this.fetchFromScroll}
                        isMobile={isMobile}
                    />
                }
                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(AssetHistoryContainer));