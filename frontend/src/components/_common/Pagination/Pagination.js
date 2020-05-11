import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './Pagination.scss';

import { Arrow } from 'components/_common/Icons';

const cx = classNames.bind(styles);

class Pagination extends Component {

    //totalRecords: 총 list의 갯수
    //pageLimit: 한 페이지에서 몇 개의 list를 보여줄건지
    //totalPages: 페이지들의 총 갯수(pageLimit / totalRecords)
    //currentPage: 현재 보여지는 페이지
    //initialPage
    //pagesToShow: 뷰 단에서 몇 개의 페이지를 보여줄건지
    state = {
        totalRecords: '',
        pageLimit: '',
        totalPages: '',
        currentPage: '',
        initialPage: '',
        pagesToShow: ''
    }

    componentDidMount() {
        this.setState({
            totalRecords: this.props.totalRecords,
            pageLimit: this.props.pageLimit || 10,
            totalPages: Math.ceil(this.props.totalRecords / this.props.pageLimit),
            pagesToShow: this.props.pagesToShow || 5,
            currentPage: this.props.initialPage || 1
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.state.totalRecords !== prevState.totalRecords ||
            this.state.pageLimit !== prevState.pageLimit
        ) {
            this.setPage(this.state.currentPage);
        }
        
        if (this.props.totalRecords !== this.state.totalRecords) {
            this.setState({
                totalRecords: prevProps.totalRecords,
                pageLimit: this.props.pageLimit || 10,
                totalPages: Math.ceil(this.props.totalRecords / this.props.pageLimit),
                pagesToShow: this.props.pagesToShow || 5,
                currentPage: this.props.initialPage || 1
            });
        }
    }

    setPage(page) {
        let { totalRecords, pageLimit, totalPages } = this.state;

        if (page < 1) {
            page = 1;
        } else if (page > totalPages) {
            page = totalPages;
        }

        this.setState({
            currentPage: page
        });

        let startIndex = (page - 1) * pageLimit;
        let endIndex = Math.min(startIndex + pageLimit - 1, totalRecords - 1);

        this.props.onChangePage({
            pageLimit,
            totalPages,
            page,
            startIndex,
            endIndex
        });
    }

    getPager() {
        let { pagesToShow, currentPage, totalPages } = this.state;
        let pages = [],
            startFromNumber;

        if (totalPages <= pagesToShow) {
            startFromNumber = 1;
            pagesToShow = totalPages;
        } else {
            if (currentPage <= Math.ceil(pagesToShow / 2)) {
                startFromNumber = 1;
            } else if (
                currentPage + Math.floor((pagesToShow - 1) / 2) >=
                totalPages
            ) {
                startFromNumber = totalPages - (pagesToShow - 1);
            } else {
                startFromNumber = currentPage - Math.floor(pagesToShow / 2);
            }
        }

        for (let i = 1; i <= pagesToShow; i++) {
            pages.push(startFromNumber++);
        }

        return {
            currentPage,
            totalPages,
            pages
        };
    }

    render() {
        const { className, style } = this.props;
        const { totalRecords, totalPages } = this.state;

        if (!totalRecords || totalPages === 1) return null;

        let pager = this.getPager();

        return (
            <ul className={cx('pagination', className)} style={style}>
                {/* <li>
                    <button
                        disabled={pager.currentPage === 1 ? true : false}
                        className={cx(pager.currentPage === 1 ? 'btn-deactive' : null)}
                        onClick={() => this.setPage(1)}
                    >
                        &#60;&#60;
                    </button>
                </li> */}
                <li>
                    <button
                        disabled={pager.currentPage === 1 ? true : false}
                        className={cx(pager.currentPage === 1 ? 'btn-deactive' : null)}
                        onClick={() => this.setPage(pager.currentPage - 1)}
                    >
                        <Arrow left/>
                    </button>
                </li>
                {pager.pages.map((page, index) => (
                    <li key={index}>
                        <button
                            className={cx('number', pager.currentPage === page ? 'active' : '')}
                            onClick={() => this.setPage(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        disabled={pager.currentPage === pager.totalPages ? true : false}
                        className={cx(pager.currentPage === pager.totalPages ? 'btn-deactive' : null)}
                        onClick={() => this.setPage(pager.currentPage + 1)}
                    >
                        <Arrow right />
                    </button>
                </li>
                {/* <li>
                    <button
                        disabled={pager.currentPage === pager.totalPages ? true : false}
                        className={cx(pager.currentPage === pager.totalPages ? 'btn-deactive' : null)}
                        onClick={() => this.setPage(pager.totalPages)}
                    >
                        &#62;&#62;
                    </button>
                </li> */}
            </ul>
        );
    }
}

Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    initialPage: PropTypes.number,
    pagesToShow: PropTypes.number,
    onChangePage: PropTypes.func
};

export default Pagination;

// //===>example pagesToShow=5
// if (totalPages <= 5) {
// 	// less than 5 total pages so show all
// 	startPage = 1;
// } else {
// 	// more than 5 total pages so calculate start and end pages
// 	if (currentPage <= 3) {
// 		startPage = 1;
// 	} else if (currentPage + 2 >= totalPages) {
// 		startPage = totalPages - 4;
// 	} else {
// 		startPage = currentPage - 2;
// 	}
// }

// //===>example pagesToShow=6
// // console.log(totalPages);
// if (totalPages <= 6) {
// 	// less than 6 total pages so show all
// 	startPage = 1;
// } else {
// 	// more than 5 total pages so calculate start and end pages
// 	if (currentPage <= 3) {
// 		startPage = 1;
// 	} else if (currentPage + 2 >= totalPages) {
// 		startPage = totalPages - 5;
// 	} else {
// 		startPage = currentPage - 3;
// 	}
// }
