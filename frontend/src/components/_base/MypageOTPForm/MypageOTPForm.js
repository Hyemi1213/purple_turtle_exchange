import React from 'react';
import classNames from 'classnames/bind';
import styles from './MypageOTPForm.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import PCPageTitle from 'components/_base/PCPageTitle';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';
import Badge from 'components/_base/Badge';
import InfoBox from 'components/_base/InfoBox';

import qrCode from 'static/images/qrcode_sample.png';
import otpIcon from 'static/images/otp_icon.svg';
import appstoreIcon from 'static/images/appstore_icon.svg';
import googleplayIcon from 'static/images/googleplay_icon.svg';

const cx = classNames.bind(styles);

const MypageOTPForm = ({ isActive, clickToRequest, currentPage, otpKey, handleChange, code, clickToDeactivateOTP, clickToActivateOTP, afterCopy, formErrors, clickToGoBackToFirst }) => {

    const infoLists = [{
        content: 'Google OTP를 사용함으로써 보안단계를 높여 PT3 거래소를 안전하게 이용하실 수 있습니다.',
    }, {
        content: 'OTP 활성화 시 로그인과 입/출금 시에 OTP를 통한 2차 인증이 필요해집니다.',
    }, {
        content: 'Google OTP 인증 앱을 스마트폰에 설치하세요.',
        className: `${isActive && 'g-hidden'}`
    }];

    if(currentPage == 'deactive') {
        currentPage = <div className={cx('deactive-box', 'common-box')}>
            <PCPageTitle title='Google OTP 비활성화'/>
            <div className={cx('title-box')}>
                {/* <img src={otpIcon} alt='google otp 비활성화' /> */}
                <p className={cx('title', 'g-mobile-only')}>Google OTP 비활성화</p>
            </div>
            <p className={cx('info-text')}>아래 인증번호를 입력하면 OTP가 비활성화됩니다.</p>
            <Input
                placeholder='OTP 인증번호'
                onChange={handleChange}
                name='code'
                value={code}
                invalid={formErrors.code.length > 0}
                valid={code.length > 0 && formErrors.code.length == 0}
                feedbackMsg={formErrors.code}
                feedbackClassName={cx('feedback-msg')}

            />
            <div className={cx('btn-box')}>
                <Button className={cx('btn')} onClick={clickToDeactivateOTP}>확인</Button>
                <Button greyStyle className={cx('btn')} onClick={clickToGoBackToFirst}>취소</Button>
            </div>
        </div>
    }else if(currentPage == 'active') {
        currentPage = <div className={cx('otp-process-box', 'common-box')}>
            <PCPageTitle className={cx('box-title')} title='Google OTP 활성화' />
            <div className={cx('title-box', 'g-mobile-only')}>
                {/* <img src={otpIcon} alt='google otp 활성화' /> */}
                <p className={cx('title')}>Google OTP 활성화</p>
            </div>
            <div className={cx('section1')}>
                <p className={cx('order')}>1단계</p>
                <p className={cx('g-mobile-only', 'info-text')}>아래의 인증키를 OTP앱에서 등록하세요.</p>
                <p className={cx('g-pc-only', 'info-text', 'order-text')}>앱에서 바코드 스캔을 이용하여 인증하거나, 키를 입력해주세요.</p>
                <div className={cx('code-box')}>
                    <img className={cx('qrcode', 'g-pc-only')} src={qrCode} alt='qrcode' />
                    <div className={cx('key-box')}>
                        <CopyToClipboard text={otpKey} onCopy={afterCopy}>
                            <Input
                                extraText='복사'
                                readOnly
                                name='otpKey'
                                defaultValue={otpKey}
                                extraTextBoxClassName={cx('input')}
                                extraTextClassName={cx('input-extra-box')}
                            />
                        </CopyToClipboard>
                        <p className={cx('g-pc-only', 'info-text', 'extra-text')}>바코드 스캔이 불가능한 경우 위 코드를 입력하세요.</p>
                    </div>
                </div>
            </div>
            <div className={cx('section2')}>
                <p className={cx('order')}>2단계</p>
                <p className={cx('info-text', 'order-text')}>발급된 OTP 6자리를 입력해주세요.</p>
                <Input
                    onChange={handleChange}
                    name='code'
                    value={code}
                    className={cx('input')}
                    placeholder='OTP 인증번호'
                    invalid={formErrors.code.length > 0}
                    valid={code.length > 0 && formErrors.code.length == 0}
                    feedbackMsg={formErrors.code}
                    feedbackClassName={cx('feedback-msg')}
                />
                <div className={cx('btn-box')}>
                    <Button onClick={clickToActivateOTP} className={cx('btn')}>인증</Button>
                    <Button greyStyle onClick={clickToGoBackToFirst} className={cx('btn')}>취소</Button>
                </div>
            </div>
        </div>
    }

    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }} className={cx('pl-pr-none')}> 
                <DefaultCard formStyle className={cx('wrapper')}>
                    <Col xs="12" md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} className={cx('pl-pr-none')}>
                        {currentPage !== '' ? currentPage :
                            <>
                                <PCPageTitle title='Google OTP 설정' />
                                <div className={cx('default-box', 'common-box')}>
                                    <div className={cx('main-box')}>
                                        <div className={cx('title-box')}>
                                            <img src={otpIcon} alt='google otp 사용하기' />
                                            <p className={cx('title')}>Google OTP 사용하기</p>
                                        </div>
                                        <Badge className={cx('badge')} isActive={isActive}>
                                            {isActive ? '활성화' : '비활성화'}
                                        </Badge>
                                    </div>
                                    <InfoBox className={cx('info-box')} isNoBg lists={infoLists} />
                                    <div className={cx('store-box', isActive && 'g-hidden')}>
                                        <img src={appstoreIcon} alt='앱스토어' />
                                        <img src={googleplayIcon} alt='구글플레이' />
                                    </div>
                                    <div className={cx('btn-box')}>
                                        <Button onClick={() => clickToRequest(isActive ? 'deactive' : 'active')}>OTP {isActive ? '비활성화' : '활성화'}</Button>
                                    </div>
                                </div>
                            </>
                        }
                    </Col>
                </DefaultCard>
            </Col>
        </Row>
    )
};

MypageOTPForm.defaultProps = {
    formErrors: {
        code: ''
    }
}

export default MypageOTPForm;