import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './MyPagePage.scss';
import classNames from 'classnames/bind';
import { Route } from 'react-router-dom';
import { pcMypageSubMenu, headerMypageMenu } from 'lib/variables';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import ChangeSecurityPwFormContainer from 'containers/ChangeSecurityPwFormContainer';
import SecurityFormContainer from 'containers/SecurityFormContainer';
import ChangePwFormContainer from 'containers/ChangePwFormContainer';
import AssetHistoryContainer from 'containers/AssetHistoryContainer';
import MyPageTransactionContainer from 'containers/MyPageTransactionContainer';
import MypageOTPFormContainer from 'containers/MypageOTPFormContainer';
import DeleteAccountPageContainer from 'containers/DeleteAccountPageContainer';
import MyPageMain from 'components/_base/MyPageMain';

const cx = classNames.bind(styles);

class MyPagePage extends Component {

    render() {

        let { isMypageSubMenu } = this.props.base;

        return (
            <PageTemplate
                currentMenuTitle='mypage'
                hiddenMenuLists={headerMypageMenu}
                pcSubMenu={isMypageSubMenu && pcMypageSubMenu}
            >
                <Container>
                    <Route path='/mypage/change_securitycode' render={(props) => <ChangeSecurityPwFormContainer {...props} title='보안비밀번호변경' />} />
                    <Route path='/mypage/security' render={(props) => <SecurityFormContainer {...props} title='보안 인증' />} />
                    <Route path='/mypage/otp' render={(props) => <MypageOTPFormContainer {...props} title='OTP설정' />} />
                    <Route path='/mypage/asset_history' render={(props) => <AssetHistoryContainer isPCMypageHistory={true} {...props} title='입출금 내역' />} />
                    <Route path='/mypage/transaction_history' render={(props) => <MyPageTransactionContainer {...props} title='거래 내역' />} />
                    <Route path='/mypage/unfinished_transaction' render={(props) => <MyPageTransactionContainer {...props} title='미체결 내역' />} />
                    <Route path='/mypage/delete' render={(props) => <DeleteAccountPageContainer {...props} title='회원탈퇴 신청' />} />
                    <Route path='/mypage/change_password' render={(props) => <ChangePwFormContainer {...props} title='비밀번호변경' />} />
                    <Route exact path='/mypage' render={(props) => <MyPageMain {...props} />} />
                </Container>
            </PageTemplate>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(MyPagePage));