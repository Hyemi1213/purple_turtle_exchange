import React, { Component } from 'react';
import { connect } from 'react-redux';

import AssetKrwSuccessForm from 'components/_base/AssetKrwSuccessForm';

class AssetKrwSuccessPageContainer extends Component {

    state = {
        userInfo: {},
        adminInfo: {
            fee: 0
        },
        amount: 0
    }

    componentDidMount() {
        let { currentStauts } = this.props.asset;
        if (currentStauts == 'withdrawl') {
            //출금
            this.setState({
                userInfo: {
                    userBank: '하나은행',
                    userAccount: '123-123456-12345',
                    userName: '홍길동'
                },
                adminInfo: {
                    fee: 1000
                },
                amount: 10000
            });
        }else {
            //입금
            this.setState({
                userInfo: {
                    userBank: '하나은행',
                    userAccount: '123-123456-12345',
                    userName: '홍길동'
                },
                adminInfo: {
                    adminBank: '신한은행',
                    adminName: 'PT3',
                    adminAccount: '7789-456123-789',
                    msg: '귀여운수달12'
                },
                amount: 1000
            });
        }
    }

    render () {

        let { userInfo, adminInfo } = this.state;

        let { currentStauts } = this.props.asset;

        return (
            <AssetKrwSuccessForm
                isWithdrawl={currentStauts == 'withdrawl'}
                userInfo={userInfo}
                adminInfo={adminInfo}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        asset: state.asset
    }
}

export default connect(mapStateToProps)(AssetKrwSuccessPageContainer);