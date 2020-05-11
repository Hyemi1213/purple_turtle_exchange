import React from 'react';
import styles from './ManageBankingForm.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import PCPageTitle from 'components/_base/PCPageTitle';
import Input from 'components/_common/Input';
import SelectBar from 'components/_common/SelectBar';
import Button from 'components/_common/Button';
import CheckBox from 'components/_common/CheckBox';
import Modal from 'components/_common/Modal';
import CustomModal from 'components/_base/CustomModal';

const cx = classNames.bind(styles);

const ManageBankingForm = ({ bankLists, currentBank, handleSelectBar, handleChange, account, accountHolder, phone, bday, formErrors, agree, clickToCancelBank, clickToOpenModal, currentModalOpen, clickToToggleModal, clickToCloseModal, clickToRegisterAccount, modalContentLists, clickToAgree, ruleContent }) => {

    const customStyles = {
        option: (provided, state) => ({
            border: 'none',
            color: state.isSelected ? '#C569FE' : '#7C7F88',
            cursor: 'pointer',
            padding: '0.4rem 0.6rem 0.6rem',
            fontSize: '1.2rem',
            letterSpacing: '-0.5px',
            fontWeight: 500,
            lineHeight: '1.9rem',
            transition: 'color 0.2s ease-in',
            '&:hover': {
                color: '#C569FE'
            }
        }),
        placeholder: (provided, state) => ({
            color: '#7C7F88',
            fontSize: '1.2rem',
            letterSpacing: '-0.5px',
            lineHeight: '1.9rem',
            fontWeight: 500,
            padding: '0.4rem 0.6rem 0.6rem',
            transition: 'color 0.2s ease-in',
            '&:hover': {
                color: '#467AFF'
            }
        }),
        control: (provided, state) => ({
            ...provided,
            borderColor: '#B0B7C0',
            borderRadius: state.menuIsOpen ? '4px 4px 0 0' : '4px',
            boxShadow: 'none',
            cursor: 'pointer',
            minHeight: '30px',
            height: '30px',
            '&:hover': {
                color: '#467AFF'
            }
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: 0
        }),
        menu: (provided, state) => ({
            ...provided,
            margin: 0,
            boxShadow: '2px 4px 9px rgba(18, 18, 35, 0.12)',
            border: '1px solid #B0B7C0',
            borderTop: 'none',
            borderRadius: '0 0 4px 4px',
        }),
        menuList: (provided, state) => ({
            ...provided,
            padding: 0,
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        singleValue: (provided, state) => ({
            color: '#7C7F88',
            fontSize: '1.2rem',
            letterSpacing: '-0.5px',
            fontWeight: 500,
            lineHeight: '1.9rem',
            padding: '0.4rem 0.6rem 0.6rem',
            '&:hover': {
                color: '#467AFF'
            }
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: '#B0B7C0',
            padding: 0,
            '&:hover': {
                color: '#B0B7C0'
            }
        })
    }

    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }} className={cx('pl-pr-none')}>
                <DefaultCard formStyle className={cx('wrapper')}>
                    <Col xs="12" md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} className={cx('pl-pr-none')}>
                        <PCPageTitle className={cx('pc-title')} title='입출금계좌 관리'>
                            <p className={cx('semi-title', 'g-pc-only')}>
                                입출금에 사용할 고객님의 은행 계좌정보를 입력해 주세요.
                            </p>
                        </PCPageTitle>
                        <p className={cx('main-title', 'g-mobile-only')}>
                            입출금계좌 관리
                        </p>
                        <p className={cx('semi-title', 'g-mobile-only')}>
                            입출금에 사용할 고객님의 은행 계좌정보를 입력해 주세요.
                        </p>
                        <Row>
                            <Col xs='6' className={cx('pl-pr-none', 'selectbar')}>
                                <SelectBar
                                    options={bankLists}
                                    value={currentBank}
                                    onChange={handleSelectBar}
                                    placeholder='은행선택'
                                    styles={customStyles}
                                    dropdownIndicatorColour='#7C7F88'
                                    dropdownIndicatorSize='7px'
                                    dropdownIndicatorborderWidth='0 1px 1px 0'
                                />
                                <p className={cx('g-feedback')}>{formErrors.currentBank}</p>
                            </Col>
                        </Row>

                        <div className={cx('g-input-box')}>
                            <Input
                                onChange={handleChange}
                                value={account}
                                name='account'
                                invalid={formErrors.account.length > 0}
                                valid={account.length > 0 && formErrors.account.length == 0}
                                placeholder='계좌번호'
                                feedbackMsg={formErrors.account}
                            />
                        </div>
                        <div className={cx('g-input-box')}>
                            <Input
                                onChange={handleChange}
                                value={accountHolder}
                                name='accountHolder'
                                invalid={formErrors.accountHolder.length > 0}
                                valid={accountHolder.length > 0 && formErrors.accountHolder.length == 0}
                                placeholder='예금주'
                                feedbackMsg={formErrors.accountHolder}
                            />
                        </div>
                        <div className={cx('g-input-box')}>
                            <Input
                                onChange={handleChange}
                                value={phone}
                                name='phone'
                                invalid={formErrors.phone.length > 0}
                                valid={phone.length > 0 && formErrors.phone.length == 0}
                                placeholder='핸드폰번호'
                                feedbackMsg={formErrors.phone}
                            />
                        </div>
                        <div className={cx('g-input-box')}>
                            <Input
                                onChange={handleChange}
                                value={bday}
                                name='bday'
                                invalid={formErrors.bday.length > 0}
                                valid={bday.length > 0 && formErrors.bday.length == 0}
                                placeholder='생년월일'
                                feedbackMsg={formErrors.bday}
                            />
                        </div>
                        <div className={cx('checkbox-box')}>
                            <CheckBox
                                name='agree'
                                checked={agree}
                                label='개인정보 수집 및 이용에 대한 동의'
                                onChange={handleChange}
                                invalid={formErrors.agree.length > 0 && !agree}
                                entireClassName={cx('checkbox')}
                                labelClassName={cx('checkbox-label')}
                            />
                            <span onClick={() => clickToOpenModal('rules')} className={cx('indicate-rules')}>보기</span>
                        </div>
                        <div className={cx('btn-box')}>
                            <Button className={cx('btn')} disabled onClick={clickToCancelBank}>취소</Button>
                            <Button className={cx('btn')} onClick={() => clickToOpenModal('banking')}>다음</Button>
                        </div>
                        <CustomModal
                            isOpen={currentModalOpen == 'banking'}
                            toggle={() => clickToToggleModal('banking')}
                            onClose={clickToCloseModal}
                            title='은행계좌 인증확인'
                            titleInfo='작성하신 정보를 확인해주세요.'
                            clickToSubmit={clickToRegisterAccount}
                            submitBtnText='확인'
                            colour3
                            contentLists={modalContentLists}
                        >
                        </CustomModal>
                        <Modal
                            isOpen={currentModalOpen == 'rules'}
                            toggle={() => clickToToggleModal('rules')}
                            onClose={clickToCloseModal}
                            title='개인정보취급방침'
                            isBtnCenter
                            footer={<Button onClick={clickToAgree}>동의</Button>}
                        >
                            <p>{ruleContent}</p>
                        </Modal>
                    </Col>
                </DefaultCard>
            </Col>
        </Row>
        
    )
};

ManageBankingForm.defaultProps = {
    formErrors: {
        account: '',
        accountHolder: '',
        phone: '',
        bday: '',
        agree: '',
        currentBank: ''
    }
}

export default ManageBankingForm;