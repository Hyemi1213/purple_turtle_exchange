import React from 'react';
import styles from './MainBG.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainBG = ({ height, isMobileOnly, isPCOnly }) => {
    return (
        <div
            className={cx('wrapper', isMobileOnly && 'g-mobile-only', isPCOnly && 'g-pc-only' )}
            style={{ height: `${height}rem`}}
            
        >
        </div>
    )
};

export default MainBG;