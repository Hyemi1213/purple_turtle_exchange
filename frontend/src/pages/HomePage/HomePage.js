import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.scss';

import { Container, Row, Col } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import HomePageContainer from 'containers/HomePageContainer';

const cx = classNames.bind(styles);

class HomePage extends Component {
    render () {
        return (
            <PageTemplate className={cx('page')}>
                <Container>
                    <div className={cx('title-box', 'first', 'g-pc-only')}>
                        <h1 className={cx('main-title')}>Purple Turtle Exchange</h1>
                        <p className={cx('semi-title')}>암호화폐기술을 가치있게 여기는 거래소. PTE 거래소</p>
                    </div>
                    <div className={cx('title-box', 'second', 'g-pc-only')}>
                        <p className={cx('content')}>암호화폐 거래소의 기본과 원칙을 지키는 진정한 암호화폐 거래소!<br/>암호화폐기술의 가치를 의미있게 생각하고 지키며 제작한 거래소입니다.</p>
                    </div>
                    <Row>
                        <Col xs='12' md={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2}} className={cx('pl-pr-none')}>
                            <HomePageContainer/>
                        </Col>
                    </Row>
                </Container>
            </PageTemplate>
        )
    }
};

export default HomePage;