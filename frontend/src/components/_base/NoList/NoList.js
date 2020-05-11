import React from 'react';
import classNames from 'classnames/bind';
import styles from './NoList.scss';

import noListIcon from 'static/images/no_list_icon.svg';

const cx = classNames.bind(styles);

const NoList = ({text, className, marginTop, ...rest}) => {
    return (
        <div
            style={{ marginTop: marginTop }}
            className={cx('wrapper', className)}
            {...rest}
        >
            <img src={noListIcon} alt={text}/>
            <p className={cx('text')}>{text}</p>
        </div>
    )
};

export default NoList;