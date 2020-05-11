import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CurrentMarketPairInfo from 'components/_base/CurrentMarketPairInfo';

class CurrentMarketPairInfoContainer extends Component {

    //모바일용

    state = {
        isOpen: false,
        cryptoImg: '',
        percentage: '',
        price: '',
        infos: {}
    }

    componentDidMount() {
        this.getInfos();
    }

    componentDidUpdate(prevProps) {
        let { baseCurrency, quoteCurrency } = this.props.base;

        if (prevProps.base.baseCurrency !== baseCurrency || prevProps.base.quoteCurrency !== quoteCurrency) {
            this.getInfos();
        }
    }

    //마켓페어 간단정보 가져오기
    getInfos = () => {

        if (this.props.match.params.hasOwnProperty('id')) {

            let pathname = this.props.match.params.id.split('_');
            let baseCurrency = pathname[0];
            let quoteCurrency = pathname[1];

            this.props.dispatch({
                type: 'SAVE_CURRENCY',
                baseCurrency: baseCurrency,
                quoteCurrency: quoteCurrency
            })

            this.setState({
                infos: {
                    cryptoImg: '',
                    baseCurrency: baseCurrency,
                    quoteCurrency: quoteCurrency,
                    price: 0.0034567,
                    percentage: 0.13
                }
            })
        }
    }

    //암호화폐 리스트 열고닫기
    clickToToggleLists = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render () {

        let { isOpen, infos } = this.state;

        let { mainMarinTop } = this.props.base;

        return (
            <CurrentMarketPairInfo
                isOpen={isOpen}
                infos={infos}
                clickToToggleLists={this.clickToToggleLists}
                mainMarinTop={mainMarinTop}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(CurrentMarketPairInfoContainer));