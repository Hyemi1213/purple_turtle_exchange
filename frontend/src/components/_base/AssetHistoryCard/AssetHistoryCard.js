import React from 'react';
import styles from './AssetHistoryCard.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'reactstrap';
import Spinner from 'components/_common/Spinner';
import DefaultCard from 'components/_base/DefaultCard';

const cx = classNames.bind(styles);

const AssetHistoryCard = ({ historyLists, className }) => {
    return (
        <>
            {historyLists.map((list, idx) => {
                return <DefaultCard key={idx} className={cx('wrapper', list.isDeposit ? null : 'withdrawl', className)}>
                            <Row>
                                <Col className={cx('pl-pr-none')}>
                                    <p className={cx('main-title')}>
                                        <span className={cx('icon')}></span>
                                        {list.isDeposit ? '입금' : '출금'}
                                    </p>
                                </Col>
                                <Col className={cx('pr-none')}>
                                    <p className={cx('date')}>{list.date}</p>
                                </Col>
                            </Row>
                            <p className={cx('amount')}>{list.amount} {list.currentCrypto}</p>
                            {list.txid && <Row className={cx('txid-frame')}>
                                <Col className={cx('pl-pr-none')} xs='2'>
                                    <p className={cx('title')}>거래 ID</p>
                                </Col>
                                <Col className={cx('pl-pr-none')} xs='10'>
                                    <p className={cx('content', 'txid')}>{list.txid}</p>
                                </Col>
                            </Row>}
                            <Row>
                                <Col className={cx('pl-pr-none')} xs='2'>
                                    <p className={cx('title')}>상태</p>
                                </Col>
                                <Col className={cx('pl-pr-none')}  xs='10'>
                                <div className={cx('content', list.isConfirmed ? null : 'pending')}>{list.isConfirmed ? '완료' : <><Spinner className={cx('spinner')} size={12}
                                colour={'#F6C53A'} borderSize={2}/>펜딩</>}</div>
                                </Col>
                            </Row>
                        </DefaultCard>
            })}
        </>
    )
};

AssetHistoryCard.defaultProps = {
    historyLists: []
}

export default AssetHistoryCard;