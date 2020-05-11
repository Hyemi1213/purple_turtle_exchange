import React from 'react';
import styles from './OrderForm.scss';
import classNames from 'classnames/bind';
import { bcadd, bcmul } from 'locutus/php/bc';
import { commasEveryThousand, clearZero } from 'lib/functions';

import { Row, Col } from 'reactstrap';
import DefaultTable from 'components/_base/DefaultTable';
import DefaultCard from 'components/_base/DefaultCard';
import MovingTabs from 'components/_common/MovingTabs';
import Form from 'components/_common/Form';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';
import CustomModal from 'components/_base/CustomModal';
import { SortArrow } from 'components/_common/Icons';

import walletIcon from 'static/images/wallet_icon.svg';
import LoginNeeded from 'components/_base/LoginNeeded';

const cx = classNames.bind(styles);

const OrderForm = ({ isBuying, isModalOpen, modalToggle, onModalClose, clickToOrder, price, amount, handleChange, formErrors, fee, percentageAmount, movingTabMenu, currentMenu, clickedMenu, availableAmount, usingAmount, baseCurrency, quoteCurrency, minimumAmount, modalContentLists, buyLists, sellLists, isAuthed, currentPrice, currentPricePercentage, isMobile }) => {

    let totalAmount = bcadd(bcmul(price, amount, 8), fee, 8);

    let textForBuying = isBuying ? '매수' : '매도';

    let defaultContent = <><MovingTabs
            className={cx('moving-tabs', 'moving-tabs-mobile', 'g-mobile-only')}
            lists={movingTabMenu}
            currentMenu={currentMenu}
            clickedMenu={clickedMenu}
        />

        <div className={cx('moving-tabs', 'moving-tabs-pc', 'g-pc-only', currentMenu)}>
            {movingTabMenu.map((list, idx) => {
                return <p
                    onClick={() => clickedMenu(list.value)}
                    key={idx}
                    className={cx(list.value == currentMenu && 'active', 'tab-menu')}
                >
                    <span className={cx('currency')}>{baseCurrency}</span>{list.name}
                </p>
            })}
        </div>

        <DefaultCard formStyle={!isMobile} className={cx('basic-info-box')}>
            <div className={cx('list-box')}>
                <p className={cx('list')}>
                    <span className={cx('deco')}>
                        <img src={walletIcon} alt='사용가능' />
                    </span>
                    <span className={cx('title')}>사용 가능</span>
                </p>
                <p className={cx('list')}>
                    <span className={cx('content')}>{availableAmount}<span className={cx('currency')}>{quoteCurrency}</span></span>
                </p>
            </div>
            <div className={cx('list-box')}>
                <p className={cx('list')}>
                    <span className={cx('deco')}>
                        <span className={cx('dot')}></span>
                    </span>
                    <span className={cx('title')}>사용 중</span>
                </p>
                <p className={cx('list')}>
                    <span className={cx('content')}>{usingAmount}<span className={cx('currency')}>{quoteCurrency}</span></span>
                </p>
            </div>
        </DefaultCard></>

    return (
        <div className={cx('wrapper', isBuying ? 'buy' : 'sell')}>
            <Row>
                <Col xs='12' className={cx('pl-pr-none', 'g-mobile-only')}>
                    {isMobile && defaultContent}
                </Col>

                <Col xs='12' className={cx('pl-pr-none')}>
                    <Row className={cx('entire-box')}>
                        <Col xs='6' md='12' className={cx('pl-none', 'p-pr-none', 'order-box0')}>
                            {isAuthed ?
                                <DefaultCard formStyle className={cx('left-side')}>
                                    <div>
                                        <Input
                                            name='price'
                                            value={price}
                                            onChange={handleChange}
                                            invalid={formErrors.price.length > 0}
                                            feedbackMsg={formErrors.price}
                                            placeholder='가격'
                                            extraText={quoteCurrency}
                                            extraTextNoBg
                                            className={cx('input')}
                                            extraTextClassName={cx('input-extra-text')}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            name='amount'
                                            value={amount}
                                            onChange={handleChange}
                                            invalid={formErrors.amount.length > 0}
                                            feedbackMsg={formErrors.amount}
                                            placeholder='수량'
                                            extraText={baseCurrency}
                                            extraTextNoBg
                                            className={cx('input')}
                                            extraTextClassName={cx('input-extra-text')}
                                        />
                                    </div>

                                    <p className={cx('min-order-amount')}>최소 주문수량 {minimumAmount} {baseCurrency}</p>

                                    <div className={cx('easy-order-box')}>
                                        <span className={cx('easy-order')} onClick={() => percentageAmount(0.25)}>25%</span>
                                        <span className={cx('easy-order')} onClick={() => percentageAmount(0.5)}>50%</span>
                                        <span className={cx('easy-order')} onClick={() => percentageAmount(1)}>100%</span>
                                    </div>

                                    <div className={cx('total-box')}>
                                        <div className={cx('list')}>
                                            <p className={cx('content')}>수수료</p>
                                            <p className={cx('content')}><span className={cx('number')}>{fee}</span> {quoteCurrency}</p>
                                        </div>
                                        <div className={cx('list')}>
                                            <p className={cx('content')}>총액</p>
                                            <p className={cx('content')}><span className={cx('number')}>{totalAmount}</span> {quoteCurrency}</p>
                                        </div>
                                    </div>

                                    <div className={cx('btn-box')}>
                                        <Button onClick={modalToggle}>{textForBuying} 신청</Button>
                                    </div>

                                    <CustomModal
                                        isOpen={isModalOpen}
                                        toggle={modalToggle}
                                        onClose={onModalClose}
                                        title={`${textForBuying}확인`}
                                        titleInfo={`아래 내용으로 ${textForBuying} 주문을 진행합니다.`}
                                        clickToSubmit={() => clickToOrder(isBuying ? 'buy' : 'sell')}
                                        contentLists={modalContentLists}
                                        finalContentTitle='주문총액'
                                        finalContentContent={totalAmount}
                                        colour1={!isBuying}
                                        colour2={isBuying}
                                        submitBtnText='확인'
                                    >
                                    </CustomModal>
                                </DefaultCard>
                                :
                                <LoginNeeded className={cx('login-needed')} />
                            }

                        </Col>
                        <Col md='12' className={cx('pl-pr-none', 'g-pc-only', 'order-box1')}>
                            {!isMobile && defaultContent}
                        </Col>
                        <Col xs='6' md='12' className={cx('pl-pr-none', 'order-box2')}>
                            <DefaultCard formStyle className={cx('right-side')}>
                                <div className={cx('g-pc-only', 'call-price-title-box')}>
                                    <p className={cx('title')}>호가</p>

                                </div>
                                <DefaultTable
                                    headEachClassName={cx('head-each')}
                                    headBoxClassName={cx('custom-head-box')}
                                    headList={[{
                                        title: '수량'
                                    }, {
                                        title: '호가'
                                    }]}
                                >
                                    <div className={cx('list-box', 'buy')}>
                                        {buyLists.map((list, idx) => {
                                            return <div className={cx('body-box')} key={idx} style={{ '--pseudo-width': `${list.orderListPseudoWidth}%` }}>
                                                <p className={cx('body-each')}>
                                                    {list.amount}
                                                </p>
                                                <p className={cx('body-each', 'price')}>
                                                    {list.price}
                                                </p>
                                            </div>
                                        })}
                                    </div>
                                    <div className={cx('current-price-box','g-pc-only')}>
                                        <p className={cx('title')}>현재시세</p>
                                        <p className={cx('content')}>{currentPrice}</p>
                                        <div className={cx('percentage', currentPricePercentage > 0 && 'positive', currentPricePercentage < 0 && 'negative')}>{currentPricePercentage !== 0 && <SortArrow clicked={currentPricePercentage < 0} className={cx('sort-arrow', currentPricePercentage < 0 && 'negative')}/>}{currentPricePercentage > 0 && '+'}{currentPricePercentage}%</div>
                                    </div>
                                    <DefaultTable
                                        className={cx('g-pc-only')}
                                        headEachClassName={cx('head-each')}
                                        headBoxClassName={cx('custom-head-box')}
                                        headList={[{
                                            title: '수량'
                                        }, {
                                            title: '호가'
                                        }]}>

                                    </DefaultTable>
                                    <div className={cx('list-box', 'sell')}>
                                        {sellLists.map((list, idx) => {
                                            return <div className={cx('body-box')} key={idx} style={{ '--pseudo-width': `${list.orderListPseudoWidth}%` }}>
                                                <p className={cx('body-each')}>
                                                    {list.amount}
                                                </p>
                                                <p className={cx('body-each', 'price')}>
                                                    {list.price}
                                                </p>
                                            </div>
                                        })}
                                    </div>
                                </DefaultTable>
                            </DefaultCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
            

            
        </div>
    )
};

OrderForm.defaultProps = {
    buyLists: [],
    sellLists: []
}

export default OrderForm;