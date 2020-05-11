import React from 'react';
import styles from './RoadMap.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Card = ({ content, className }) => {
    return (
        <div className={cx('card', 'g-aos-ie10-animate', className)} data-aos="fade-up">
            <p className={cx('info')}>{content}</p>
        </div>
    )
}

const Roadmap = ({ cards }) => {
    return (
        <div className={cx('roadmap')}>
            <div className={cx('total-line')}></div>
            <div className={cx('roadmap-cover')}>
                {cards.map((list, idx) => {
                    return <div key={idx} className={cx('box')}><Card className={cx(list.className)} content={list.content}/></div>
                })}
            </div>
        </div>
    )
}

Roadmap.defaultProps = {
    cards: []
}

export default Roadmap