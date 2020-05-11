import React from 'react';
import classNames from 'classnames/bind';
import styles from './PCPageTitle.scss';

const cx = classNames.bind(styles);

const PCPageTitle = ({ title, className, children}) => {
    return (
        <div className={cx('wrapper', 'g-pc-only', className)}>
            {title}
            {children}
        </div>
    )
};

export default PCPageTitle;