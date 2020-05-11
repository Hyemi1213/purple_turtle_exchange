import React from 'react'
import classNames from 'classnames/bind';
import styles from './SimpleInfoBox.scss';

const cx = classNames.bind(styles);

const SimpleInfoBox = ({ className, lists, listClassName}) => {
    return (
        <ul className={cx('info-box', className)}>
            {lists.map((list, idx) => {
                return <li className={cx(listClassName)} key={idx}>{list}</li>
            })}
        </ul>
    )
}

SimpleInfoBox.defaultProps = {
    lists: []
}

export default SimpleInfoBox