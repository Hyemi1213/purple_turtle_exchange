import React from 'react';
import classNames from 'classnames/bind';
import styles from './Textarea.scss';

const cx = classNames.bind(styles);

const Textarea = ({ className, width, height, focused, ...rest}) => {
    return (
        <textarea
            style={{ width: width, height: height }}
            className={cx('txtarea', focused ? 'focused' : null, className)}
            {...rest}
        />
    )
}

export default Textarea