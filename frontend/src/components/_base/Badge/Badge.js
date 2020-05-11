import React from 'react';
import styles from './Badge.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Badge = ({ className, isActive, children }) => {
    return (
        <div className={cx('wrapper', isActive && 'active', className)}>
            {children}
        </div>
    )
};

export default Badge;