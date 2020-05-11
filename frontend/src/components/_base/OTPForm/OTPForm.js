import React from 'react';
import classNames from 'classnames/bind';
import styles from './OTPForm.scss';

import Form from 'components/_common/Form';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const OTPForm = ({ clickToLogin, handleChange, code, formErrors }) => {
    return (
        <Form onSubmit={clickToLogin} className={cx('wrapper')}>
            <div>
                <Input
                    onChange={handleChange}
                    value={code}
                    name='code'
                    invalid={formErrors.code.length > 0}
                    placeholder='OTP 인증코드 6자리'
                    feedbackMsg={formErrors.code}
                />
            </div>
            <div className={cx('btn-box')}>
                <Button type='submit' onClick={clickToLogin}>인증</Button>
            </div>
        </Form>
    )
};

export default OTPForm;