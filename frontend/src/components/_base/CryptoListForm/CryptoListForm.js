import React from 'react';
import styles from './CryptoListForm.scss';
import classNames from 'classnames/bind';

import Form from 'components/_common/Form';
import DefaultCard from 'components/_base/DefaultCard';
import { Row, Col } from 'reactstrap';
import { Star } from 'components/_common/Icons';
import { ShadowScrollBox } from 'components/_common/ScrollBox';
import DefaultTable from 'components/_base/DefaultTable';
import SelectBar from 'components/_common/SelectBar';
import SortBox from 'components/_base/SortBox';
import SearchBar from 'components/_common/SearchBar';

const cx = classNames.bind(styles);

const CryptoListForm = ({ sortLists, search, handleInput, cryptoLists, handleSelectBar, tableHeadList, clickToSort, tableBodyList, clickToSortFav, clickToSetFav, currentSelectVal, searchCrypto, moveToDetailPage, quoteCurrency, baseCurrency, isMobile }) => {
    return (
        <>
            {!isMobile && 
                <DefaultCard className={cx('market-wrapper')}>
                    {/* <img src={baseCurrency} alt={baseCurrency}/> */}
                    {/* <span>이미지</span> */}
                    <p className={cx('title')}>{baseCurrency}</p><p className={cx('semi-title')}>{`${baseCurrency}/${quoteCurrency}`}</p>
                </DefaultCard>
            }
            <DefaultCard formStyle className={cx('card-wrapper')}>
                <Form className={cx('wrapper')} onSubmit={searchCrypto}>
                    <Row>
                        <Col xs='6' className={cx('pl-pr-none')}>
                            <SelectBar
                                options={cryptoLists}
                                value={currentSelectVal}
                                onChange={handleSelectBar}
                            />
                        </Col>
                        <Col xs='6' className={cx('pr-none')}>
                            {/* 즐겨찾기 정렬 */}
                            {sortLists.map((list, idx) => {
                                return <SortBox
                                    key={idx}
                                    title={list.title}
                                    isSorted={list.isSorted}
                                    isFav={list.isFav}
                                    onClick={() => clickToSortFav(list.titleVal)}
                                />
                            })}
                        </Col>
                    </Row>

                    <SearchBar
                        placeholder='암호화폐 검색'
                        className={cx('search-bar')}
                        name='search'
                        value={search}
                        onChange={handleInput}
                        clickToSearch={searchCrypto}
                    />
                    <button style={{ display: 'none'}} onClick={searchCrypto}>클릭</button>

                    <DefaultTable
                        headList={tableHeadList}
                        headEachClassName={cx('head-each')}
                        clickToSort={clickToSort}
                    >
                        <ShadowScrollBox
                            isDeactiveScrollBar={isMobile}
                            className={cx('scroll-box')}
                            // fetchFromScroll={fetchFromScroll}
                        >
                            {tableBodyList.map((list, idx) => {
                                return <div key={idx} className={cx('body-box')}>
                                    {list.hasOwnProperty('isFav') ? <div onClick={() => clickToSetFav(list)} className={cx('body-each', 'star')}><Star bgColour={list.isFav ? '#F6C53A' : '#D9DCE1'} /></div> : null}
                                    <p onClick={() => moveToDetailPage(list)} className={cx('body-each', 'pair')}>{list.pair}</p>
                                    <p onClick={() => moveToDetailPage(list)} className={cx('body-each')}>{list.price}</p>
                                    <p onClick={() => moveToDetailPage(list)} className={cx('body-each', list.volatility > 0 ? 'plus' : 'minus')}>{list.volatility}%</p>
                                    <p onClick={() => moveToDetailPage(list)} className={cx('body-each', 'volumn')}>{list.volumn}</p>
                                </div>
                            })}
                        </ShadowScrollBox>
                    </DefaultTable>
                </Form>
            </DefaultCard>
        </>
    )
};

CryptoListForm.defaultProps = {
    sortLists: [],
    tableBodyList: [],
    currentSelectVal: []
}

export default CryptoListForm;