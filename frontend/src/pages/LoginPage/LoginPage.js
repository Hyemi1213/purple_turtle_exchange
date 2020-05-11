import React from 'react';
import styles from './LoginPage.scss';
import classNames from 'classnames/bind';

import Button from 'components/_common/Button';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';
import LoginPageContainer from 'containers/LoginPageContainer';

const cx = classNames.bind(styles);

const LoginPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='login'
            title='Login'
            noLeftIcon={false}
            isTotalBG
        >
            <Container>
                <LoginPageContainer/>
                <div className={cx('link-box')}>
                    <Button linkStyle hasLink className={cx('link')}>
                        <Link to="/signup">회원가입</Link>
                    </Button>
                    <Button linkStyle hasLink className={cx('link')}>
                        <Link to="/find_password">비밀번호 찾기</Link>
                    </Button>
                </div>
            </Container>
        </BeforeLoginTemplate>
    )
};

export default LoginPage;