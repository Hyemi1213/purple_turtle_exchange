import React, { Component } from 'react';
import styles from './BeforeLoginTemplate.scss';
import classNames from 'classnames/bind';

import { Container, Row, Col } from 'reactstrap';
import HeaderContainer from 'containers/HeaderContainer';

import logoImg from 'static/images/test_logo.svg';

const cx = classNames.bind(styles);

class BeforeLoginTemplate extends Component {

    render() {
        let { children, title, className, activeIdx, background, isTotalBG, ...rest } = this.props;
        let dots = [0, 1, 2];

        return (
            <div className={cx('page', className)}>
                <HeaderContainer
                    noLeftIcon
                    {...rest}
                />
                {background}
                <div className={cx(isTotalBG && 'total-bg')}>

                </div>
                <main className={cx('main')}>
                    <Container>
                        <Row>
                            <Col xs='12' md={{ offset: 1, size: 10}} lg={{ offset: 3, size: 6}} className={cx('pl-pr-none')}>
                                <div className={cx('wrapper')}>
                                    <Row>
                                        <Col xs='12' md={{ offset: 1, size: 10}} lg={{ offset: 2, size: 8 }} className={cx('pl-pr-none')}>
                                            <div className={cx('title-frame')}>
                                                {title ? <p className={cx('title')}>{title}</p> : <img className={cx('title-img')} src={logoImg} alt='회사이름' />}
                                                {activeIdx !== undefined ? <div className={cx('dot-line-frame')}>
                                                    {dots.map((idx) => {
                                                        return <p key={idx} className={cx('dot', activeIdx == idx ? 'active' : null)}></p>
                                                    })}
                                                </div> : null}
                                            </div>
                                            {children}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        )
    }
}

export default BeforeLoginTemplate;
