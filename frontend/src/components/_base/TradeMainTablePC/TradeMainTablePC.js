import React from 'react';
import classNames from 'classnames/bind';
import styles from './TradeMainTablePC.scss';

import DefaultCard from 'components/_base/DefaultCard';

const cx = classNames.bind(styles);

const TradeMainTablePC = ({ title, clickToChangeMenu, currentMenuValue, extraMenuList, children, className }) => {

    return (
        <DefaultCard formStyle className={cx('wrapper', className)}>
            <div className={cx('title-box')}>
                <p className={cx('title')}>{title}</p>
                {extraMenuList &&
                    <div className={cx('extra-menu-box')}>
                        {extraMenuList.map((list, idx) => {
                            return <p className={cx(currentMenuValue == list.value && 'active', 'menu')} key={idx} onClick={() => clickToChangeMenu(list.value)}>{list.title}</p>
                        })}
                    </div>
                }
            </div>
            {children}
        </DefaultCard>
    )
}

TradeMainTablePC.defaultProps = {
    extraMenuList: []
}

export default TradeMainTablePC;