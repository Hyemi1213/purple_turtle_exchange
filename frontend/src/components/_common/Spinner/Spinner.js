import React from 'react';
import styles from './Spinner.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Spinner = ({ size, colour, borderSize, className, ...rest}) => {
  return (
	 	<div
			className={cx('lds-dual-ring', className)}
		  	style={{ width: size, height: size, '--pseudo-colour': colour, '--pseudo-border-size': `${borderSize}px`}}
			{...rest}
		>
		</div>
  );
};

Spinner.defaultProps = {
	size: 200,
	colour: '#C569FE',
	borderSize: 5
}

export default Spinner;
