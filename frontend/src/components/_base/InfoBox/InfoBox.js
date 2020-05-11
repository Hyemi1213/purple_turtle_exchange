import React from 'react';
import classNames from 'classnames/bind';
import styles from './InfoBox.scss';

const cx = classNames.bind(styles);

const InfoBox = ({ lists, title, className, isNoMargin, isNoBg, ...rest }) => {
    return (
        <ul className={cx('wrapper', isNoBg && 'no-bg', className)} {...rest}>
            {title && <p className={cx('title')}>{title}</p>}
            {lists.map((list, idx) => {
                return <li key={idx} className={cx('content', isNoMargin && 'no-margin', list.hasOwnProperty('className')&& list.className)}>{list.content}</li>
            })}
        </ul>
    )
};

InfoBox.defaultProps = {
    lists: []
}

export default InfoBox;