import React from 'react';
import classNames from 'classnames/bind';
import styles from './CodeConfForm.scss';

import Form from 'components/_common/Form';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const CodeConfForm = ({ clickToSubmit, clickToResend, handleChange, code, formErrors }) => {
    return (
        <Form onSubmit={clickToSubmit} className={cx('wrapper')}>
            <div>
                <Input
                    onChange={handleChange}
                    value={code}
                    name='code'
                    invalid={formErrors.code.length > 0}
                    placeholder='인증코드 6~8자리'
                    feedbackMsg={formErrors.code}
                />
            </div>
            <div className={cx('btn-box')}>
                <Button type='submit' onClick={clickToSubmit}>이메일 인증</Button>
            </div>

            <div className={cx('resend-box')}>
                <p className={cx('info')}>재전송을 원하시면 아래 버튼을 누르세요.</p>
                <Button linkStyle onClick={clickToResend} className={cx('resend-btn')}><a>인증코드 재발송</a></Button>
            </div>
            
        </Form>
    )
};

export default CodeConfForm;