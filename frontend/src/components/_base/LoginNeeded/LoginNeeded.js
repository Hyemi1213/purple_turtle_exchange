import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginNeeded.scss';

import Button from 'components/_common/Button';

import lockIcon from 'static/images/lock_icon.svg';

const cx = classNames.bind(styles);

const LoginNeeded = ({ className }) => {
    return (
        <div className={cx('wrapper', className)}>
            <img src={lockIcon} alt='로그인 필수'/>
            <p className={cx('text')}>로그인이 필요한<br/>서비스입니다.</p>
            <Button className={cx('btn')} hasLink><Link to='/login'>로그인</Link></Button>
        </div>
    )
};

export default LoginNeeded;