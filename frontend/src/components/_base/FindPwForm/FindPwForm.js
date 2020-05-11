import React from 'react';
import classNames from 'classnames/bind';
import styles from './FindPwForm.scss';

import Form from 'components/_common/Form';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const FindPwForm = ({ clickToEmail, handleChange, email, formErrors }) => {
    return (
        <Form onSubmit={clickToEmail} className={cx('wrapper')}>
            <div>
                <Input
                    onChange={handleChange}
                    value={email}
                    name='email'
                    type='email'
                    invalid={formErrors.email.length > 0}
                    placeholder='이메일'
                    feedbackMsg={formErrors.email}
                />
            </div>
            <div className={cx('btn-box')}>
                <Button type='submit' onClick={clickToEmail}>이메일 인증</Button>
            </div>
        </Form>
    )
};

export default FindPwForm;