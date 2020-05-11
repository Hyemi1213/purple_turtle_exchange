import React from 'react';
import classNames from 'classnames/bind';
import styles from './SignupForm.scss';

import Form from 'components/_common/Form';
import CheckBox from 'components/_common/CheckBox';
import InputForPw from 'components/_common/InputForPw';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';
import Modal from 'components/_common/Modal';

const cx = classNames.bind(styles);

const SignupForm = ({ submitToSingup, handleCheckbox, handleChange, email, password, passwordConf, formErrors, terms, privacy, agreeAll, openRulesModal, isModalOpen, onModalClose, currentRule, currentRuleContent, clickToAgree}) => {
    return (
        <Form className={cx('wrapper')} onSubmit={submitToSingup}>
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
            <div className={cx('g-input-box')}>
                <InputForPw
                    onChange={handleChange}
                    value={password}
                    name='password'
                    invalid={formErrors.password.length > 0}
                    valid={password.length > 0 && formErrors.password.length == 0}
                    placeholder='비밀번호'
                    type='password'
                    feedbackMsg={formErrors.password}
                />
            </div>
            <div>
                <Input
                    onChange={handleChange}
                    value={passwordConf}
                    name='passwordConf'
                    invalid={formErrors.passwordConf.length > 0}
                    valid={passwordConf.length > 0 && formErrors.passwordConf.length == 0}
                    placeholder='비밀번호 확인'
                    type='password'
                    feedbackMsg={formErrors.passwordConf}
                />
            </div>

            <div className={cx('checkbox-box')}>
                <div className={cx('checkbox-frame', 'agree-all')}>
                    <CheckBox
                        name="agreeAll"
                        checked={agreeAll}
                        label="전체 동의"
                        onChange={handleCheckbox}
                        labelClassName={cx('text')}
                    />
                </div>
                <div className={cx('checkbox-frame')}>
                    <CheckBox
                        name="terms"
                        checked={terms}
                        label="이용약관 방침 (필수)"
                        onChange={handleCheckbox}
                        invalid={formErrors.terms.length > 0 && !terms}
                    />
                    <span className={cx('see-btn')} onClick={() => openRulesModal('terms')}>보기</span>
                </div>
                <div className={cx('checkbox-frame')}>
                    <CheckBox
                        name="privacy"
                        checked={privacy}
                        label="개인정보보호정책 (필수)"
                        onChange={handleCheckbox}
                        invalid={formErrors.privacy.length > 0 && !privacy}
                    />
                    <span className={cx('see-btn')} onClick={() => openRulesModal('privacy')}>보기</span>
                </div>
            </div>
            <p className={cx('extra-feedback', formErrors.terms.length > 0 || formErrors.privacy.length > 0 ? 'show' : null)}>*필수 항목을 동의해주세요.</p>

            <div className={cx('btn-box')}>
                <Button type='submit' onClick={submitToSingup}>이메일 인증</Button>
            </div>

            <Modal
                isOpen={isModalOpen}
                toggle={openRulesModal}
                onClose={onModalClose}
                title={currentRule.label}
                isBtnCenter
                footer={<Button onClick={() => clickToAgree(currentRule.value)}>동의</Button>}
            >
                <p>{currentRuleContent}</p>
            </Modal>
        </Form>
    )
};

export default SignupForm;