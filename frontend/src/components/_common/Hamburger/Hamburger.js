import React from 'react';
import styles from './Hamburger.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//형태
// <Hamburger active={이 값이 true이면 햄버거 모양 변경} onClick={클릭 이벤트를 통해 active의 t/f 를 설정할 수 있다.}/>

//햄버거 3개
// const Hamburger = ({active, onClick}) => {
// 	return(
// 		<div className={cx('hamburger-wrapper', { 'is-active' : active})} onClick={onClick}>
// 			<div className={cx('hamburger')}>
// 				<span></span>
// 				<span></span>
// 				<span></span>
// 			</div>
// 		</div>
// 	)
// }

//햄버거 2개
const Hamburger = ({ active, onClick, className, isRight }) => {
	return (
		<div className={cx('hamburger-wrapper', className, isRight ? 'right' : null, { 'is-active': active })} onClick={onClick}>
			<div className={cx('hamburger')}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}

export default Hamburger;