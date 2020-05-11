import React from 'react';
import styles from './AssetHistoryForm.scss';
import classNames from 'classnames/bind';

import Pagination from 'components/_common/Pagination';
import MovingTabs from 'components/_common/MovingTabs';
import { ShadowScrollBox } from 'components/_common/ScrollBox';
import AssetHistoryCard from 'components/_base/AssetHistoryCard';
import NoList from 'components/_base/NoList';

const cx = classNames.bind(styles);

const AssetHistoryForm = ({ transacMenu, currentMenu, clickedMenu, historyLists, pureHistoryListsPc, noPagination, totalRecords, isMobile, noPadding, scrollBoxHeight, fetchFromScroll, ...rest }) => {
    return (
        <div className={cx('wrapper', noPadding && 'no-padding')}>
            <MovingTabs
                lists={transacMenu}
                currentMenu={currentMenu}
                clickedMenu={clickedMenu}
                className={cx('moving-tabs')}
            />
            {isMobile ?
                <>
                    {historyLists.length > 0 ? 
                        <>
                            <AssetHistoryCard
                                historyLists={historyLists}
                                className={cx('card')}
                            />
                            {noPagination ? null :
                                <Pagination
                                    totalRecords={totalRecords}
                                    {...rest}
                                />
                            }
                        </>
                    :    
                        <NoList
                            marginTop={62}
                            text='거래 내역이 없습니다.'
                        />
                    }
                </>
            :
                <>
                    {pureHistoryListsPc.length > 0 ?
                        <ShadowScrollBox
                            className={cx('scroll-box')}
                            style={{ height: `${scrollBoxHeight}rem` }}
                            scrollPadding={1}
                            fetchFromScroll={fetchFromScroll}
                        >
                            <AssetHistoryCard
                                historyLists={pureHistoryListsPc}
                                className={cx('card')}
                            />
                        </ShadowScrollBox>
                    :
                        <NoList
                            marginTop={62}
                            text='거래 내역이 없습니다.'
                        />
                    }
                </>
            }
        </div>
    )
};

export default AssetHistoryForm;