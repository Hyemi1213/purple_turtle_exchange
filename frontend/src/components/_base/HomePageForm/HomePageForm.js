import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePageForm.scss';
import classNames from 'classnames/bind';

import MovingTabs from 'components/_common/MovingTabs';
import DefaultTable from 'components/_base/DefaultTable';

const cx = classNames.bind(styles);

const HomePageForm = ({ quoteCurrencyLists, currentTabMenu, clickedMenu, tableHeadList, tableBodyList, clickToSort, moveToDetailPage, quoteCurrency, hasMore, clickToGetMoreLists, isMobile }) => {
    return (
        <div className={cx('wrapper')}>
            <MovingTabs
                className={cx('tabs')}
                classMenuName={cx('tab-menu')}
                lists={quoteCurrencyLists}
                currentMenu={currentTabMenu}
                clickedMenu={clickedMenu}
            />

            <DefaultTable
                className={cx('table')}
                headList={isMobile ? tableHeadList.slice(0, 4) :  tableHeadList}
                headBoxClassName={cx('head-box')}
                headEachClassName={cx('head-each')}
                clickToSort={clickToSort}
            >
                <div className={cx('table-body')}>
                    {tableBodyList.map((list, idx) => {
                        return <div className={cx('body-box-wrapper')} key={idx}><div className={cx('body-box')}>
                            <p onClick={() => moveToDetailPage(list)} className={cx('body-each', 'pair')}>{list.pair}/{quoteCurrency}</p>
                            <p onClick={() => moveToDetailPage(list)} className={cx('body-each')}>
                                {list.price}
                                {/* <span className={cx('extra')}>{list.priceToKorean} KRW</span> */}
                            </p>
                            <p onClick={() => moveToDetailPage(list)} className={cx('body-each', list.volatility > 0 ? 'plus' : 'minus')}>{list.volatility > 0 && '+'}{list.volatility}%</p>
                            <p onClick={() => moveToDetailPage(list)} className={cx('body-each', 'volumn')}>
                                {list.volumn}
                                {/* <span className={cx('extra')}>{list.volumnToKorean} KRW</span> */}
                            </p>
                            <p onClick={() => moveToDetailPage(list)} className={cx('body-each', 'g-pc-only')}>{list.highest}</p>
                            <p onClick={() => moveToDetailPage(list)} className={cx('body-each', 'g-pc-only')}>{list.lowest}</p>
                        </div></div>
                    })}
                </div>
            </DefaultTable>

            {hasMore && <div className={cx('more-btn-box')}>
                <Link style={{display: 'block'}} to='/trade'>
                    <div onClick={clickToGetMoreLists} className={cx('btn')}>
                        더보기 +
                    </div>
                </Link>
            </div>}
        </div>
    )
};

HomePageForm.defaultProps = {
    quoteCurrencyLists: [],
    tableBodyList: []
}

export default HomePageForm;