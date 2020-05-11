import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { headerExMenu } from 'lib/variables';
import { saveCurrentMenu } from 'lib/functions';

import CurrentMarketPairInfoContainer from 'containers/CurrentMarketPairInfoContainer';
import CryptoDetailContainer from 'containers/CryptoDetailContainer';
import OrderFormContainer from 'containers/OrderFormContainer';
import OrderHistoryContainer from 'containers/OrderHistoryContainer';

class TradeDetailPageContainer extends Component {

    //모바일용

    componentDidMount() {

        //모바일 메뉴 이름 나타내기
        saveCurrentMenu(this.props.dispatch, headerExMenu[0].value);
    }

    render () {

        let { currentMenu } = this.props.base;

        let currentPage = '';

        if (currentMenu == 'detail') {
            currentPage = <CryptoDetailContainer />
        } else if (currentMenu == 'order') {
            currentPage = <OrderFormContainer />
        } else if (currentMenu == 'history') {
            currentPage = <OrderHistoryContainer />
        }

        return (
            <>
                <CurrentMarketPairInfoContainer/>
                <div className='g-content-padding-top'>
                    {currentPage}
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(TradeDetailPageContainer));