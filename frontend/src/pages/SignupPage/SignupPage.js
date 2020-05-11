import React from 'react';
import styles from './SignupPage.scss';
import classNames from 'classnames/bind';

import AuthInfo from 'components/_base/AuthInfo';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';
import SignupPageContainer from 'containers/SignupPageContainer';

const cx = classNames.bind(styles);

const SignupPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='sign up'
            activeIdx={0}
        >
            <AuthInfo
                title="회원가입"
                content="PT3거래소 이용을 위해 회원가입을 진행합니다."
            />
            <SignupPageContainer/>
        </BeforeLoginTemplate>
    )
};

export default SignupPage;