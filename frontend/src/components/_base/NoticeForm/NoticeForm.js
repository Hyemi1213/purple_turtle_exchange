import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NoticeForm.scss';

import { Row, Col } from 'reactstrap';
import Button from 'components/_common/Button';
import NoticeCard from 'components/_base/NoticeCard';
import { Arrow } from 'components/_common/Icons';
import PCPageTitle from 'components/_base/PCPageTitle';

const cx = classNames.bind(styles);

const NoticeForm = ({ notice, clickToPrev, clickToNext }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} className={cx('pl-pr-none')}>
                <div className={cx('wrapper')}>
                    <PCPageTitle title='공지사항' />
                    <NoticeCard lists={notice} />
                    <div className={cx('content')}>{notice.length > 0 ? notice[0].content : null}</div>

                    <div className={cx('link-box')}>
                        {/* <div onClick={clickToPrev} className={cx('arrow-link')}>
                            <Arrow left/>
                            <p>이전글</p>
                        </div> */}
                        <div className={cx('list-link', 'g-mobile-only')}>
                            <Button className={cx('btn')} linkStyle hasLink><Link to='/support/notices'>목록</Link></Button>
                        </div>
                        <div className={cx('back-box', 'g-pc-only')}>
                            <Button className={cx('btn')} linkStyleDark pcMypage><Link to='/support/notices'><Arrow className={cx('arrow')} left /><span>목록으로</span></Link></Button>
                        </div>
                        {/* <div onClick={clickToNext} className={cx('arrow-link')}>
                            <p>다음글</p>
                            <Arrow right/>
                        </div> */}
                    </div>
                </div>
            </Col>
        </Row>
    )
};

export default NoticeForm;