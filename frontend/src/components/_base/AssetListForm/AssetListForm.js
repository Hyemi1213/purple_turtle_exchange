import React from 'react';
import styles from './AssetListForm.scss';
import classNames from 'classnames/bind';

import { ShadowScrollBox } from 'components/_common/ScrollBox';
import AssetCard from 'components/_base/AssetCard';
import SortBox from 'components/_base/SortBox';
import SearchBar from 'components/_common/SearchBar';

const cx = classNames.bind(styles);

const AssetListForm = ({ koreanAssetInfo, sortLists, krwVal, assetLists, search, handleInput, handleSort, handleAssetFav, clickToDetailPage, clickToKrwPage, className, isMobile, clickToSearch }) => {
    return (
        <div className={cx('wrapper', 'g-pc-100-white-bg', className)}>
            <AssetCard
                title='원화'
                semiTitle='KRW'
                contents={koreanAssetInfo}
                className={cx('krw-asset-box')}
                clickToDetailPage={clickToKrwPage}
                isClickable
            />
            {sortLists.map((list, idx) => {
                return <SortBox
                            key={idx}
                            title={list.title}
                            isSorted={list.isSorted}
                            isFav={list.isFav}
                            onClick={() => handleSort(list)}
                        />
            })}
            <form onSubmit={clickToSearch}>
                <SearchBar
                    placeholder='암호화폐 검색'
                    className={cx('search-bar')}
                    name='search'
                    value={search}
                    onChange={handleInput}
                    clickToSearch={clickToSearch}
                />
            </form>
            
            <div className={cx('krw-value-box')}>
                <span className={cx('title')}>총 원화 가치</span>
                <span className={cx('val')}>{krwVal} <span className={cx('currency')}>KRW</span></span>
            </div>

            {isMobile ? 
                <>
                    {assetLists.map((list, idx) => {
                        return (
                            <AssetCard
                                key={idx}
                                isClickable
                                title={list.title}
                                semiTitle={list.semiTitle}
                                contents={list.assetsInfo}
                                isFavExisted={true}
                                isFav={list.isFav}
                                className={cx('asset-card')}
                                clickToSetFav={() => handleAssetFav(list.assetValue)}
                                clickToDetailPage={() => clickToDetailPage(list.assetValue)}
                            />
                        )
                    })}
                </>
                :
                <>
                    <ShadowScrollBox
                        className={cx('scroll-box')}
                        scrollPadding={1}
                    >
                        {assetLists.map((list, idx) => {
                            return (
                                <AssetCard
                                    key={idx}
                                    isClickable
                                    title={list.title}
                                    semiTitle={list.semiTitle}
                                    contents={list.assetsInfo}
                                    isFavExisted={true}
                                    isFav={list.isFav}
                                    className={cx('asset-card')}
                                    clickToSetFav={() => handleAssetFav(list.assetValue)}
                                    clickToDetailPage={() => clickToDetailPage(list.assetValue)}
                                />
                            )
                        })}
                    </ShadowScrollBox>
                </>
            }
        </div>
    )
};

export default AssetListForm;

AssetListForm.defaultProps = {
    sortLists: [],
    krwVal: 0,
    assetLists: []
}