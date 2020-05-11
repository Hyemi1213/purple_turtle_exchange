import React from 'react';
import classNames from 'classnames/bind';
import styles from './TransactionCard.scss';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import xIcon from 'static/images/x_icon.svg';

const cx = classNames.bind(styles);

const TransactionCard = ({ lists, className, isCancelable, clickToOpenModal }) => {
    return (
        <>
            {lists.map((list, idx) => {
                return <DefaultCard key={idx} className={cx('wrapper', list.isSell ? 'sell' : null, className)}>
                    <Row>
                        <Col className={cx('title-box', 'pl-pr-none')}>
                            <span className={cx('icon')}></span><span className={cx('title')}>{list.isSell ? '매도' : '매수'}</span>
                        </Col>
                        <Col className={cx('pl-pr-none', isCancelable ? 'cancel-box' : null)}>
                            <p className={cx('date')}>{list.date}</p>
                            {isCancelable ? <img src={xIcon} alt='취소' onClick={() => clickToOpenModal(list)} /> : null }
                        </Col>
                    </Row>
                    {list.hasOwnProperty('contents') && list.contents.map((content, idx) => {
                        return <Row key={idx} className={cx('content-box', content.value == 'total' ? 'total' : null)}>
                            <Col className={cx('pl-none')}><p className={cx('title')}>{content.title}</p></Col>
                            <Col className={cx('pl-pr-none')}><p className={cx('content')}>{content.content}</p></Col>
                        </Row>
                    })}
                </DefaultCard>
            })}
        </>
    )
};

TransactionCard.defaultProps = {
    lists: []
}

export default TransactionCard;
