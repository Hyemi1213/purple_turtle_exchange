import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { commasEveryThousand, clearZero } from 'lib/functions';
import { bcadd, bcmul } from 'locutus/php/bc';
import { exchangeHistory } from 'lib/variables';

import MyPageTransactionForm from 'components/_base/MyPageTransactionForm';
import MainBG from 'components/_base/MainBG';

class OrderHistoryContainer extends Component {

    //모바일용

    state = {
        totalPages: '',
        pageLimit: 8,
        currentPage: '',
        startIndex: '',
        endIndex: '',
        currentMenu: 'tradeHistory',
        historyLists: [],
        isCancelable: false,
        isModalOpen: false,
        modalContentLists: [],
        finalContentContent: ''
    }

    componentDidMount() {
        this.getData();
    }

    //메뉴 변경될 때마다 데이터 갖고오기
    componentDidUpdate(prevProps, prevState) {

        let { currentMenu } = this.state;

        let { isMobile, baseCurrency, quoteCurrency } = this.props.base;

        if(isMobile) {
            if (prevState.currentMenu !== currentMenu || prevProps.base.baseCurrency == '') {
                this.getData();
            }
        }

        if (prevProps.base.baseCurrency !== baseCurrency || prevProps.base.quoteCurrency !== quoteCurrency) {
            this.getData();
        }
        
    }

    // 메뉴에 따라 다른 데이터 가져오기
    getData = () => {
        let { currentMenu } = this.state;

        let { baseCurrency, quoteCurrency } = this.props.base;

        if (currentMenu == 'tradeHistory') {

            this.setState({
                isCancelable: false,
                historyLists: [{
                    isSell: false,
                    date: '2018.05.05 12:26:34',
                    baseCurrency: baseCurrency,
                    quoteCurrency: quoteCurrency,
                    contents: [{
                        title: '체결수량',
                        content: `10 ${baseCurrency}`
                    }, {
                        title: '체결가격',
                        content: `15 ${quoteCurrency}`
                    }, {
                        title: '총액',
                        value: 'total',
                        content: `${10*15} ${quoteCurrency}`
                    }]
                }, {
                    isSell: true,
                    date: '2019.03.05 15:26:34',
                    baseCurrency: baseCurrency,
                    quoteCurrency: quoteCurrency,
                    contents: [{
                        title: '체결수량',
                        content: `43 ${baseCurrency}`
                    }, {
                        title: '체결가격',
                            content: `2 ${quoteCurrency}`
                    }, {
                        title: '총액',
                        value: 'total',
                        content: `${43*2} ${quoteCurrency}`
                    }]
                }]
            })
        } else if (currentMenu == 'myTradeHistory') {
            this.setState({
                isCancelable: false,
                historyLists: [{
                    isSell: false,
                    date: '2019.06.21 13:51:21',
                    baseCurrency: baseCurrency,
                    quoteCurrency: quoteCurrency,
                    contents: [{
                        title: '수량',
                        content: `10 ${baseCurrency}`
                    }, {
                        title: '매수가',
                        content: `1 ${quoteCurrency}`
                    }, {
                        title: '총액',
                        content: `10 ${quoteCurrency}`
                    }, {
                        title: '수수료',
                        content: `0.001 ${quoteCurrency}`
                    }, {
                        title: '정산금액',
                        value: 'total',
                        content: `${10*1+0.001} ${quoteCurrency}`
                    }]
                }]
            })
        }
         else {

            this.setState({
                isCancelable: true,
                historyLists: [{
                    isSell: false,
                    date: '2018.05.05 12:26:34',
                    baseCurrency: baseCurrency,
                    quoteCurrency: quoteCurrency,
                    contents: [{
                        title: '주문수량',
                        content: `10 ${baseCurrency}`
                    }, {
                        title: '주문가격',
                        content: `15 ${quoteCurrency}`
                    }, {
                        title: '미체결수량',
                        content: `2 ${baseCurrency}`
                    }]
                }, {
                    isSell: true,
                    date: '2018.12.02 04:26:34',
                    baseCurrency: baseCurrency,
                    quoteCurrency: quoteCurrency,
                    contents: [{
                        title: '주문수량',
                        content: `3 ${baseCurrency}`
                    }, {
                        title: '주문가격',
                        content: `15 ${quoteCurrency}`
                    }, {
                        title: '미체결수량',
                        content: `1 ${baseCurrency}`
                    }]
                }]
            })
        }
    }

    //나의 미체결 취소하기 버튼 클릭했을 때 모달 열기
    clickToOpenModal = (val) => {

        let { isModalOpen } = this.state;

        this.setState({
            isModalOpen: !isModalOpen,
            modalContentLists: [{
                title: '종류',
                content: `${val.baseCurrency}/${val.quoteCurrency}`
            }, {
                title: '유형',
                content: val.isSell ? '매도' : '매수'
            }, {
                title: '주문수량',
                content: `${val.contents[0].content}`
            }, {
                title: '주문가격',
                content: `${val.contents[1].content}`
            }],
            finalContentContent: `${val.contents[2].content}`
        });
    }

    //나의 미체결 취소 모달에서 확인 버튼 클릭했을 때
    clickToCancelOrder = async() => {

        try {
            await this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '주문 취소가 완료되었습니다.'
            });
            await this.onModalClose();
        }
        catch(e) {
            console.error(e);
            await this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '주문 취소에 실패하였습니다.'
            });
        }
        
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

        let { currentMenu, historyLists, pageLimit, startIndex, endIndex, isCancelable, isModalOpen, modalContentLists, finalContentContent } = this.state;

        let { isAuthed } = this.props.user;

        let rowsPerPage = [];
        rowsPerPage = historyLists.slice(startIndex, endIndex + 1);

        return (
            <>
                <MainBG
                    isMobileOnly
                    height={15.8}
                />
                <MyPageTransactionForm
                    transacMenu={exchangeHistory}
                    currentMenu={currentMenu}
                    clickedMenu={this.clickedMenu}
                    historyLists={rowsPerPage.length > 0 ? rowsPerPage : []}
                    totalRecords={historyLists.length}
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
                    className='trade-page-wrapper'
                    isAuthed={isAuthed || currentMenu == 'tradeHistory'}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        exchange: state.exchange,
        user: state.user,
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(OrderHistoryContainer));