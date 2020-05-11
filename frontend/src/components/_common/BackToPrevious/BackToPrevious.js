import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from './back_arrow.svg';

//형태
// <BackToPrevious to={url 넣기} />

// Arrow는 default입니다.

const BackToPrevious = ({to, className}) => {
	return(
		<Link to={to} className={className}>
			<img src={ArrowIcon} alt="뒤로가기"/>
		</Link>
	);
};

BackToPrevious.defaultProps = {
	to: "/"
}

export default BackToPrevious;