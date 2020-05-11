import React from 'react';
import styles from './DeleteStatus.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import Button from 'components/_common/Button';

import statusIcon from 'static/images/delete_status_icon.svg';
import successIcon from 'static/images/delete_success_icon.svg';

const cx = classNames.bind(styles);

const DeleteStatus = ({ isSuccess, userEmail, clickNotToDelete }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }} className={cx('pl-pr-none')}> 
                <DefaultCard formStyle className={cx('total-wrapper')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('main-title-box')}>
                            <img src={isSuccess ? successIcon : statusIcon } alt={isSuccess ? '회원탈퇴 진행 중' : '회원탈퇴 신청 완료'}/>
                            {isSuccess ? 
                                <p className={cx('success')}>회원탈퇴 신청 완료</p> : 
                                <p className={cx('not-to-delete')}>{userEmail} 님은<br />회원탈퇴 진행 중입니다.</p>
                            }
                        </div>
                        <div className={cx('content-box')}>
                            {isSuccess ? 
                                <p className={cx('success')}>그 동안 PT3암호화폐 거래소를 이용해주셔서 감사합니다.<br/><br/>회원탈퇴는 2주 후 완전히 삭제됩니다.<br/>회원탈퇴 철회를 원하시는 경우 2주안에 로그인 또는<br/><span className={cx('strong')}>고객센터</span>에 문의주시길 바랍니다.</p>
                                :
                                <p className={cx('not-to-delete')}>{userEmail}로 탈퇴가 신청되었습니다.<br />회원탈퇴 철회를 원하시는 경우<br />아래의 탈퇴 철회 버튼을 눌러주세요.</p>
                            }
                        </div>
                        <div className={cx('btn-box')}>
                            <Button hasLink><Link to='/'>메인으로</Link></Button>
                            {isSuccess ? null : <Button className={cx('submit-btn')} onClick={clickNotToDelete}>탈퇴 철회</Button>}
                        </div>
                    </div>
                </DefaultCard>
            </Col>
        </Row>
    )
};

export default DeleteStatus;