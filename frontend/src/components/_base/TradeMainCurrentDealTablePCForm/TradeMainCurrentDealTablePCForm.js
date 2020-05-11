import React from 'react';
import classNames from 'classnames/bind';
import styles from './TradeMainCurrentDealTablePCForm.scss';

import TradeMainTablePC from 'components/_base/TradeMainTablePC';
import PCListTable from 'components/_base/PCListTable';
import { ShadowScrollBox } from 'components/_common/ScrollBox';

const cx = classNames.bind(styles);

const TradeMainCurrentDealTablePCForm = ({ tableBodyList, isMobile, tableHeadList }) => {
    return (
        <TradeMainTablePC
            className={cx('wrapper')}
            title='시장체결'
        >
            <div className={cx('deal-box')}>
                <PCListTable
                    headList={tableHeadList}
                    headBoxClassName={cx('head-box')}
                    headEachClassName={cx('head-each')}

                >
                    <ShadowScrollBox
                        isDeactiveScrollBar={isMobile}
                        shadowBottom
                        className={cx('scroll-box')}
                        // fetchFromScroll={fetchFromScroll}
                    >
                        {tableBodyList.map((list, idx) => {
                            return <div key={idx} className={cx('body-cuxtom-box')}>
                                    <p className={cx('body-each', 'status', list.isSell ? 'sell' : 'buy')}><span className={cx('icon')}></span>{list.isSell ? '매도' : '매수'}</p>
                                    {/* <p className={cx('body-each')}>{list.date}</p> */}
                                    <p className={cx('body-each')}>{list.amount}</p>
                                    <p className={cx('body-each')}>{list.price}</p>
                                    {/* <p className={cx('body-each')}>{list.amount * list.price} {list.quoteCurrency}</p> */}
                                    {/* <p className={cx('body-each')}>{list.fee} {list.quoteCurrency}</p> */}
                                    {/* <p className={cx('body-each')}>{list.amount * list.price + list.fee} {list.quoteCurrency}</p> */}
                                </div>
                        })}
                    </ShadowScrollBox>
                </PCListTable>
            </div>
        </TradeMainTablePC>
    )
}

TradeMainCurrentDealTablePCForm.defaultProps = {
    extraMenuList: []
}

export default TradeMainCurrentDealTablePCForm;