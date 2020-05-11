import React from 'react';
import classNames from 'classnames/bind';
import styles from './PCListTable.scss';

const cx = classNames.bind(styles);

const PCListTable = ({ className, headList, headEachClassName, headBoxClassName, children }) => {
    return (
        <div className={cx(className)}>
            <div className={cx('head-box', headBoxClassName)}>
                {headList.map((list, idx) => {
                    return <div className={cx('head-each', headEachClassName)} key={idx}>{list.title}</div>
                })}
            </div>
            {children}
        </div>
    )
};

PCListTable.defaultProps = {
    headList: []
}

export default PCListTable;
