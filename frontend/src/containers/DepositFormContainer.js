import React, { Component } from 'react';
import { connect } from 'react-redux';

import DepositForm from 'components/_base/DepositForm';
import MainBG from 'components/_base/MainBG';

import qrCodeImg from 'static/images/qrcode_sample.png';

class DepositFormContainer extends Component {

    state = {
        code: 'asdf',
        isLoading: false,
        hasWallet: false,
        minimum: 0
    }

    componentDidMount() {
        this.setState({
            minimum: 0.001
        })
    }

    //지갑 생성하기
    clickToCreateWallet = () => {

        //생성 중에 로딩바 나타내고
        // this.setState({
        //     isLoading: true
        // })

        //지갑 생성이 된 뷰로 바꾸기
        this.setState({
            hasWallet: true
        });
    }

    // 복사된 후 callback
    afterCopy = (txt, result) => {
        if (result) {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '복사되었습니다.'
            });
        } else {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '복사에 실패하였습니다.'
            });
        }
    }

    render () {

        let { code, hasWallet, isLoading, minimum } = this.state;

        let { currentAssetName, currentAssetSymbol } = this.props.asset;

        let infoLists = [{
            content: `최소 입금 수량 ${minimum}${currentAssetSymbol}`
        }, {
            content: `${minimum}${currentAssetSymbol}미만 입금 시 잔고 반영이 불가능합니다.`
        }]

        return (
            <>
                <MainBG
                    isMobileOnly
                    height={23.5}
                />
                <DepositForm
                    qrCodeImg={qrCodeImg}
                    afterCopy={this.afterCopy}
                    code={code}
                    currentAssetName={currentAssetName}
                    clickToCreateWallet={this.clickToCreateWallet}
                    hasWallet={hasWallet}
                    isLoading={isLoading}
                    infoLists={infoLists}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        asset: state.asset
    }
}

export default connect(mapStateToProps)(DepositFormContainer);