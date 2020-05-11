import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SecurityForm.scss';

import { Row, Col } from 'reactstrap';
import { Arrow } from 'components/_common/Icons';
import Badge from 'components/_base/Badge';
import DefaultCard from 'components/_base/DefaultCard';
import PCPageTitle from 'components/_base/PCPageTitle';
import Button from 'components/_common/Button';

import emailIcon from 'static/images/email_icon.svg';
import phoneIcon from 'static/images/phone_icon.svg';
import userIcon from 'static/images/sample_user_icon.svg';

const cx = classNames.bind(styles);

const SecurityForm = ({ emailAuth, phoneAuth, bankingAuth, clickToManagePhone, clickToManageBanking }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }} className={cx('pl-pr-none')}>
                <DefaultCard formStyle className={cx('total-wrapper')}>
                    <Col xs="12" md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} className={cx('pl-pr-none')}>
                        <PCPageTitle className={cx('pc-title')} title='보안인증' />
                        <DefaultCard className={cx('wrapper', 'email')}>
                            <div className={cx('title-box')}>
                                <div className={cx('title')}>
                                    <img src={emailIcon} alt='이메일 인증'/>
                                    <p>이메일 인증</p>
                                </div>
                                <Badge isActive>
                                    인증
                                </Badge>
                            </div>
                            <p className={cx('content')}><span className={cx('strong')}>인증 이메일</span>{emailAuth.content}</p>
                            <p className={cx('info')}>
                                인증된 이메일은 변경할 수 없습니다.
                            </p>
                        </DefaultCard>
                        <DefaultCard className={cx('wrapper', 'phone')}>
                            <div className={cx('title-box')}>
                                <div className={cx('title')}>
                                    <img src={phoneIcon} alt='핸드폰 인증'/>
                                    <p>핸드폰 인증</p>
                                </div>
                                <Badge isActive={phoneAuth.isAuth}>
                                    {phoneAuth.isAuth ? '인증' : '비인증'}
                                </Badge>
                            </div>
                            {phoneAuth.isAuth && <p className={cx('content')}><span className={cx('strong')}>인증번호</span>{phoneAuth.content}</p>}
                            <p className={cx('info')}>
                                본인명의 휴대폰을 통하여 실명인증을 진행해주세요.
                            </p>
                            <p className={cx('small-info')}>※ 국내 휴대폰이 없는 경우, 휴대폰 인증을 할 수 없습니다.</p>
                            <div className={cx('btn-box')}>
                                <Button onClick={clickToManagePhone}>{phoneAuth.isAuth ? '번호 변경' : '번호 등록'}</Button>
                            </div>
                        </DefaultCard>
                        <DefaultCard className={cx('wrapper', 'banking')}>
                            <div className={cx('title-box')}>
                                <div className={cx('title')}>
                                    <img src={userIcon} alt='은행계좌 인증'/>
                                    <p>은행계좌 인증</p>
                                </div>
                                <Badge isActive={bankingAuth.isAuth}>
                                    {bankingAuth.isAuth ? '인증' : '비인증'}
                                </Badge>
                            </div>
                            {bankingAuth.isAuth && <p className={cx('content')}><span className={cx('strong')}>인증계좌</span>{bankingAuth.content}</p>}
                            <p className={cx('info')}>
                                KRW 입출금을 위해 계좌를 인증합니다. 인증한 계좌에서만 입출금 할 수 있고, 인증 계좌에서 입금해야합니다.
                            </p>
                            <p className={cx('small-info')}>※ 거래소 자율규제안에 의해 1인 1계좌만 등록이 가능합니다.</p>
                            <div className={cx('btn-box')}>
                                <Button onClick={clickToManageBanking}>{bankingAuth.isAuth ? '계좌 변경' : '계좌 등록'}</Button>
                            </div>
                        </DefaultCard>
                    </Col>
                </DefaultCard>
                <div className={cx('back-box', 'g-pc-only')}>
                    <Button className={cx('btn')} linkStyleDark pcMypage><Link to='/mypage'><Arrow className={cx('arrow')} left /><span>마이페이지 이동</span></Link></Button>
                </div>
            </Col>
        </Row>
    )
};

SecurityForm.defaultProps = {
    emailAuth: {},
    phoneAuth: {},
    bankingAuth: {}
}

export default SecurityForm;