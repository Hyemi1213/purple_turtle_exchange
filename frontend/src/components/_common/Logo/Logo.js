import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Logo.scss';

const cx = classNames.bind(styles);

//형태
// <Logo logo={로고 이미지} />
// 아니면 여기 자체에서 박아줄 수 있다.
const Logo = ({ className, logo, ...rest }) => {
	return(
		<Link to="/" className={cx('logo', className)} {...rest}>
			<img src={logo} alt="logo"/>
		</Link>
	);
};

export default Logo;
