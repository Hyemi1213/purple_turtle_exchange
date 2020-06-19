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
        const chart = createChart(document.getElementById("chart"), {
            priceScale: {
                scaleMargins: {
                    top: 0.1,
                    bottom: 0.2,
                },
                watermark: {
                    visible: true,
                    fontSize: 24,
                    horzAlign: 'center',
                    vertAlign: 'center',
                    color: 'rgba(171, 71, 188, 0.5)',
                    text: 'Exchange',
                },
                layout: {
                    backgroundColor: '#ffffff',
                    textColor: '#333',
                },
                grid: {
                    horzLines: {
                        color: '#eee',
                    },
                    vertLines: {
                        color: '#ffffff',
                    },
                },
            },
        });

        var areaSeries = chart.addAreaSeries({
            topColor: 'rgba(171, 71, 188, 0.56)',
            bottomColor: 'rgba(171, 71, 188, 0.04)',
            lineColor: 'rgba(171, 71, 188, 1)',
            lineWidth: 2,
          });
        areaSeries.setData([
            { time: '2019-10-19', value: 75.46 },
            { time: '2019-10-22', value: 76.69 },
            { time: '2019-10-23', value: 73.82 },
            { time: '2019-10-24', value: 71.50 },
            { time: '2019-10-25', value: 72.74 },
            { time: '2019-10-26', value: 72.06 },
            { time: '2019-10-29', value: 70.56 },
            { time: '2019-10-30', value: 73.47 },
            { time: '2019-10-31', value: 72.64 },
            { time: '2019-11-01', value: 74.28 },
            { time: '2019-11-02', value: 72.86 },
            { time: '2019-11-05', value: 74.59 },
            { time: '2019-11-06', value: 75.48 },
            { time: '2019-11-07', value: 76.82 },
            { time: '2019-11-08', value: 75.57 },
            { time: '2019-11-09', value: 74.25 },
            { time: '2019-11-12', value: 74.42 },
            { time: '2019-11-13', value: 72.43 },
            { time: '2019-11-14', value: 72.51 },
            { time: '2019-11-15', value: 73.06 },
            { time: '2019-11-16', value: 73.40 },
            { time: '2019-11-19', value: 71.23 },
            { time: '2019-11-20', value: 68.18 },
            { time: '2019-11-21', value: 69.49 },
            { time: '2019-11-23', value: 67.31 },
            { time: '2019-11-26', value: 68.43 },
            { time: '2019-11-27', value: 68.09 },
            { time: '2019-11-28', value: 69.30 },
            { time: '2019-11-29', value: 69.91 },
            { time: '2019-11-30', value: 69.50 },
            { time: '2019-12-03', value: 72.42 },
            { time: '2019-12-04', value: 70.78 },
            { time: '2019-12-06', value: 69.01 },
            { time: '2019-12-07', value: 68.57 },
            { time: '2019-12-10', value: 67.67 },
            { time: '2019-12-11', value: 68.01 },
            { time: '2019-12-12', value: 68.79 },
            { time: '2019-12-13', value: 69.75 },
            { time: '2019-12-14', value: 68.20 },
            { time: '2019-12-17', value: 67.02 },
            { time: '2019-12-18', value: 64.75 },
            { time: '2019-12-19', value: 63.09 },
            { time: '2019-12-20', value: 62.19 },
            { time: '2019-12-21', value: 61.42 },
            { time: '2019-12-24', value: 60.07 },
            { time: '2019-12-26', value: 62.54 },
            { time: '2019-12-27', value: 61.67 },
            { time: '2019-12-28', value: 60.98 },
            { time: '2019-12-31', value: 61.55 },
            { time: '2020-01-02', value: 60.91 },
            { time: '2020-01-03', value: 61.15 },
            { time: '2020-01-04', value: 62.81 },
            { time: '2020-01-07', value: 62.55 },
            { time: '2020-01-08', value: 63.89 },
            { time: '2020-01-09', value: 65.45 },
            { time: '2020-01-10', value: 64.86 },
            { time: '2020-01-11', value: 63.47 },
            { time: '2020-01-14', value: 62.45 },
            { time: '2020-01-15', value: 63.45 },
            { time: '2020-01-16', value: 63.73 },
            { time: '2020-01-17', value: 63.96 },
            { time: '2020-01-18', value: 64.93 },
            { time: '2020-01-22', value: 61.83 },
            { time: '2020-01-23', value: 61.94 },
            { time: '2020-01-24', value: 63.22 },
            { time: '2020-01-25', value: 64.07 },
            { time: '2020-01-28', value: 63.20 },
            { time: '2020-01-29', value: 63.57 },
            { time: '2020-01-30', value: 64.28 },
            { time: '2020-01-31', value: 64.27 },
            { time: '2020-02-01', value: 64.63 },
            { time: '2020-02-04', value: 64.37 },
            { time: '2020-02-05', value: 64.57 },
            { time: '2020-02-06', value: 63.70 },
            { time: '2020-02-07', value: 63.41 },
            { time: '2020-02-08', value: 63.37 },
            { time: '2020-02-11', value: 62.32 },
            { time: '2020-02-12', value: 62.89 },
            { time: '2020-02-13', value: 63.72 },
            { time: '2020-02-14', value: 63.89 },
            { time: '2020-02-15', value: 64.48 },
            { time: '2020-02-19', value: 66.38 },
            { time: '2020-02-20', value: 67.38 },
            { time: '2020-02-21', value: 66.48 },
            { time: '2020-02-22', value: 67.54 },
            { time: '2020-02-25', value: 66.80 },
            { time: '2020-02-26', value: 67.26 },
            { time: '2020-02-27', value: 67.25 },
            { time: '2020-02-28', value: 65.86 },
            { time: '2020-03-01', value: 65.92 },
            { time: '2020-03-04', value: 66.04 },
            { time: '2020-03-05', value: 66.36 },
            { time: '2020-03-06', value: 65.68 },
            { time: '2020-03-07', value: 64.41 },
            { time: '2020-03-08', value: 63.72 },
            { time: '2020-03-11', value: 64.85 },
            { time: '2020-03-12', value: 64.96 },
            { time: '2020-03-13', value: 65.25 },
            { time: '2020-03-14', value: 64.90 },
            { time: '2020-03-15', value: 65.12 },
            { time: '2020-03-18', value: 66.70 },
            { time: '2020-03-19', value: 67.71 },
            { time: '2020-03-20', value: 68.60 },
            { time: '2020-03-21', value: 68.41 },
            { time: '2020-03-22', value: 66.03 },
            { time: '2020-03-25', value: 65.06 },
            { time: '2020-03-26', value: 65.31 },
            { time: '2020-03-27', value: 64.93 },
            { time: '2020-03-28', value: 65.49 },
            { time: '2020-03-29', value: 65.43 },
            { time: '2020-04-01', value: 66.66 },
            { time: '2020-04-02', value: 65.92 },
            { time: '2020-04-03', value: 65.89 },
            { time: '2020-04-04', value: 66.64 },
            { time: '2020-04-05', value: 67.28 },
            { time: '2020-04-08', value: 67.58 },
            { time: '2020-04-09', value: 67.29 },
            { time: '2020-04-10', value: 67.04 },
            { time: '2020-04-11', value: 65.80 },
            { time: '2020-04-12', value: 65.70 },
            { time: '2020-04-15', value: 64.53 },
            { time: '2020-04-16', value: 64.51 },
            { time: '2020-04-17', value: 64.01 },
            { time: '2020-04-18', value: 64.59 },
            { time: '2020-04-22', value: 65.41 },
            { time: '2020-04-23', value: 65.25 },
            { time: '2020-04-24', value: 64.45 },
            { time: '2020-04-25', value: 64.04 },
            { time: '2020-04-26', value: 63.59 },
            { time: '2020-04-29', value: 63.67 },
            { time: '2020-04-30', value: 63.29 },
            { time: '2020-05-01', value: 62.94 },
            { time: '2020-05-02', value: 61.85 },
            { time: '2020-05-03', value: 62.42 },
            { time: '2020-05-06', value: 61.93 },
            { time: '2020-05-07', value: 60.05 },
            { time: '2020-05-08', value: 60.02 },
            { time: '2020-05-09', value: 59.34 },
            { time: '2020-05-10', value: 58.94 },
            { time: '2020-05-13', value: 57.87 },
            { time: '2020-05-14', value: 59.11 },
            { time: '2020-05-15', value: 58.41 },
            { time: '2020-05-16', value: 58.90 },
            { time: '2020-05-17', value: 58.07 },
            { time: '2020-05-20', value: 58.10 },
            { time: '2020-05-21', value: 58.38 },
            { time: '2020-05-22', value: 57.85 },
            { time: '2020-05-23', value: 56.31 },
            { time: '2020-05-24', value: 57.36 },
            { time: '2020-05-28', value: 57.19 },
        ]);
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