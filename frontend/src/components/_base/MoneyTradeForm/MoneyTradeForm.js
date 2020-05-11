import React from 'react';
import classNames from 'classnames/bind';
import styles from './MoneyTradeForm.scss';
import { bcadd } from 'locutus/php/bc';
import { commasEveryThousand, clearZero } from 'lib/functions';

import { Row, Col } from 'reactstrap';
import InfoBox from 'components/_base/InfoBox';
import Form from 'components/_common/Form';
import Button from 'components/_common/Button';
import Input from 'components/_common/Input';
import CustomModal from 'components/_base/CustomModal';
import SimpleInfoBox from 'components/_base/SimpleInfoBox';

import qrCodeIcon from 'static/images/qr_code_icon.svg';

const cx = classNames.bind(styles);

const MoneyTradeForm = ({ currentAssetSymbol, clickToModal, clickToSubmit, handleChange, address, amount, formErrors, isModalOpen, onModalClose, fee, minimumToWithdraw, infoLists, clickToWithdrawlMax, modalContentLists, toggleQrCode, handleQrError, handleQrScan, isAbleToQr, isWithdrawl, isKrwDeposit, isKrwWithdrawl, modalInfoLists, otpcode, noPadding, isKrwConfirmModalOpen, krwConfirmModalUserInfoLists, krwConfirmModalSubmitInfoLists, depositCodeInfoLists }) => {
    
    return (
        <Form onSubmit={clickToSubmit} className={cx('wrapper', noPadding && 'no-padding')}>
            {isWithdrawl &&  
                <div className={cx('g-input-box')}>
                    <Input
                        onChange={handleChange}
                        value={address}
                        name='address'
                        invalid={formErrors.address.length > 0}
                        placeholder='출금주소'
                        feedbackMsg={formErrors.address}
                        extraText={<img className={cx('g-mobile-only')} onClick={toggleQrCode} src={qrCodeIcon} alt='qr코드찍기' />}
                        extraTextNoBg={true}
                        normalPaddingPc
                    />
                </div>
            }
            <div>
                <Input
                    onChange={handleChange}
                    value={amount}
                    name='amount'
                    invalid={formErrors.amount.length > 0}
                    feedbackMsg={formErrors.amount}
                    extraText={<span style={{ width: '100%'}} onClick={clickToWithdrawlMax}>최대</span>}
                    placeholder={isWithdrawl && '출금수량' || isKrwDeposit && '입금KRW' || isKrwWithdrawl && '출금KRW'}
                    extraTextNextToFeedback={<p className={cx('info-msg', formErrors.amount.length > 0 ? 'has-feedback' : null)}>{isWithdrawl && '최소 출금량' || isKrwDeposit && `최소 입금액 ` || isKrwWithdrawl && '최소 출금액'} {minimumToWithdraw} {currentAssetSymbol}</p>}
                />
            </div>

            <div className={cx('cal-box')}>
                <Row>
                    <Col xs='4' className={cx('pl-none')}><p className={cx('title')}>수수료</p></Col>
                    <Col xs='8' className={cx('pl-pr-none')}>
                        <p className={cx('content')}>
                            {fee}
                            <span className={cx('symbol')}>{currentAssetSymbol}</span>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='4' className={cx('pl-none')}><p className={cx('title')}>총 {isWithdrawl && '출금액' || isKrwDeposit && '입금액' || isKrwWithdrawl && '출금액'}</p></Col>
                    <Col xs='8' className={cx('pl-pr-none')}>
                        <p className={cx('content')}>
                            {clearZero(commasEveryThousand(bcadd(amount, fee, 8)))}
                            <span className={cx('symbol')}>{currentAssetSymbol}</span>
                        </p>
                    </Col>
                </Row>
                <Row className={cx('future-amount-box')}>
                    <Col xs='4' className={cx('pl-none')}><p className={cx('title')}>{isWithdrawl && '보낸' || isKrwDeposit && '입금' || isKrwWithdrawl && '출금'} 후 잔고</p></Col>
                    <Col xs='8' className={cx('pl-pr-none')}>
                        <p className={cx('content')}>
                            <span className={cx('symbol')}>{currentAssetSymbol}</span>
                        </p>
                    </Col>
                </Row>
            </div>

            <InfoBox className={cx('info-box')} lists={infoLists}/>
            
            <div className={cx('btn-box')}>
                <Button onClick={() => clickToModal('default')}>{isKrwDeposit ? '입금' : '출금'} 신청</Button>
            </div>

            {/* 입출금 확인 모달 */}
            <CustomModal
                isOpen={isModalOpen}
                toggle={() => clickToModal('default')}
                onClose={onModalClose}
                title={isWithdrawl && '출금하기' || isKrwDeposit && 'KRW입금신청' || isKrwWithdrawl && 'KRW출금신청'}
                titleInfo={isWithdrawl ? '아래 내용으로 출금을 진행합니다.' : '작성하신 정보를 확인 후 OTP인증 비밀번호 6자리를 작성하십시오.'}
                submitBtnText={isWithdrawl ? '확인' : '신청'}
                clickToSubmit={clickToSubmit}
                colour1={isWithdrawl || isKrwWithdrawl}
                colour2={isKrwDeposit}
                contentLists={modalContentLists}
                finalContentTitle={isWithdrawl ? '총 수량' : '총액'}
                finalContentContent={`${clearZero(commasEveryThousand(bcadd(amount, fee, 8)))} ${currentAssetSymbol}`}
            >
                {isWithdrawl ? null : 
                    <>
                        <p className={cx('otp-title')}>OTP 비밀번호</p>
                        <Input
                            name='otpcode'
                            value={otpcode}
                            onChange={handleChange}
                            placeholder='OTP 비밀번호 6자리'
                        />
                    </>
                }
                {isWithdrawl ? null : <InfoBox isNoMargin className={cx('modal-info-box')} lists={modalInfoLists} title={isKrwDeposit && '입금시 주의사항' || isKrwWithdrawl && '출금시 주의사항'}/>}
            </CustomModal>

            {/* 입출금 신청완료 모달 */}
            <CustomModal
                isOpen={isKrwConfirmModalOpen}
                toggle={() => clickToModal('krwConfirm')}
                onClose={onModalClose}
                title={isKrwDeposit && '입금신청 완료' || isKrwWithdrawl && '출금신청 완료'}
                submitBtnText='완료'
                clickToSubmit={onModalClose}
                colour3
                className={cx('modal-krw-confirm')}
                noCancelBtn
            >
                <div className={cx('modal-krw-confirm-box')}>
                    <p className={cx('title')}>고객님의 계좌정보</p>
                    <div className={cx('modal-krw-confirm-wrapper')}>
                        {krwConfirmModalUserInfoLists.map((list, idx) => {
                            return <Row className={cx('list')} key={idx}>
                                    <Col className={cx('first', 'pl-none')}>
                                        <p className={cx('list-title')}>{list.title}</p>
                                    </Col>
                                    <Col className={cx('second', 'pl-pr-none')}>
                                        <p className={cx('list-content')}>{list.content}</p>
                                    </Col>
                                </Row>
                        })}
                    </div>
                </div>

                <div className={cx('modal-krw-confirm-box')}>
                    <p className={cx('title')}>{isKrwDeposit && '입금' || isKrwWithdrawl && '출금'}정보</p>
                    <div className={cx('modal-krw-confirm-wrapper')}>
                        {krwConfirmModalSubmitInfoLists.map((list, idx) => {
                            return <Row className={cx('list')} key={idx}>
                                    <Col md={8} className={cx('first', 'pl-none')}>
                                        <p className={cx('list-title')}>{list.title}</p>
                                        {list.infobox && <SimpleInfoBox className={cx('simple-info-box')} lists={list.infobox} />}
                                    </Col>
                                    <Col md={4} className={cx('second', 'pl-pr-none')}>
                                        <p className={cx('list-content')}>{list.content}</p>
                                    </Col>
                                </Row>
                        })}
                    </div>
                </div>
            </CustomModal>
        </Form>
    )
};

MoneyTradeForm.defaultProps = {
    amount: '',
    fee: '',
    formErrors: {
        address: '',
        amount: ''
    },
    krwConfirmModalUserInfoLists: [],
    krwConfirmModalSubmitInfoLists: []
}

export default MoneyTradeForm;