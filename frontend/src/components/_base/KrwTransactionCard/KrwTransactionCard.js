import React from 'react';
import classNames from 'classnames/bind';
import styles from './KrwTransactionCard.scss';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import NoList from 'components/_base/NoList';
import xIcon from 'static/images/x_icon.svg';

const cx = classNames.bind(styles);

const KrwTransactionCard = ({ lists, className, clickToOpenModal, isWithdrawl }) => {
    return (
        <>
        <p className={cx('main-title')}>최근 {isWithdrawl ? '출금':'입금'}신청 내역 <span>(최근 5건)</span></p>
        {lists.length > 0 ?
            <>
                {lists.map((list, idx) => {
                        return <DefaultCard key={idx} className={cx('wrapper', isWithdrawl ? 'sell' : null, className)}>
                            <Row>
                                <Col className={cx('title-box', 'pl-pr-none')}>
                                    <span className={cx('icon')}></span><span className={cx('title')}>{isWithdrawl ? '출금신청' : '입금신청'}</span>
                                </Col>
                                <Col className={cx('pl-pr-none', list.isCancelable ? 'cancel-box' : null)}>
                                    <p className={cx('date')}>{list.date}</p>
                                    {list.isCancelable ? <img src={xIcon} alt='취소' onClick={() => clickToOpenModal(list)} /> : null}
                                </Col>
                            </Row>
                            {list.contents.map((content, idx) => {
                                return <Row key={idx} className={cx('content-box', content.value == 'total' ? 'total' : null)}>
                                    <Col className={cx('pl-none')}><p className={cx('title')}>{content.title}</p></Col>
                                    <Col className={cx('pl-pr-none')}><p className={cx('content')}>{content.content}</p></Col>
                                </Row>
                            })}
                            <ul className={cx('info-box')}>
                                {isWithdrawl ?
                                    <>
                                        <li>· 인증된 계좌로 출금액이 입금됩니다.</li>
                                        <li>· 은행영업시간이 마감될 경우 출금처리가 늦어질 수 있습니다.</li>
                                    </>
                                    :
                                    <>
                                        <li>· 송금 시에 이 메세지를 입력하여 보내주십시오. </li>
                                        <li>· 입금코드와 금액이 입금예약사항과 정확히 일치해야합니다.</li>
                                    </>
                                }
                            </ul>
                        </DefaultCard>
                    })
                }
            </>
            : 
            <NoList
                marginTop={62}
                text={`${isWithdrawl ? '출금':'입금'}신청내역이 없습니다.`}
            />
        }
        
        </>
    )
};

KrwTransactionCard.defaultProps = {
    lists: []
}

export default KrwTransactionCard;