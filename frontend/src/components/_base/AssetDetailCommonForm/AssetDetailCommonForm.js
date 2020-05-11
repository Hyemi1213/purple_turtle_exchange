import React from 'react';
import styles from './AssetDetailCommonForm.scss';
import classNames from 'classnames/bind';

import AssetCard from 'components/_base/AssetCard';

const cx = classNames.bind(styles);

const AssetDetailCommonForm = ({ assetName, assetSemiName, assetContents, assetExtraContents }) => {
    return (
        <div>
            <AssetCard
                title={assetName}
                semiTitle={assetSemiName}
                contents={assetContents}
                isUnderline={true}
                className={cx('margin-b')}
            />
            <AssetCard
                contents={assetExtraContents}
                isDot={true}
                isUnderline={true}
            />
        </div>
    )
};

AssetDetailCommonForm.defaultProps = {
    assetContents: []
}

export default AssetDetailCommonForm;