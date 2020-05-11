import React from 'react';
import classNames from 'classnames/bind';
import styles from './NoticeCard.scss';

const cx = classNames.bind(styles);

const NoticeCard = ({ lists, clickToDetail }) => {
    return (
        <>
            {/* 숫자표기부분 변경해야됨 */}
            {lists.map((list, idx) => {
                return <div key={idx} className={cx('wrapper')} onClick={() => clickToDetail(list.idx)}>
                        <span className={cx('number')}>
                            {idx}
                            <span className={cx('date', 'g-mobile-only')}>{list.date}</span>
                        </span>
                        <span className={cx('title')}>{list.title}</span>
                        <span className={cx('date', 'g-pc-only')}>{list.date}</span>
                    </div>
            })}
        </>
    )
};

export default NoticeCard;

NoticeCard.defaultProps = {
    lists: []
}