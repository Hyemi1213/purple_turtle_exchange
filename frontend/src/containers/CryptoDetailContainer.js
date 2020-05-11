import React, { Component } from 'react';
import { connect } from 'react-redux';

import CryptoDetailForm from 'components/_base/CryptoDetailForm';
import MainBG from 'components/_base/MainBG';

class CryptoDetailContainer extends Component {

    state = {
        infos: []
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        let { baseCurrency, quoteCurrency } = this.props.base;

        if (prevProps.base.baseCurrency !== baseCurrency || prevProps.base.quoteCurrency !== quoteCurrency ) {
            this.getData();
        }
        
    }

    //정보 서버에 요청하기
    getData = () => {
        this.setState({
            infos: [{
                title: '현재가',
                content: 0.00345678,
                percentage: 0.13
            }, {
                title: '전일대비',
                content: 0.00123456,
                percentage: -0.12
            }, {
                title: '총 거래량',
                content: 1165.95
            }, {
                title: '24h 최고가',
                content: 0.000035556
            }, {
                title: '24h 최저가',
                content: 0.000021531
            }]
        })
    }

    clickToOpenChart = () => {
    }

    render () {

        let { infos } = this.state;
        let { baseCurrency } = this.props.base;

        return (
            <>
                <MainBG
                    isMobileOnly
                    height={20.5}
                />
                <CryptoDetailForm
                    infos={infos}
                    baseCurrency={baseCurrency}
                    clickToOpenChart={this.clickToOpenChart}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(CryptoDetailContainer);