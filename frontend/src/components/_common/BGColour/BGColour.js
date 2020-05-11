import React from 'react';
import styles from './BGColour.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BGColour = ({ bgColor }) => {
    return (
        <div
            className={cx('wrapper')}
            style={{backgroundColor: bgColor}}
        >
            
        </div>
    )
};

export default BGColour;