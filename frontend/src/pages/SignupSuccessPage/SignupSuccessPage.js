import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignupSuccessPage.scss';
import classNames from 'classnames/bind';

import AuthInfo from 'components/_base/AuthInfo';
import Button from 'components/_common/Button';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';

const cx = classNames.bind(styles);

const SignupSuccessPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='sign up'
            activeIdx={2}
        >
            <AuthInfo
                title={<span>회원가입을 축하드립니다!<br/>로그인 후 PT3거래소를 이용해보세요.</span>}
            />
            <div className={cx('btn-box')}>
                <Button hasLink><Link to='/login'>로그인</Link></Button>
            </div>
        </BeforeLoginTemplate>
    )
};

export default SignupSuccessPage;