import React from 'react';
import styles from './AssetDetailCommonMovingTabs.scss';
import classNames from 'classnames/bind';

import { headerAssetDetailsMenu } from 'lib/variables';

import { ShadowScrollBox } from 'components/_common/ScrollBox';
import DefaultCard from 'components/_base/DefaultCard';

const cx = classNames.bind(styles);

const AssetDetailCommonMovingTabs = ({ currentMenu, clickToMoveTabs, className, children, isScrollable, scrollBoxHeight, fetchFromScroll, ...rest }) => {
    return (
        <DefaultCard className={cx('wrapper')} formStyle>
            <div className={cx('tabs-wrapper', className)} {...rest}>
                {headerAssetDetailsMenu.map((list, idx) => {
                    return <p
                        style={{ backgroundColor: currentMenu == list.value && list.colour }}
                        className={cx('menu', currentMenu == list.value ? 'active' : null)}
                        key={idx}
                        onClick={() => clickToMoveTabs(list.value)}>{list.title}
                    </p>
                })}
            </div>
            <div className={cx('content-wrapper')}>
                {isScrollable ? 
                    <ShadowScrollBox
                        className={cx('scroll-box')}
                        style={{height: `${scrollBoxHeight}rem`}}
                        scrollPadding={0}
                        fetchFromScroll={fetchFromScroll}
                    >
                        <div className={cx('inner')}>
                            {children}
                        </div>
                    </ShadowScrollBox>
                    :
                    <>{children}</>
                }
            </div>
        </DefaultCard>
    )
};

export default AssetDetailCommonMovingTabs;