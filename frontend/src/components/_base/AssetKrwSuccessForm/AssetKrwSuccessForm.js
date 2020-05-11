import React from 'react';
import styles from './AssetKrwSuccessForm.scss';
import classNames from 'classnames/bind';
import { bcadd } from 'locutus/php/bc';
import { Link } from 'react-router-dom';

import Button from 'components/_common/Button';

import checkIcon from 'static/images/krw_success_check_icon.svg';
import bgIcon from 'static/images/krw_success_bg_icon.svg';

const cx = classNames.bind(styles);

const AssetKrwSuccessForm = ({ isWithdrawl, userInfo, adminInfo, amount }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-box')}>
                <img className={cx('bg')} src={bgIcon} alt={isWithdrawl ? '출금신청 완료' : '입금신청 완료'}/>
                <div className={cx('content')}>
                    <img src={checkIcon} alt={isWithdrawl ? '출금신청 완료' : '입금신청 완료'} />
                    <p className={cx('title')}>{isWithdrawl ? '출금신청 완료' : '입금신청 완료'}</p>
                </div>
            </div>
            <div className={cx('form-box')}>
                <p className={cx('title')}>고객님의 계좌정보</p>
                <div className={cx('form')}>
                    <div className={cx('list')}>
                        <p className={cx('content1')}>은행</p>
                        <p className={cx('content2')}>{userInfo.userBank}</p>
                    </div>
                    <div className={cx('list')}>
                        <p className={cx('content1')}>계좌번호</p>
                        <p className={cx('content2')}>{userInfo.userAccount}</p>
                    </div>
                    <div className={cx('list')}>
                        <p className={cx('content1')}>예금주</p>
                        <p className={cx('content2')}>{userInfo.userName}</p>
                    </div>
                </div>
            </div>
            <div className={cx('form-box')}>
                <p className={cx('title')}>{isWithdrawl ? '출금' : '입금'}정보</p>
                <div className={cx('form')}>
                    {!isWithdrawl && 
                        <>
                            <div className={cx('list')}>
                                <p className={cx('content1')}>은행</p>
                                <p className={cx('content2')}>{adminInfo.adminBank}</p>
                            </div>
                            <div className={cx('list')}>
                                <p className={cx('content1')}>예금주</p>
                                <p className={cx('content2')}>{adminInfo.adminName}</p>
                            </div>
                            <div className={cx('list')}>
                                <p className={cx('content1')}>계좌번호</p>
                                <p className={cx('content2')}>{adminInfo.adminAccount}</p>
                            </div>
                        </>
                    }
                    <div className={cx('list')}>
                        <p className={cx('content1')}>{isWithdrawl ? '출금액' : '입금액'}</p>
                        <p className={cx('content2')}>{amount} krw</p>
                    </div>
                    {isWithdrawl &&
                        <>
                            <div className={cx('list')}>
                                <p className={cx('content1')}>수수료</p>
                                <p className={cx('content2')}>{adminInfo.fee} krw</p>
                            </div>
                            <div className={cx('list')}>
                                <p className={cx('content1')}>총 출금액</p>
                                <p className={cx('content2')}>{bcadd(adminInfo.fee, amount)} krw</p>
                            </div>
                        </>
                    }
                    {!isWithdrawl &&
                        <>
                            <div className={cx('list')}>
                                <p className={cx('content1')}>받는이 메세지</p>
                                <p className={cx('content2')}>{adminInfo.msg} krw</p>
                            </div>
                            <ul className={cx('info-box')}>
                                <li>· 입금코드와 금액이 입금예약사항과 정확히 일치해야합니다.</li>
                                <li>· 송금 시에 이 메세지를 입력하여 보내주십시오.</li>
                            </ul>
                        </>
                    }
                </div>
            </div>
            <div className={cx('btn-box')}>
                <Button hasLink><Link to='/assets/krw'>완료</Link></Button>
            </div>
        </div>
    )
};

AssetKrwSuccessForm.defaultProps = {
    userInfo: {},
    adminInfo: {
        fee: 0
    },
    amount: 0
}

export default AssetKrwSuccessForm;