import React from 'react';
import styles from './MovingTabs.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MovingTabs = ({ lists, currentMenu, clickedMenu, classMenuName, className, ...rest}) => {
    return (
        <div className={cx('wrapper', className)} {...rest}>
            {lists.map((list, idx) => {
                return <p
                    style={{ backgroundColor: currentMenu == list.value && list.colour}}
                    className={cx('menu', currentMenu == list.value && 'active', classMenuName)}
                    key={idx}
                    onClick={() =>  clickedMenu(list.value)}>{list.name}
                </p>
            })}
        </div>
    )
};

export default MovingTabs;

MovingTabs.defaultProps = {
    lists: []
}