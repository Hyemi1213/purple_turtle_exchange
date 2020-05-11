import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageMain.scss';
import { headerMypageMenu } from 'lib/variables';

import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import PCPageTitle from 'components/_base/PCPageTitle';


const cx = classNames.bind(styles);

const MyPageMain = () => {
    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col xs='12' md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className={cx('pl-pr-none')}>
                    <PCPageTitle
                        title='마이페이지'
                        className={cx('page-title')}
                    />
                    <Row className={cx('ml-minus')}>
                        {headerMypageMenu.map((list, idx) => {
                            return <Col xs='12' md='4' key={idx} className={cx('pr-none')}
                            ><div className={cx('card-wrapper')}>
                                <Link className={cx('link')} to={list.location}></Link>
                                <div className={cx('img-bg')}>
                                    <img src={list.icon} alt={list.title} />
                                </div>
                                <p className={cx('title')}>{list.title}</p>
                            </div>
                        </Col>
                        })}
                    </Row>
                </Col>
            </Row>
        </div>
    )
};

export default MyPageMain;