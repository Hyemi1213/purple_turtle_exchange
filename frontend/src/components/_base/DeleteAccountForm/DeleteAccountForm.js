import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DeleteAccountForm.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import PCPageTitle from 'components/_base/PCPageTitle';
import Form from 'components/_common/Form';
import Button from 'components/_common/Button';
import CheckBox from 'components/_common/CheckBox';
import CustomModal from 'components/_base/CustomModal';

const cx = classNames.bind(styles);

const DeleteAccountForm = ({ clickToDelete, agree, handleCheckbox, formErrors, isModalOpen, modalToggle, onModalClose }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }} className={cx('pl-pr-none')}> 
                <DefaultCard formStyle className={cx('wrapper')}>
                    <Col xs="12" md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} className={cx('pl-pr-none')}>
                    <PCPageTitle className={cx('pc-title')} title='회원탈퇴 신청' />
                    <ul className={cx('box', 'g-content-padding-top')}>
                        <li className={cx('title')}>회원탈퇴 신청 불가사유</li>
                        <li className={cx('content')}>가상화폐 잔고가 남아있을 경우</li>
                        <li className={cx('content')}>거래 주문이 등록 중인 경우</li>
                    </ul>

                    <ul className={cx('box')}>
                        <li className={cx('title')}>회원 정보 삭제</li>
                        <li className={cx('content')}>회원탈퇴 시 회원님의 개인정보는 모두 삭제, 폐기 처리되며 복원되지 않습니다. 단, 상법, 전자 상거래 등에서의 소비자 보호에 관한 법률 등 관계법령의 규정에 의거하여 보존할 필요가 있는경우, 회사는 관계법령에정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. (보존근거: 전자상거래 등에서의 소비자보호에 관한 법률)</li>
                    </ul>

                    <ul className={cx('box')}>
                        <li className={cx('content', 'dash')}>계약 또는 청약철회 등에 관한 기록 : 5년</li>
                        <li className={cx('content', 'dash')}>대금결제 및 재회 등의 공급에 관한 기록 : 5년</li>
                        <li className={cx('content', 'dash')}>소비자의 불만 또는 분쟁 처리에 관한 기록 : 3년</li>
                    </ul>
                    <Form onSubmit={clickToDelete}>
                        <CheckBox
                            name='agree'
                            checked={agree}
                            label='상기 내용을 확인하였으며, 동의합니다.'
                            onChange={handleCheckbox}
                            invalid={formErrors.agree.length > 0 && !agree}
                            entireClassName={cx('checkbox')}
                            labelClassName={cx('checkbox-label')}
                        />
                        <div className={cx('btn-box')}>
                            <Button onClick={modalToggle}>탈퇴 신청</Button>
                        </div>
                        <CustomModal
                            className={cx('custom-modal')}
                            isOpen={isModalOpen}
                            toggle={modalToggle}
                            onClose={onModalClose}
                            title='회원탈퇴'
                            clickToSubmit={clickToDelete}
                            submitBtnText='확인'
                            colour3
                        >
                            <p className={cx('content')}>회원 탈퇴 하시겠습니까?</p>
                        </CustomModal>
                    </Form>
                    </Col>
                </DefaultCard>
                <div className={cx('back-box', 'g-pc-only')}>
                    <Button linkStyleDark><Link to='/mypage'>탈퇴취소</Link></Button>
                </div>
            </Col>
        </Row>
    )
};

export default DeleteAccountForm;