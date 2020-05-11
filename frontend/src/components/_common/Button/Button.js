import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//형태
//1. <Button>버튼이름</Button>
//2. <Button disabled>버튼이름</Button>

const Button = ({ children, className, style, disabled, noPadding, onClick, reverse, warning, hasLink, greyStyle, linkStyle, linkStyleDark, pcMypage, ...rest}) => {
	return (
		<div
			className={cx('button', disabled && 'disabled', noPadding && 'no-padding', reverse && 'reverse', warning && 'warning', hasLink && 'hasLink', greyStyle && 'greystyle', linkStyle && 'linkStyle', linkStyleDark && 'linkStyleDark', pcMypage && 'pcMypage', className)}
			style={{ ...style }}
			onClick={onClick}
			type='button'
			{...rest}
		>
			{children} 
		</div>
	);
};

export default Button;