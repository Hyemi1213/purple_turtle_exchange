import React from 'react';
import classNames from 'classnames/bind';
import styles from './Icons.scss';

const cx = classNames.bind(styles);

const Arrow = ({ top, left, right, bottom, className, ...rest }) => {
	return(
		<div
			className={cx('arrow', top ? 'top' : null, left ? 'left' : null, right ? 'right' : null, bottom ? 'bottom' : null, className)}
			{...rest}	
		>
		</div>
	);
};

const XMark = ({ className, ...rest }) => {
	return (
		<div className={cx('x-mark', className)} {...rest}></div>
	)
};

const Check = ({ className, ...rest }) => {
	return (
		<div className={cx('check', className)} {...rest}>&#10004;</div>
	)
}

const Star = ({ className, bgColour, ...rest }) => {
	return (
		<div className={cx(className)} {...rest}>
			<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.05778 0.838168C8.24538 0.482595 8.75462 0.482596 8.94222 0.838169L10.9833 4.7067C11.0556 4.84382 11.1875 4.93963 11.3403 4.96606L15.6502 5.71178C16.0463 5.78033 16.2037 6.26465 15.9235 6.55294L12.875 9.68955C12.767 9.80073 12.7166 9.95575 12.7387 10.1092L13.3613 14.4386C13.4185 14.8366 13.0065 15.1359 12.6457 14.9585L8.72062 13.0285C8.5815 12.9601 8.4185 12.9601 8.27938 13.0285L4.35425 14.9585C3.99348 15.1359 3.5815 14.8366 3.63872 14.4386L4.26133 10.1092C4.2834 9.95575 4.23304 9.80073 4.12498 9.68955L1.07651 6.55294C0.796313 6.26464 0.953678 5.78033 1.34982 5.71178L5.65974 4.96606C5.8125 4.93963 5.94437 4.84382 6.01671 4.7067L8.05778 0.838168Z" fill={bgColour} />
			</svg>
		</div>
	)
}

Star.defaultProps = {
	bgColour: '#D9DCE1'
}

const SortArrow = ({ className, clicked, ...rest }) => {
	return (
		<div className={cx('sort-arrow', clicked ? 'clicked' : null, className )} {...rest}>
			<svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.88675 0L5.7735 5H0L2.88675 0Z" fill="#7C7F88" />
			</svg>
		</div>
	)
}

const Search = ({ className, ...rest }) => {
	return (
		<div className={cx('search', className)} {...rest}>
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.64286 8.48571H9.02571L8.79429 8.25429C9.56571 7.40571 10.0286 6.24857 10.0286 5.01429C10.0286 2.23714 7.79143 0 5.01429 0C2.23714 0 0 2.23714 0 5.01429C0 7.79143 2.23714 10.0286 5.01429 10.0286C6.24857 10.0286 7.40571 9.56571 8.25429 8.79429L8.48571 9.02571V9.64286L12.3429 13.5L13.5 12.3429L9.64286 8.48571ZM5.01429 8.48571C3.08571 8.48571 1.54286 6.94286 1.54286 5.01429C1.54286 3.08571 3.08571 1.54286 5.01429 1.54286C6.94286 1.54286 8.48571 3.08571 8.48571 5.01429C8.48571 6.94286 6.94286 8.48571 5.01429 8.48571Z" fill="#7C7F88" />
			</svg>
		</div>
	)
}

export { Arrow, XMark, Check, Star, SortArrow, Search };
