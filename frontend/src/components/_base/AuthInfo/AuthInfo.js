import React from 'react';
import styles from './AuthInfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthInfo = ({ title, content }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            {content ? <p className={cx('content')}>{content}</p> : null}
        </div>
    )
};

export default AuthInfo;