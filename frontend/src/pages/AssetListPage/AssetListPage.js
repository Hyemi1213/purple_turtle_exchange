import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './AssetListPage.scss';
import classNames from 'classnames/bind';

import { headerAssetListMenu } from 'lib/variables';

import { Container, Row, Col } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import AssetListPageContainer from 'containers/AssetListPageContainer';
import AssetDetailPageContainer from 'containers/AssetDetailPageContainer';
import AssetKrwDetailPageContainer from 'containers/AssetKrwDetailPageContainer';
import BGColour from 'components/_common/BGColour';

const cx = classNames.bind(styles);

class AssetListPage extends Component{
    render(){

        let { pathname } = this.props.location;

        let { isMobile } = this.props.base;

        return (
            <PageTemplate
                currentMenuTitle='asset'
                menuLists={headerAssetListMenu}
                isNoPaddingBottom={!isMobile}
            >
                <Container>
                    {isMobile ?
                        <AssetListPageContainer title='currency' />
                        :
                        <>
                            <BGColour/>
                            <div className={cx('pc-wrapper')}>
                                <Row>
                                    <Col md={{ size: 6 }} lg={{ size: 4, offset: 2 }} className={cx('pl-none')}>
                                        <AssetListPageContainer title='currency' />
                                    </Col>
                                    <Col md={{ size: 6 }} lg={{ size: 4 }} className={cx('pr-none')}>
                                        {pathname.indexOf('krw') == -1 ? <AssetDetailPageContainer /> : <AssetKrwDetailPageContainer />}
                                    </Col>
                                </Row>
                            </div>
                        </>
                    }
                </Container>
            </PageTemplate>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(AssetListPage));