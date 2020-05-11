import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentMenu } from 'lib/functions';
import { withRouter } from 'react-router-dom';

import NoticeListsPageForm from 'components/_base/NoticeListsPageForm';

class NoticeListPageContainer extends Component {

    state = {
        totalPages: '',
        pageLimit: 9,
        currentPage: '',
        startIndex: '',
        endIndex: '',
        lists: [{
            idx: 0,
            title: '공지사항0',
            date: 'Jan 15th',
            content: '공지사항 내용0'
        }, {
            idx: 1,
            title: '공지사항1',
            date: 'Jan 15th',
            content: '공지사항 내용1'
        }, {
            idx: 2,
            title: '공지사항2',
            date: 'Jan 15th',
            content: '공지사항 내용2'
        }, {
            idx: 3,
            title: '공지사항3',
            date: 'Jan 15th',
            content: '공지사항 내용3'
        }, {
            idx: 4,
            title: '공지사항4',
            date: 'Jan 15th',
            content: '공지사항 내용4'
        }, {
            idx: 5,
            title: '공지사항5',
            date: 'Jan 15th',
            content: '공지사항 내용5'
        }, {
            idx: 6,
            title: '공지사항6',
            date: 'Jan 15th',
            content: '공지사항 내용6'
        }, {
            idx: 7,
            title: '공지사항7',
            date: 'Jan 15th',
            content: '공지사항 내용7'
        }, {
            idx: 8,
            title: '공지사항8',
            date: 'Jan 15th',
            content: '공지사항 내용8'
        }, {
            idx: 9,
            title: '공지사항9',
            date: 'Jan 15th',
            content: '공지사항 내용9'
        }, {
            idx: 10,
            title: '공지사항10',
            date: 'Jan 15th',
            content: '공지사항 내용10'
        }, {
            idx: 11,
            title: '공지사항11',
            date: 'Jan 15th',
            content: '공지사항 내용11'
        }]
    }

    componentDidMount() {

        saveCurrentMenu(this.props.dispatch, this.props.title);

        let { lists } = this.state;

        this.props.dispatch({
            type: 'SAVE_NOTICES',
            data: lists
        });
    }

    //클릭한 공지사항 상세페이지로 이동
    clickToDetail = (val) => {
        this.props.history.push(`/support/notices/${val}`);
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

        let { pageLimit, startIndex, endIndex, lists } = this.state;

        let rowsPerPage = [];
        rowsPerPage = lists.slice(startIndex, endIndex + 1);

        return (
            <NoticeListsPageForm
                lists={rowsPerPage.length > 0 ? rowsPerPage : []}
                onChangePage={this.onChangePage}
                totalRecords={lists.length}
                pageLimit={pageLimit || 10}
                initialPage={1}
                pagesToShow={5}
                clickToDetail={this.clickToDetail}
            />
        )
    }
};

export default connect()(withRouter(NoticeListPageContainer));