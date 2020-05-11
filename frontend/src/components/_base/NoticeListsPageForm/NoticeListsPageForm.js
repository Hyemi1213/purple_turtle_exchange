import React from 'react';
import styles from './NoticeListsPageForm.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'reactstrap';
import PCPageTitle from 'components/_base/PCPageTitle';
import Pagination from 'components/_common/Pagination';
import NoticeCard from 'components/_base/NoticeCard';
import NoList from 'components/_base/NoList';

const cx = classNames.bind(styles);

const NoticeListsPageForm = ({ lists, clickToDetail, ...rest }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1}} className={cx('pl-pr-none')}>
                <div className={cx('wrapper')}>
                    <PCPageTitle title='공지사항' />
                    {lists.length > 0 ?
                        <>
                            <div className={cx('card-wrapper')}>
                                <NoticeCard
                                    clickToDetail={clickToDetail}
                                    lists={lists}
                                />
                            </div>
                            <Pagination
                                className={cx('pagination')}
                                {...rest}
                            />
                        </>
                        :
                        <NoList
                            marginTop={62}
                            text='내역이 없습니다.'
                        />
                    }
                </div>
            </Col>
        </Row>
    )
};

NoticeListsPageForm.defaultProps = {
    lists: []
}

export default NoticeListsPageForm;