import React from 'react';
import styles from './DefaultCard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DefaultCard = ({ children, className, formStyle, noBorderMobile, ...rest }) => {
    return (
        <div
            className={cx('wrapper', formStyle && 'form', noBorderMobile && 'no-border-mb', className)}
            {...rest}
        >
            {children}
        </div>
    )
};

export default DefaultCard;