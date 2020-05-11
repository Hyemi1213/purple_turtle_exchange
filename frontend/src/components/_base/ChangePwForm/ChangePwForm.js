import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChangePwForm.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import PCPageTitle from 'components/_base/PCPageTitle';
import Form from 'components/_common/Form';
import Input from 'components/_common/Input';
import InputForPw from 'components/_common/InputForPw';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const ChangePwForm = ({ clickToChangePw, currentPw, newPw, newPwConf, formErrors, handleChange, className }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }} className={cx('pl-pr-none')}> 
                <DefaultCard formStyle className={cx('wrapper')}>
                    <Form onSubmit={clickToChangePw} className={cx(className)}>
                        <Col xs="12" md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} className={cx('pl-pr-none')}>
                            <PCPageTitle className={cx('pc-title')} title='비밀번호 변경' />
                            <div className={cx('g-input-box')}>
                                <Input
                                    type='password'
                                    onChange={handleChange}
                                    value={currentPw}
                                    name='currentPw'
                                    invalid={formErrors.currentPw.length > 0}
                                    feedbackMsg={formErrors.currentPw}
                                    placeholder='현재 비밀번호'
                                />
                            </div>
                            <div className={cx('g-input-box')}>
                                <InputForPw
                                    type='password'
                                    onChange={handleChange}
                                    value={newPw}
                                    name='newPw'
                                    invalid={formErrors.newPw.length > 0}
                                    feedbackMsg={formErrors.newPw}
                                    placeholder='새로운 비밀번호'
                                />
                            </div>
                            <div>
                                <Input
                                    type='password'
                                    onChange={handleChange}
                                    value={newPwConf}
                                    name='newPwConf'
                                    invalid={formErrors.newPwConf.length > 0}
                                    feedbackMsg={formErrors.newPwConf}
                                    placeholder='새로운 비밀번호 확인'
                                />
                            </div>
                            <div className={cx('btn-box')}>
                                <Button type='submit' onClick={clickToChangePw}>비밀번호 변경</Button>
                            </div>
                        </Col>
                    </Form>
                </DefaultCard>
                <div className={cx('back-box', 'g-pc-only')}>
                    <Button linkStyleDark><Link to='/mypage' className={cx('link')}>변경취소</Link></Button>
                </div>
            </Col>
        </Row>
    )
};

export default ChangePwForm;