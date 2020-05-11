import React, { Component } from 'react';
import { connect } from 'react-redux';
import { headerAssetDetailsMenu } from 'lib/variables';
import { saveCurrentMenu } from 'lib/functions';

import AssetDetailCommonMovingTabs from 'components/_base/AssetDetailCommonMovingTabs';
import AssetDetailCommonForm from 'components/_base/AssetDetailCommonForm';
import DepositFormContainer from 'containers/DepositFormContainer';
import WithdrawlFormContainer from 'containers/WithdrawlFormContainer';
import AssetHistoryContainer from 'containers/AssetHistoryContainer';

class AssetDetailPageContainer extends Component {

    state = {
        assetName: '',
        assetSemiName: '',
        assetSymbol: '',
        assetContents: [],
        assetExtraContents: []
    }

    componentDidMount() {

        saveCurrentMenu(this.props.dispatch, headerAssetDetailsMenu[0].value);

        this.getAssetDetail();
    }

    getAssetDetail = () => {

        // let { currentAssetSymbol } = this.props.asset;

        this.setState({
            assetName: '비트코인',
            assetSemiName: 'bitcoin',
            assetSymbol: 'btc',
            assetContents: [{
                title: '출금가능',
                content: 123456789456154,
                semiContent: 'btc'
            }, {
                title: '원화가치',
                content: 354351654254145,
                semiContent: 'krw'
            }],
            assetExtraContents: [{
                title: '사용 중',
                content: 6546516854321,
                semiContent: 'btc'
            }, {
                title: '총보유',
                content: 6513211441,
                semiContent: 'btc'
            }]
        })
    }

    clickToMoveTabs = (val) => {
        saveCurrentMenu(this.props.dispatch, val);
    }

    render () {

        let { assetName, assetSemiName, assetContents, assetExtraContents } = this.state;

        let { currentMenu, isMobile } = this.props.base;

        let currentPage = '';

        if(currentMenu == 'deposit') {
            currentPage = <DepositFormContainer />
        }else if(currentMenu == 'withdrawl') {
            currentPage = <WithdrawlFormContainer />
        }else if(currentMenu == 'history') {
            currentPage = <AssetHistoryContainer/>
        }

        return (
            <div className={('g-content-padding-top', 'g-pc-100-white-bg')}>
                <AssetDetailCommonForm
                    assetName={assetName}
                    assetSemiName={assetSemiName}
                    assetContents={assetContents}
                    assetExtraContents={assetExtraContents}
                />
                {isMobile ? 
                    currentPage
                :
                    <AssetDetailCommonMovingTabs
                        clickToMoveTabs={this.clickToMoveTabs}
                        currentMenu={currentMenu}
                        isScrollable={currentMenu == 'history' ? false : true}
                        scrollBoxHeight={60}
                    >
                        {currentPage}
                    </AssetDetailCommonMovingTabs>
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base,
        asset: state.asset
    }
}

export default connect(mapStateToProps)(AssetDetailPageContainer);