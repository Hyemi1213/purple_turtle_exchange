import React from 'react';
import classNames from 'classnames/bind';
import styles from './TermsForm.scss';

import { Row, Col } from 'reactstrap';
import PCPageTitle from 'components/_base/PCPageTitle';

const cx = classNames.bind(styles);

const TermsForm = ({ pcPageTitle }) => {
    return (
        <Row>
            <Col xs='12' md={{ size: 10, offset: 1 }} className={cx('pl-pr-none')}>
                <div className={cx('wrapper')}>
                    <PCPageTitle
                        title={pcPageTitle}
                    />
                    {pcPageTitle}
                </div>
            </Col>
        </Row>
    )
};

export default TermsForm;