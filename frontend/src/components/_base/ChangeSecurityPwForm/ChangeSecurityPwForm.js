import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'components/_base/ChangePwForm/ChangePwForm.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import PCPageTitle from 'components/_base/PCPageTitle';
import Form from 'components/_common/Form';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const ChangeSecurityPwForm = ({ clickToChangePw, currentPw, newPw, newPwConf, formErrors, handleChange, className }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }} className={cx('pl-pr-none')}> 
                <DefaultCard formStyle className={cx('wrapper')}>
                    <Form onSubmit={clickToChangePw} className={cx(className)}>
                        <Col xs="12" md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} className={cx('pl-pr-none')}>
                            <PCPageTitle className={cx('pc-title')} title='보안비밀번호변경'/>
                            <div className={cx('g-input-box')}>
                                <Input
                                    onChange={handleChange}
                                    value={currentPw}
                                    name='currentPw'
                                    invalid={formErrors.currentPw.length > 0}
                                    feedbackMsg={formErrors.currentPw}
                                    placeholder='기존 보안 비밀번호'
                                />
                            </div>
                            <div className={cx('g-input-box')}>
                                <Input
                                    onChange={handleChange}
                                    value={newPw}
                                    name='newPw'
                                    invalid={formErrors.newPw.length > 0}
                                    feedbackMsg={formErrors.newPw}
                                    placeholder='새 보안 비밀번호'
                                />
                            </div>
                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={newPwConf}
                                    name='newPwConf'
                                    invalid={formErrors.newPwConf.length > 0}
                                    feedbackMsg={formErrors.newPwConf}
                                    placeholder='새 보안 비밀번호 확인'
                                />
                            </div>
                            <div className={cx('btn-box')}>
                                <Button type='submit' onClick={clickToChangePw}>보안코드 변경</Button>
                            </div>
                        </Col>
                    </Form>
                </DefaultCard>
                <div className={cx('back-box', 'g-pc-only')}>
                    <Button linkStyleDark><Link to='/mypage'>변경취소</Link></Button>
                </div>
            </Col>
        </Row>
    )
};

export default ChangeSecurityPwForm;