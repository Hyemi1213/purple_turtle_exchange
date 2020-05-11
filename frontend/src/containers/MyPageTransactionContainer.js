import React, { Component } from 'react';
import { commasEveryThousaxnd, clearZero, saveCurrentMenu } from 'lib/functions';
import { transactionHistoryTableHeadPC, unfinishedTransactionTableHeadPC } from 'lib/variables';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { bcadd, bcmul } from 'locutus/php/bc';
import { transacMenu } from 'lib/variables';
import MainBG from 'components/_base/MainBG';
import MyPageTransactionForm from 'components/_base/MyPageTransactionForm';

class MyPageTransactionContainer extends Component {

    state = {
        totalPages: '',
        pageLimit: 8,
        currentPage: '',
        startIndex: '',
        endIndex: '',
        currentMenu: 'all',
        historyLists: [],
        historyListsPC: [],
        isCancelable: false,
        isModalOpen: false,
        modalContentLists: [],
        finalContentContent: '',
        currentPageName: ''
    }

    async componentDidMount() {
        await saveCurrentMenu(this.props.dispatch, this.props.title);
        await this.props.dispatch({
            type: 'YES_MYPAGE_SUB_MENU'
        })
        if (this.props.location.pathname.indexOf('unfinished') !== -1) {
            //미체결 거래 내역
            this.setState({
                currentPageName: 'unfinished'
            })
        } else {
            //거래 내역
            this.setState({
                currentPageName: 'finished'
            })
        }
        await this.detectMobile();
    }

