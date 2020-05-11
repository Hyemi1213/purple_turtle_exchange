import React from 'react';
import classNames from 'classnames/bind';
import styles from './CheckBox.scss';

import Input from 'components/_common/Input';
import { Label } from 'reactstrap';

const cx = classNames.bind(styles);

const CheckBox = ({ label, isRequired, className, invalid, feedback, labelClassName, entireClassName, ...rest}) => {
	return(
        <div className={entireClassName}>
            <label className={cx('wrapper', className)} style={{ height: 25 }}>
                <Input
                    type="checkbox"
                    invalid={invalid}
                    {...rest}
                />
                <span className={cx('checkmark', invalid ? 'invalid' : null)}><span className={cx('check-icon')}></span></span>
                <span className={labelClassName}>{label}</span>{isRequired ? <span className={cx('focus')}>(필수)</span> : null}
                {feedback}
            </label>
        </div>
	);
};

export default CheckBox;
