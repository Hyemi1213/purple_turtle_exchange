import React from 'react';
import classNames from 'classnames/bind';
import styles from './SortBox.scss';

import { Star, SortArrow } from 'components/_common/Icons';

const cx = classNames.bind(styles);

const SortBox = ({ title, isSorted, isFav, ...rest }) => {
    return (
        <div className={cx('wrapper')} {...rest}>
            {isFav ? <Star bgColour={isSorted ? '#F6C53A' : '#D9DCE1'} className={cx('star')}/> : null}
            <p className={cx('title')}>{title}</p>
            {isFav ? null : <SortArrow className={cx('sort-icon', isSorted ? 'clicked' : null)} clicked={isSorted} />}
        </div>
    )
};

export default SortBox;