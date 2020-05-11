import React, { Component } from 'react';
import { footerMenu } from 'lib/variables';
import classNames from 'classnames/bind';
import styles from './Footer.scss';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

const cx = classNames.bind(styles);

class Footer extends Component {

	render(){

		return(
			<footer className={cx('wrapper')}>
				<div className={cx('menu-box', 'g-pc-only')}>
					{footerMenu.map((list, idx) => {
						return <Link className={cx('link')} key={idx} to={list.location}>{list.title}</Link>
					})}
				</div>

				<Container>
					<div className={cx('menu-box', 'g-mobile-only')}>
						{footerMenu.map((list, idx) => {
							return <Link className={cx('link')} key={idx} to={list.location}>{list.title}</Link>
						})}
					</div>

					<Row className={cx('middle-box')}>
						<Col xs='12' md='11' className={cx('m-pl-pr-none')}>
							<p className={cx('extra')}>퍼플터틀주식회사  |  대표 홍길동  |  서울시 서울구 서울대로12(서울빌딩), 345호</p>
							<p className={cx('extra')}>사업자 등록번호 123-45-67890  |  통신판매업 신고 번호 제 1234-서울서울-1234 호</p>
						</Col>
					</Row>
				</Container>
				<div className={cx('copyright')}>
					<small>Copyright &#169; 2019 yourcompanyname. All rights reserved</small>
				</div>
            </footer>
		)
	}
}

export default Footer;
