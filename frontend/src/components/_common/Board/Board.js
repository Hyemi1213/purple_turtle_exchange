import React from 'react';
import { Table as BTable } from 'reactstrap';
import classNames from 'classnames/bind';
import styles from './Board.scss';

const cx = classNames.bind(styles);

const Board = ({ children, pagingSection}) => {
    return (
        <>
            <BTable className={cx('table')}>
                {children}
            </BTable>
            {pagingSection}
        </>
    )
}

export default Board;