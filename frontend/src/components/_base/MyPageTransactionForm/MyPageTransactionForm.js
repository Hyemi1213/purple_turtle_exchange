import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyPageTransactionForm.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'reactstrap';
import { Arrow } from 'components/_common/Icons';
import PCPageTitle from 'components/_base/PCPageTitle';
import PCListTable from 'components/_base/PCListTable';
import Button from 'components/_common/Button';
import NoList from 'components/_base/NoList';
import CustomModal from 'components/_base/CustomModal';
import Pagination from 'components/_common/Pagination';
import TransactionCard from 'components/_base/TransactionCard';
import MovingTabs from 'components/_common/MovingTabs';
import LoginNeeded from 'components/_base/LoginNeeded';
import Spinner from 'components/_common/Spinner';

import xIcon from 'static/images/x_icon.svg';

const cx = classNames.bind(styles);

const MyPageTransactionForm = ({ transacMenu, historyLists, currentMenu, clickedMenu, isCancelable, clickToOpenModal, isModalOpen, clickToModal, onModalClose, clickToCancelOrder, modalContentLists, finalContentContent, className, isAuthed, pageTitle, pcTableHeadList, pcTableBodyList, currentPageName, isMyPageLink,  ...rest }) => {

    // let pcTableBodyListKeyValue = [];

    // pcTableBodyList.forEach((list) => {
    //     Object.keys(list).forEach((key) => {
    //         pcTableBodyListKeyValue.push(list[key])
    //     })
    // })


    //PC에서 사용하는 테이블
    let tableBodyContent;
    if(currentPageName == 'unfinished'){
        //PC 마이페이지 미체결 거래 내역
        tableBodyContent = pcTableBodyList.map((list, idx) => {
            return <div key={idx} className={cx('body-box')}>
                <p className={cx('body-each')}>{list.date}</p>
                <p className={cx('body-each', 'status', list.isSell ? 'sell' : 'buy')}>{list.isSell ? '매도' : '매수'}</p>
                <p className={cx('body-each')}>{list.baseCurrency}/{list.quoteCurrency}</p>
                <p className={cx('body-each')}>{list.amount} {list.baseCurrency}</p>
                <p className={cx('body-each')}>{list.price} {list.quoteCurrency}</p>
                <p className={cx('body-each')}>{list.leftAmount} {list.baseCurrency}</p>
                <p onClick={() => clickToCancelOrder('test')} className={cx('body-each', 'cancel')}><img src={xIcon} alt='취소'/></p>
            </div>
        })
    }else if(currentPageName == 'finished') {
        //PC 마이페이지 거래 내역
        tableBodyContent = pcTableBodyList.map((list, idx) => {
            return <div key={idx} className={cx('body-box')}>
                <p className={cx('body-each')}>{list.date}</p>
                <p className={cx('body-each', 'status', list.isSell ? 'sell' : 'buy')}>{list.isSell ? '매도' : '매수'}</p>
                <p className={cx('body-each')}>{list.baseCurrency}/{list.quoteCurrency}</p>
                <p className={cx('body-each')}>{list.amount} {list.baseCurrency}</p>
                <p className={cx('body-each')}>{list.price} {list.quoteCurrency}</p>
                <p className={cx('body-each')}>{list.amount * list.price} {list.quoteCurrency}</p>
                <p className={cx('body-each')}>{list.fee} {list.quoteCurrency}</p>
                <p className={cx('body-each')}>{list.amount * list.price + list.fee} {list.quoteCurrency}</p>
            </div>
        })
    }else if(currentPageName == 'history'){
        //PC 마이페이지 입출금 내역
        tableBodyContent = pcTableBodyList.map((list, idx) => {
            return <div key={idx} className={cx('body-box')}>
                <p className={cx('body-each')}>{list.date}</p>
                <p className={cx('body-each', 'status', list.isDeposit ? 'buy' : 'sell')}>{list.isDeposit ? '입금' : '출금'}</p>
                <p className={cx('body-each')}>{list.amount} {list.currentCrypto}</p>
                <p className={cx('body-each', 'txid')}>{list.txid}</p>
                <div className={cx('body-each')}>{list.isConfirmed ? '완료' : <><Spinner className={cx('spinner')} size={12} colour={'#F6C53A'} borderSize={2} /><span className={cx('status-pending')}>펜딩</span></>}</div>
            </div>
        })
    }

    return (
        <>
            {/* 모바일버전 */}
            <div className={cx('wrapper', 'g-mobile-only', className)}>
                <MovingTabs
                    lists={transacMenu}
                    currentMenu={currentMenu}
                    clickedMenu={clickedMenu}
                    className={cx('moving-tabs')}
                />
                {isAuthed ? 
                    <>
                        {historyLists.length > 0 ?
                            <>
                                <TransactionCard
                                    clickToOpenModal={clickToOpenModal}
                                    isCancelable={isCancelable}
                                    lists={historyLists}
                                    className={cx('card')}
                                />
                                <Pagination
                                    {...rest}
                                />
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
                            </>
                            :
                            <NoList
                                marginTop={62}
                                text='내역이 없습니다.'

                            />
                        }
                    </>
                    :
                    <LoginNeeded/>
                }
                
            </div>
         
            {/* PC버전 */}
            <div className={cx('pc-wrapper', 'g-pc-only')}>
                <Row>
                    <Col md={{ size: 10, offset: 1}}>
                        <PCPageTitle title={pageTitle}/>
                        <div className={cx(currentPageName)}>
                            <PCListTable
                                headList={pcTableHeadList}
                                headEachClassName={cx('head-each')}
                            >
                                {tableBodyContent}
                            </PCListTable>
                        </div>
                        
                        {isMyPageLink && <div className={cx('back-btn')}><Button linkStyleDark pcMypage><Link to='/mypage'><Arrow className={cx('arrow')} left /><span>마이페이지 이동</span></Link></Button></div>}
                        
                        <Pagination
                            className={cx('pagination')}
                            {...rest}
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default MyPageTransactionForm;

MyPageTransactionForm.defaultProps = {
    historyLists: [],
    modalContentLists: [],
    pcTableBodyList: []
}