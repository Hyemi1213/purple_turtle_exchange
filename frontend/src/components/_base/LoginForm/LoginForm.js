import React from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';

import Form from 'components/_common/Form';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const LoginForm = ({ submitToLogin, handleChange, email, password, formErrors }) => {
    return (
        <Form className={cx('wrapper')} onSubmit={submitToLogin}>
            <div className={cx('g-input-box')}>
                <Input
                    onChange={handleChange}
                    value={email}
                    name='email'
                    invalid={formErrors.email.length > 0}
                    valid={email.length > 0 && formErrors.email.length == 0}
                    placeholder='이메일'
                    feedbackMsg={formErrors.email}
                />
            </div>
            <div>
                <Input
                    onChange={handleChange}
                    value={password}
                    name='password'
                    invalid={formErrors.password.length > 0}
                    valid={password.length > 0 && formErrors.password.length == 0}
                    type='password'
                    placeholder='비밀번호'
                    feedbackMsg={formErrors.password}
                />
            </div>
            <div className={cx('btn-box')}>
                <Button type='submit' onClick={submitToLogin}>로그인</Button>
            </div>
        </Form>
    )
};

export default LoginForm;