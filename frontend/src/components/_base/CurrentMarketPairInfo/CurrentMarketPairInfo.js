import React from 'react';
import styles from './CurrentMarketPairInfo.scss';
import classNames from 'classnames/bind';

import { Container } from 'reactstrap';
import { Arrow, SortArrow } from 'components/_common/Icons';

import CryptoListContainer from 'containers/CryptoListContainer';

const cx = classNames.bind(styles);

const CurrentMarketPairInfo = ({ infos, isOpen, clickToToggleLists, mainMarinTop }) => {
    return (
        <div
            className={cx('total-wrapper', isOpen && 'open')}
            style={{ top: mainMarinTop }}
        >
            <div className={cx('menu-wrapper')} onClick={clickToToggleLists}>
                <Container>
                    <div className={cx('wrapper')}>
                        <img src={infos.cryptoImg} alt={infos.baseCurrency} /><p className={cx('pair')}><span className={cx('base-currency')}>{infos.baseCurrency}</span> / {infos.quoteCurrency}</p><p className={cx('price')}>{infos.price}</p><div className={cx('percentage', infos.percentage < 0 ? 'danger' : null)}>{`${infos.percentage > 0 ? '+' : ''}${infos.percentage}%`}<SortArrow clicked={infos.percentage < 0} className={cx('sort-arrow')} /></div>
                        <Arrow bottom className={cx('arrow')} />
                    </div>
                </Container>
            </div>

            
        </div>
    )
};

CurrentMarketPairInfo.defaultProps = {
    infos: {}
}

export default CurrentMarketPairInfo;