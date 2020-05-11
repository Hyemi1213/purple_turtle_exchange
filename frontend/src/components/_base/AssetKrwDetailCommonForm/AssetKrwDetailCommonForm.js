import React from 'react';
import styles from './AssetKrwDetailCommonForm.scss';
import classNames from 'classnames/bind';

import AssetCard from 'components/_base/AssetCard';
import DefaultCard from 'components/_base/DefaultCard';

const cx = classNames.bind(styles);

const AssetKrwDetailCommonForm = ({ assetExtraContents, bankName, accountNumber, isBankExist }) => {
    return (
        <div className={cx('wrapper')}>
            <AssetCard
                title='원화가치 암호화폐'
                semiTitle='krw'
                className={cx('krw-card', 'margin-b')}
            />
            <AssetCard
                contents={assetExtraContents}
                isDot
                isUnderline
                className={cx('margin-b')}
            />
            {isBankExist && <DefaultCard className={cx('backaccount-box')}>
                <p className={cx('title')}>인증계좌</p>
                <p className={cx('content')}><span className={cx('strong')}>{bankName}</span>{accountNumber}</p>
            </DefaultCard>}
        </div>
    )
};

export default AssetKrwDetailCommonForm;