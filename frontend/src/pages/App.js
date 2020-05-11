import React, { Component, lazy, Suspense } from 'react';
import { throttle } from 'lodash';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isMobile, isIE } from 'lib/functions';
import PrivateRoute from 'components/_common/PrivateRoute';
import NoAuthRoute from 'components/_common/NoAuthRoute';

import Dimmer from 'components/_common/Dimmer';
import Spinner from 'components/_common/Spinner';
import Alert from 'components/_common/Alert';

import 'styles/bootstrap.css';
import 'styles/main.scss';

import WarningOfIE from 'components/_common/WarningOfIE';
const HomePage = lazy(() => import(/* webpackChunkName: 'Homepage' */ 'pages/HomePage'));
const LoginPage = lazy(() => import(/* webpackChunkName: 'LoginPage' */ 'pages/LoginPage'));
const OTPPage = lazy(() => import(/* webpackChunkName: 'OTPPage' */ 'pages/OTPPage'));
const MyPagePage = lazy(() => import(/* webpackChunkName: 'MyPagePage' */ 'pages/MyPagePage'));
const FindPwPage = lazy(() => import(/* webpackChunkName: 'FindPwPage' */ 'pages/FindPwPage'));
const FindPwConfPage = lazy(() => import(/* webpackChunkName: 'FindPwConfPage' */ 'pages/FindPwConfPage'));
const FindPwSuccessPage = lazy(() => import(/* webpackChunkName: 'FindPwSuccessPage' */ 'pages/FindPwSuccessPage'));
const SignupPage = lazy(() => import(/* webpackChunkName: 'SignupPage' */ 'pages/SignupPage'));
const SignupConfPage = lazy(() => import(/* webpackChunkName: 'SignupConfPage' */ 'pages/SignupConfPage'));
const SignupSuccessPage = lazy(() => import(/* webpackChunkName: 'SignupSuccessPage' */ 'pages/SignupSuccessPage'));
const SupportPage = lazy(() => import(/* webpackChunkName: 'SupportPage' */ 'pages/SupportPage'));
const AssetListPage = lazy(() => import(/* webpackChunkName: 'AssetListPage' */ 'pages/AssetListPage'));
const AssetDetailPage = lazy(() => import(/* webpackChunkName: 'AssetDetailPage' */ 'pages/AssetDetailPage'));
const AssetKrwDetailPage = lazy(() => import(/* webpackChunkName: 'AssetKrwDetailPage' */ 'pages/AssetKrwDetailPage'));
const AssetKrwSuccessPage = lazy(() => import(/* webpackChunkName: 'AssetKrwSuccessPage' */ 'pages/AssetKrwSuccessPage'));
const TradeMainPage = lazy(() => import(/* webpackChunkName: 'TradeMainPage' */ 'pages/TradeMainPage'));
const TradeDetailPage = lazy(() => import(/* webpackChunkName: 'TradeDetailPage' */ 'pages/TradeDetailPage'));
const DeleteStatusPage = lazy(() => import(/* webpackChunkName: 'DeleteStatusPage' */ 'pages/DeleteStatusPage'));
const DeleteSuccessPage = lazy(() => import(/* webpackChunkName: 'DeleteSuccessPage' */ 'pages/DeleteSuccessPage'));

const NoMatchPage = lazy(() => import(/* webpackChunkName: 'NoMatchPage' */ 'pages/NoMatchPage'));

class App extends Component {

    componentDidMount() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    }

    checkMobile = throttle(() => {
        this.props.dispatch({
            type: 'SAVE_IS_MOBILE',
            isMobile: isMobile()
        })
    }, 300);

    render() {

        let { isAuthed } = this.props.user;
        let { isLoading, isMobile } = this.props.base;

        return (
            <>
                {isLoading ? <><Dimmer style={{ zIndex: '101' }} /><Spinner /></> : null}
                {isIE() && !isMobile && <WarningOfIE/>}
                <BrowserRouter>
                    <>
                        <Suspense fallback={<Spinner />}>
                            <Switch>
                                <PrivateRoute authed={isAuthed} path='/assets/krw/success' component={isMobile ? AssetKrwSuccessPage: AssetListPage} />
                                <PrivateRoute authed={isAuthed} path='/assets/krw' component={isMobile ? AssetKrwDetailPage: AssetListPage} />
                                <PrivateRoute authed={isAuthed} path='/assets/:id' component={isMobile ? AssetDetailPage: AssetListPage} />
                                <PrivateRoute authed={isAuthed} path='/assets' component={AssetListPage} />
                                <PrivateRoute authed={isAuthed} path='/mypage' component={MyPagePage} />

                                <NoAuthRoute authed={isAuthed} path='/find_password/success' component={FindPwSuccessPage} />
                                <NoAuthRoute authed={isAuthed} path='/find_password/confirm' component={FindPwConfPage} />
                                <NoAuthRoute authed={isAuthed} path='/find_password' component={FindPwPage} />
                                <NoAuthRoute authed={isAuthed} path='/otp' component={OTPPage} />
                                <NoAuthRoute authed={isAuthed} path='/signup/confirm' component={SignupConfPage} />
                                <NoAuthRoute authed={isAuthed} path='/signup/success' component={SignupSuccessPage} />
                                <NoAuthRoute authed={isAuthed} path='/signup' component={SignupPage} />
                                <NoAuthRoute authed={isAuthed} path='/login' component={LoginPage} />
                                <NoAuthRoute authed={isAuthed} path='/delete/status' component={DeleteStatusPage} />
                                <NoAuthRoute authed={isAuthed} path='/delete/success' component={DeleteSuccessPage} />

                                <Route path='/trade/:id' render={() => isMobile ? <TradeDetailPage /> : <TradeMainPage />} />
                                <Route exact path='/trade' render={() => <TradeMainPage />} />
                                <Route path='/support' render={() => <SupportPage />} />
                                <Route exact path='/' render={() => <HomePage />} />
                                <Route render={() => <NoMatchPage />} />
                            </Switch>
                        </Suspense>
                    </>
                </BrowserRouter>
                <Alert />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base,
        user: state.user
    }
};

//ie10에서 hot모듈 적용이 안되는 에러, build 에러가 있으므로 ie10을 신경써야할 때는
export default connect(mapStateToProps)(App);
//hot 모듈을 제거해준다.