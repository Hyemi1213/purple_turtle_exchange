import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './TradeMainPage.scss';
import classNames from 'classnames/bind';

import { Container, Row, Col } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import CryptoListContainer from 'containers/CryptoListContainer';
import CryptoDetailContainer from 'containers/CryptoDetailContainer';
import OrderFormContainer from 'containers/OrderFormContainer';
import TraideMainCurrentDealsContainer from 'containers/TraideMainCurrentDealsContainer';
import TradeMainMyTradeContainer from 'containers/TradeMainMyTradeContainer';
import MainBG from 'components/_base/MainBG';

const cx = classNames.bind(styles);

class TradeMainPage extends Component {
                                
    componentDidMount() {

        if (this.props.match.params.hasOwnProperty('id')) {

            let pathname = this.props.match.params.id.split('_');
            let baseCurrency = pathname[0];
            let quoteCurrency = pathname[1];

            this.props.dispatch({
                type: 'SAVE_CURRENCY',
                baseCurrency: baseCurrency,
                quoteCurrency: quoteCurrency
            })

        } else {
            
            //default값
            let { defaultBase, defaultQuote, isMobile } = this.props.base;

            this.props.dispatch({
                type: 'SAVE_CURRENCY',
                baseCurrency: defaultBase,
                quoteCurrency: defaultQuote
            })

            if (!isMobile) {
                this.props.history.push(`/trade/${defaultBase}_${defaultQuote}`);
            }
        }
    }

    componentDidUpdate(prevProps) {
        let { defaultBase, defaultQuote, isMobile } = this.props.base;
        let pathname = this.props.location.pathname;

        if(!isMobile && pathname == '/trade') {

            this.props.dispatch({
                type: 'SAVE_CURRENCY',
                baseCurrency: defaultBase,
                quoteCurrency: defaultQuote
            })

            this.props.history.push(`/trade/${defaultBase}_${defaultQuote}`);
        }
        
    }

    render() {

        let { isMobile } = this.props.base;

        return (
            <PageTemplate
                currentMenuTitle='exchange'
                className={cx('wrapper')}
            >
                {isMobile ?
                    <Container>
                        <h2 className={cx('title')}>실시간 거래소</h2>
                        <CryptoListContainer />
                    </Container>
                    :
                    <>
                        <MainBG
                            height={13}
                        />
                        <Container className={cx('pc-wrapper')}>
                            <Row>
                                <Col md='3' className={cx('pl-pr-none')}>
                                    <CryptoListContainer/>
                                    {/* 시장체결 */}
                                    <TraideMainCurrentDealsContainer/>
                                </Col>
                                <Col md='6'>
                                    <CryptoDetailContainer/>
                                    {/* 나의거래 */}
                                    <TradeMainMyTradeContainer/>
                                </Col>
                                <Col md='3' className={cx('pl-pr-none')}>
                                    <OrderFormContainer/>
                                </Col>
                            </Row>
                        </Container>
                    </>
                }
            </PageTemplate>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(TradeMainPage));