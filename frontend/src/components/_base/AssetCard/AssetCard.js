import React from 'react';
import styles from './AssetCard.scss';
import classNames from 'classnames/bind';
import { commasEveryThousand } from 'lib/functions';

import { Row, Col } from 'reactstrap';
import DefaultCard from 'components/_base/DefaultCard';
import { Star } from 'components/_common/Icons';

import logoImg from 'static/images/logo.svg';

const cx = classNames.bind(styles);

const AssetCard = ({ className, title, semiTitle, isFavExisted, isFav, isDot, contents, clickToSetFav, clickToDetailPage, isUnderline, isClickable, ...rest }) => {
    return (
        <DefaultCard className={cx('wrapper', isClickable && 'clickable', className)} {...rest}>
            {title ? 
                <Row className={cx('main-info-box')}>
                    <Col onClick={clickToDetailPage} className={cx('pl-pr-none', 'main-info')}>
                        <img className={cx('symbol-img')} src={logoImg} alt={title}/>
                        <p className={cx('title')}>{title}</p><span className={cx('semi-title')}>{semiTitle}</span>
                    </Col>
                    {isFavExisted ?
                        <Col xs='2' className={cx('pr-none')} style={{ textAlign: 'right'}}>
                            <Star onClick={clickToSetFav} bgColour={isFav ? '#F6C53A' : '#D9DCE1'} />
                        </Col>
                        :
                        null
                    }
                </Row>
                :
                null
            }
            {contents.map((list, idx) => {
                return <Row onClick={clickToDetailPage} key={idx} className={cx('content-box', isUnderline ? 'line' : null)}>
                            <Col xs='4' className={cx('pl-pr-none')}><p className={cx('title')}>{isDot ? <span className={cx('dot-icon')}></span> : null}{list.title}</p></Col>
                            <Col xs='8' className={cx('pr-none')}><p className={cx('content')}>{commasEveryThousand(list.content)}<span className={cx('semi-content')}>{list.semiContent}</span></p></Col>
                        </Row>
            })}
        </DefaultCard>
    )
};

export default AssetCard;

AssetCard.defaultProps = {
    contents: []
}