    componentDidUpdate(prevProps, prevState){
        let prevIsMobile = prevProps.base.isMobile;
        let isMobile = this.props.base.isMobile;

        if (!isMobile && prevState.currentPageName.length == 0){
            this.detectMobile();
        }

        if (prevIsMobile !== isMobile) {
            this.detectMobile();
        }
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: 'NO_MYPAGE_SUB_MENU'
        })
    }

    detectMobile = () => {
        let { isMobile } = this.props.base;

        if(isMobile) {
            //모바일 버전에서 보여줘야 할 리스트 구분하기위해서
            this.getListMobile();
        } else {
            //pc버전에서 보여줘야 할 리스트 구분하기위해서
            this.getListPC();
        }
    }

    getListPC = () => {

        let { currentPageName } = this.state;
        if (currentPageName == 'unfinished'){
            //미체결 거래 내역 불러오기
            this.setState({
                historyListsPC: [{
                    date: '2018.05.05 12:26:34',
                    isSell: false,
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    amount: 10.21510,
                    price: 0.2124,
                    leftAmount: 5
                }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }, {
                        date: '2018.05.05 12:26:34',
                        isSell: false,
                        baseCurrency: 'eth',
                        quoteCurrency: 'btc',
                        amount: 10.21510,
                        price: 0.2124,
                        leftAmount: 5
                    }]
            })
        }else if(currentPageName == 'finished') {
            //체결된 거래 내역 불러오기
            this.setState({
                historyListsPC: [{
                    date: '2018.05.05 12:26:34',
                    isSell: false,
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    amount: 10.21510,
                    price: 0.2124,
                    fee: 0.01,
                }, {
                    date: '2019.01.15 22:06:14',
                    isSell: true,
                    baseCurrency: 'xrp',
                    quoteCurrency: 'btc',
                    amount: 500.215,
                    price: 0.751125412,
                    fee: 0.01,
                }, {
                    date: '2018.05.05 12:26:34',
                    isSell: false,
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    amount: 10.21510,
                    price: 0.2124,
                    fee: 0.01,
                }, {
                    date: '2019.01.15 22:06:14',
                    isSell: true,
                    baseCurrency: 'xrp',
                    quoteCurrency: 'btc',
                    amount: 500.215,
                    price: 0.751125412,
                    fee: 0.01,
                }, {
                    date: '2018.05.05 12:26:34',
                    isSell: false,
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    amount: 10.21510,
                    price: 0.2124,
                    fee: 0.01,
                }, {
                    date: '2019.01.15 22:06:14',
                    isSell: true,
                    baseCurrency: 'xrp',
                    quoteCurrency: 'btc',
                    amount: 500.215,
                    price: 0.751125412,
                    fee: 0.01,
                }, {
                    date: '2018.05.05 12:26:34',
                    isSell: false,
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    amount: 10.21510,
                    price: 0.2124,
                    fee: 0.01,
                }, {
                    date: '2019.01.15 22:06:14',
                    isSell: true,
                    baseCurrency: 'xrp',
                    quoteCurrency: 'btc',
                    amount: 500.215,
                    price: 0.751125412,
                    fee: 0.01,
                }, {
                    date: '2018.05.05 12:26:34',
                    isSell: false,
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    amount: 10.21510,
                    price: 0.2124,
                    fee: 0.01,
                }, {
                    date: '2019.01.15 22:06:14',
                    isSell: true,
                    baseCurrency: 'xrp',
                    quoteCurrency: 'btc',
                    amount: 500.215,
                    price: 0.751125412,
                    fee: 0.01,
                }]
            })
        }
        
    }

    getListMobile = () => {

        let { currentPageName } = this.state;
        if (currentPageName == 'unfinished') {
            //미체결 거래 내역 불러오기

            this.setState({
                isCancelable: true,
                historyLists: [{
                    isSell: false,
                    date: '2018.05.05 12:26:34',
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    contents: [{
                        title: '종류',
                        content: 'eth/btc'
                    }, {
                        title: '주문수량',
                        content: 10
                    }, {
                        title: '주문가격',
                        content: 15
                    }, {
                        title: '미체결수량',
                        content: 5
                    }]
                }, {
                    isSell: true,
                    date: '2019.03.05 15:26:34',
                    baseCurrency: 'aos',
                    quoteCurrency: 'btc',
                    contents: [{
                        title: '종류',
                        content: 'aos/btc'
                    }, {
                        title: '주문수량',
                        content: 43
                    }, {
                        title: '주문가격',
                        content: 2
                    }, {
                        title: '미체결수량',
                        content: 10
                    }]
                }]
            })
        } else {
            //체결된 거래 내역 불러오기

            this.setState({
                historyLists: [{
                    isCancelable: false,
                    isSell: false,
                    date: '2018.05.05 12:26:34',
                    baseCurrency: 'eth',
                    quoteCurrency: 'btc',
                    contents: [{
                        title: '종류',
                        content: 'eth/btc'
                    }, {
                        title: '수량',
                        content: 10
                    }, {
                        title: '매수가',
                        content: 15
                    }, {
                        title: '총액',
                        content: 150
                    }, {
                        title: '수수료',
                        content: 0.001
                    }, {
                        title: '정산금액',
                        value: 'total',
                        content: 150 + 0.001
                    }]
                }, {
                    isSell: true,
                    date: '2018.12.02 04:26:34',
                    baseCurrency: 'aos',
                    quoteCurrency: 'btc',
                    contents: [{
                        title: '종류',
                        content: 'aos/btc'
                    }, {
                        title: '수량',
                        content: 3
                    }, {
                        title: '매수가',
                        content: 15
                    }, {
                        title: '총액',
                        content: 45
                    }, {
                        title: '수수료',
                        content: 0.001
                    }, {
                        title: '정산금액',
                        value: 'total',
                        content: 45 + 0.001
                    }]
                }]
            })
        }
    }

    //미체결 거래 내역 취소하기 버튼 클릭했을 때 모달 열기
    clickToOpenModal = (val) => {

        let { isModalOpen } = this.state;

        this.setState({
            isModalOpen: !isModalOpen,
            modalContentLists: [{
                title: '종류',
                content: val.contents[0].content
            }, {
                title: '유형',
                content: val.isSell ? '매도' : '매수'
            }, {
                title: '주문수량',
                content: `${val.contents[1].content} ${val.quoteCurrency}`
            }, {
                title: '주문가격',
                content: `${val.contents[2].content} ${val.quoteCurrency}`
            }],
            finalContentContent: `${val.contents[3].content} ${val.quoteCurrency}`
        });
    }

    //미체결 거래 내역 취소 모달에서 확인 버튼 클릭했을 때
    clickToCancelOrder = () => {
    }

    // 모달 닫기
    onModalClose = () => {
        this.setState({
            isModalOpen: false
        });
    }

    clickToModal = () => {

        let { isModalOpen } = this.state;

        this.setState({
            isModalOpen: !isModalOpen
        })
    }

    //어떤 메뉴를 선택했는지
    clickedMenu = (val) => {
        this.setState({
            currentMenu: val
        });

        //어떤 메뉴를 클릭했느냐에 따라서 historyLists 안의 객체들 변경해주기
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

        let { currentMenu, historyLists, pageLimit, startIndex, endIndex, isCancelable, isModalOpen, modalContentLists, finalContentContent, historyListsPC, currentPageName } = this.state;

        let { isAuthed } = this.props.user;

        let { isMobile } = this.props.base;

        let rowsPerPage = [];

        rowsPerPage = isMobile ? historyLists.slice(startIndex, endIndex + 1) : historyListsPC.slice(startIndex, endIndex + 1);

        return (
            <>
                <MainBG
                    isMobileOnly
                    height={15.8}
                />
                <MyPageTransactionForm
                    transacMenu={transacMenu}
                    currentMenu={currentMenu}
                    clickedMenu={this.clickedMenu}
                    historyLists={rowsPerPage.length > 0 ? rowsPerPage : []}
                    totalRecords={isMobile ? historyLists.length : historyListsPC.length}
                    pageLimit={pageLimit || 10}
                    initialPage={1}
                    pagesToShow={5}
                    onChangePage={this.onChangePage}
                    isCancelable={isCancelable}
                    clickToOpenModal={this.clickToOpenModal}

                    isModalOpen={isModalOpen}
                    clickToModal={this.clickToModal}
                    onModalClose={this.onModalClose}
                    clickToCancelOrder={this.clickToCancelOrder}
                    modalContentLists={modalContentLists}
                    finalContentContent={finalContentContent}
                    isAuthed={isAuthed}
                    pageTitle={this.props.title}
                    pcTableHeadList={currentPageName == 'unfinished' ? unfinishedTransactionTableHeadPC : transactionHistoryTableHeadPC}
                    pcTableBodyList={rowsPerPage.length > 0 ? rowsPerPage : []}
                    currentPageName={currentPageName}
                    isMyPageLink
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        user: state.user,
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(MyPageTransactionContainer));