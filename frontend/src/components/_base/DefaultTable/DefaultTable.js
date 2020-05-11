import React from 'react';
import styles from './DefaultTable.scss';
import classNames from 'classnames/bind';

import { SortArrow } from 'components/_common/Icons';

const cx = classNames.bind(styles);

const DefaultTable = ({ headList, children, clickToSort, headEachClassName, headBoxClassName, className, ...rest}) => {
    return (
        <div className={cx(className)} {...rest}>
            <div className={cx('head-box', headBoxClassName)}>
                {headList.map((list, idx) => {
                    return <div className={cx('head-each', headEachClassName)} key={idx} onClick={clickToSort ? () => clickToSort(list) : null}>{list.title}{clickToSort ? <SortArrow className={cx('sort-icon')} clicked={list.isSorted} /> : null}</div>
                })}
            </div>
            {children}
        </div>
    )
};

DefaultTable.defaultProps = {
    headList: []
}

export default DefaultTable;