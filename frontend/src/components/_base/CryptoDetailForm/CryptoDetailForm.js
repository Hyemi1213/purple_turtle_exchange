import React from 'react';
import styles from './CryptoDetailForm.scss';
import classNames from 'classnames/bind';

import { SortArrow } from 'components/_common/Icons';
import Button from 'components/_common/Button';
import DefaultCard from 'components/_base/DefaultCard';

import chartImg from 'static/images/chart_sample.svg';
import eyeImg from 'static/images/eye_icon.svg';

const cx = classNames.bind(styles);

const CryptoDetailForm = ({ infos, clickToOpenChart, baseCurrency }) => {
    return (
        <div className={cx('wrapper')}>
            <DefaultCard className={cx('info-box')}>
                {infos.map((list, idx) => {
                    return (
                        <div key={idx} className={cx('content-box')}>
                            <div className={cx('title')}>
                                {list.title}
                                {list.percentage ? 
                                    <div className={cx('percentage', 'g-pc-only', list.percentage < 0 ? 'danger' : null)}>
                                        <span>{list.percentage > 0 ? '+' : null}{list.percentage}%</span>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <div className={cx('content', list.value == 'currentPrice' ? 'bold' : null)}>
                                {list.content} <span className={cx('g-mobile-only')}>{baseCurrency}</span>
                                {list.percentage ? 
                                    <div className={cx('percentage', 'g-mobile-only', list.percentage < 0 ? 'danger' : null)}>
                                        {list.percentage > 0 ? '+' : null}{list.percentage}%
                                        <SortArrow className={cx('sort-arrow')} clicked={list.percentage < 0}/>
                                    </div>
                                     : 
                                    null
                                }
                            </div>
                        </div>
                    )
                })}
            </DefaultCard>

            <DefaultCard className={cx('chart-box', 'g-mobile-only')}>
                <p className={cx('chart-title')}>exchange chart</p>
                <img className={cx('chart-img')} src={chartImg} alt='차트 확인'/>
                <p className={cx('instruction')}>모바일 차트를 확인하시려면 클릭해주세요.</p>
                <Button className={cx('btn')} linkStyle onClick={clickToOpenChart}><span>차트 확인</span></Button>
            </DefaultCard>

            <DefaultCard formStyle className={cx('chart-box', 'g-pc-only')}>
                <div className={cx('click-to-watch-bigger-wrapper')}>
                    <div className={cx('click-to-watch-bigger')}>
                        <img src={eyeImg} alt='크게보기' /><p onClick={clickToOpenChart}>크게보기</p>
                    </div>
                </div>
            </DefaultCard>
        </div>
    )
};

CryptoDetailForm.defaultProps = {
    infos: []
}

export default CryptoDetailForm;