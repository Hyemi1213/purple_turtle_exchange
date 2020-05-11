import React from 'react';
import styles from './TradeMainMyTradeTablePCForm.scss';
import classNames from 'classnames/bind';

import { mytradeExtraMenu } from 'lib/variables';

import { ShadowScrollBox } from 'components/_common/ScrollBox';
import LoginNeeded from 'components/_base/LoginNeeded';
import TradeMainTablePC from 'components/_base/TradeMainTablePC';
import PCListTable from 'components/_base/PCListTable';
import CustomModal from 'components/_base/CustomModal';

const cx = classNames.bind(styles);

const TradeMainMyTradeTablePCForm = ({ currentMenuValue, clickToChangeMenu, tableBodyList, isAuthed, TableHeadPCFinished, TableHeadPCUnfinished, isModalOpen, clickToModal, onModalClose, clickToCancelOrder, modalContentLists, finalContentContent, clickToOpenModal  }) => {

    let tableBodyContent;

    if (currentMenuValue == 'finished') {
        tableBodyContent = tableBodyList.map((list, idx) => {
            return <div key={idx} className={cx('body-cuxtom-box')}>
                <p className={cx('body-each', 'status', list.isSell ? 'sell' : 'buy')}><span className={cx('icon')}></span>{list.isSell ? '매도' : '매수'}</p>
                <p className={cx('body-each')}>{list.date}</p>
                <p className={cx('body-each')}>{list.amount}</p>
                <p className={cx('body-each')}>{list.price}</p>
                {/* <p className={cx('body-each')}>{list.amount * list.price} {list.quoteCurrency}</p> */}
                {/* <p className={cx('body-each')}>{list.fee} {list.quoteCurrency}</p> */}
                {/* <p className={cx('body-each')}>{list.amount * list.price + list.fee} {list.quoteCurrency}</p> */}
            </div>
        })
    }else if (currentMenuValue == 'unfinished'){
        tableBodyContent = tableBodyList.map((list, idx) => {
            return <div key={idx} className={cx('body-cuxtom-box')}>
                <p className={cx('body-each', 'status', list.isSell ? 'sell' : 'buy')}><span className={cx('icon')}></span>{list.isSell ? '매도' : '매수'}</p>
                <p className={cx('body-each')}>{list.date}</p>
                <p className={cx('body-each')}>{list.amount}</p>
                <p className={cx('body-each')}>{list.price}</p>
                <p className={cx('body-each')}>{list.leftAmount}</p>
                <p onClick={() => clickToOpenModal(list)} className={cx('body-each', 'cancel')}>취소</p>
            </div>
        })
    }

    return (
        <TradeMainTablePC
            title='나의 거래'
            className={cx('wrapper')}
            extraMenuList={mytradeExtraMenu}
            currentMenuValue={currentMenuValue}
            clickToChangeMenu={clickToChangeMenu}
        >
            {isAuthed ? 
                <div className={cx(currentMenuValue)}>
                    <PCListTable
                        headList={currentMenuValue == 'finished' ? TableHeadPCFinished : TableHeadPCUnfinished}
                        headEachClassName={cx('head-each')}
                    >
                        <ShadowScrollBox
                            shadowBottom
                            className={cx('scroll-box')}
                            // fetchFromScroll={fetchFromScroll}
                        >
                            {tableBodyContent}
                        </ShadowScrollBox>
                        <CustomModal
                            isOpen={isModalOpen}
                            toggle={clickToModal}
                            onClose={onModalClose}
                            title='주문취소 확인'
                            titleInfo='아래 내용의 주문을 취소합니다.'
                            submitBtnText='확인'
                            clickToSubmit={clickToCancelOrder}
                            contentLists={modalContentLists}
                            finalContentTitle='미체결 수량'
                            finalContentContent={finalContentContent}
                        />
                    </PCListTable>
                </div>
                :
                <LoginNeeded
                    className={cx('login-needed')}
                />
            }
            
        </TradeMainTablePC>
    )
};

export default TradeMainMyTradeTablePCForm;