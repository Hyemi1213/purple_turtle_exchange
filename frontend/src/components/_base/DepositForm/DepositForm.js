import React from 'react';
import classNames from 'classnames/bind';
import styles from './DepositForm.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import InfoBox from 'components/_base/InfoBox';
import Spinner from 'components/_common/Spinner';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';
import addWalletImg from 'static/images/add_wallet.svg';
import krwBankImg from 'static/images/krwbank_icon.svg';

const cx = classNames.bind(styles);

const DepositForm = ({ code, afterCopy, qrCodeImg, hasWallet, currentAssetName, clickToCreateWallet, isLoading, infoLists, isKrw }) => {
    return (
        <div className={cx('wrapper')}>
            {hasWallet ? 
                <div className={cx('yes-wallet-box')}>
                    <div className={cx('qr-box')}>
                        <img src={qrCodeImg} alt='입금주소' />
                    </div>
                    <CopyToClipboard text={code} onCopy={afterCopy}>
                        <Input
                            value={code}
                            readOnly
                            name='code'
                            extraText='복사'
                        />
                    </CopyToClipboard>
                    <p className={cx('small-info')}>이 주소는 {currentAssetName} 입금전용 주소이므로, {currentAssetName} 입금만 가능합니다.</p>
                    <InfoBox
                        className={cx('info-box')}
                        lists={infoLists}
                    />
                </div>
                :
                <div className={cx('no-wallet-box')}>
                    {isLoading ? <Spinner colour={'#C569FE'} size={100} /> : 
                        <>
                            {isKrw ? 
                                <>
                                    <img src={krwBankImg} alt='계좌실명 인증하기' />
                                    <p className={cx('info-msg')}>KRW 이용은 계좌실명인증 후 이용가능합니다.<br />계좌 실명인증을 먼저 해주세요.</p>
                                    <Button className={cx('krw-btn')} hasLink><Link to='/mypage/security'><span>계좌실명 인증</span></Link></Button>
                                </>
                                :
                                <>
                                    <img src={addWalletImg} alt='지갑 추가하기' />
                                    <p className={cx('info-msg')}>지갑을 아직 생성하지 않았습니다.<br />아래 버튼을 클릭하여 {currentAssetName} 전용 입금지갑을 생성해주세요.</p>
                                    <Button onClick={clickToCreateWallet}>지갑 생성</Button> 
                                </>   
                            }
                        </>
                    }
                </div>
            }
        </div>
    )
};

export default DepositForm;