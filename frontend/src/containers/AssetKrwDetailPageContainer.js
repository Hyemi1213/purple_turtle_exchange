import React, { Component } from 'react';
import { connect } from 'react-redux';
import { headerAssetDetailsMenu } from 'lib/variables';
import { saveCurrentMenu } from 'lib/functions';

import AssetDetailCommonMovingTabs from 'components/_base/AssetDetailCommonMovingTabs';
import AssetKrwDetailCommonForm from 'components/_base/AssetKrwDetailCommonForm';
import KrwDepositFormContainer from 'containers/KrwDepositFormContainer';
import KrwWithdrawlFormContainer from 'containers/KrwWithdrawlFormContainer';
import KrwAssetHistoryContainer from 'containers/KrwAssetHistoryContainer';

class AssetKrwDetailPageContainer extends Component {

    state = {
        bankName: '신한은행',
        accountNumber: '52423-351321-12',
        assetExtraContents: [{
            title: '총보유',
            content: 6546516854321,
            semiContent: 'btc'
        }, {
            title: '출금가능',
            content: 6513211441,
            semiContent: 'btc'
        }, {
            title: '사용중',
            content: 215421,
            semiContent: 'krw'
        }],
        isBankExist: true
    }

    componentDidMount() {
        saveCurrentMenu(this.props.dispatch, headerAssetDetailsMenu[0].value);
    }

    clickToMoveTabs = (val) => {
        saveCurrentMenu(this.props.dispatch, val);
    }

    render () {

        let { assetExtraContents, bankName, accountNumber, isBankExist } = this.state;

        let { currentMenu, isMobile } = this.props.base;

        let currentPage = '';

        if (currentMenu == 'deposit') {
            currentPage = <KrwDepositFormContainer isBankExist={isBankExist} />
        } else if (currentMenu == 'withdrawl') {
            currentPage = <KrwWithdrawlFormContainer/>
        } else if (currentMenu == 'history') {
            currentPage = <KrwAssetHistoryContainer />
        }

        return (
            <div className={('g-content-padding-top', 'g-pc-100-white-bg')}>
                <AssetKrwDetailCommonForm
                    isBankExist={isBankExist}
                    assetExtraContents={assetExtraContents}
                    bankName={bankName}
                    accountNumber={accountNumber}
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
        base: state.base
    }
}

export default connect(mapStateToProps)(AssetKrwDetailPageContainer);