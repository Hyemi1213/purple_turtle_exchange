import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentMenu } from 'lib/functions';
import { throttle } from 'lodash';

import Dimmer from 'components/_common/Dimmer';
import Header from 'components/_common/Header';

class HeaderContainer extends Component {

    state = {
        isMenuOpen: false,
        isShadow: false,
        isHiddenMenuOpen: false
    }

    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps, prevState) {
        let { isHiddenMenuOpen } = this.state;
        if (prevState.isHiddenMenuOpen !== isHiddenMenuOpen) {
            if(isHiddenMenuOpen) {
                this.setState({
                    isShadow: true
                });
            }else {
                this.setState({
                    isShadow: false
                });
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    //현재 메뉴 스토어에 저장
    clickToSaveCurrentMenu = (val) => {

        saveCurrentMenu(this.props.dispatch, val.value);

        this.clickToCloseMenu();
    }

    //히든메뉴 토글 기능
    clickToToggleHiddenMenu = () => {
        this.setState(prevState => ({
            isHiddenMenuOpen: !prevState.isHiddenMenuOpen
        }))
    }

    handleScroll = throttle(() => {
        let { isHiddenMenuOpen } = this.state;

        if (window.pageYOffset == 0 && !isHiddenMenuOpen) {
            this.setState({
                isShadow: false
            });
        } else {
            this.setState({
                isShadow: true
            });
        }

    }, 500);

    clickToToggleMenu = () =>{
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    clickToCloseMenu = () => {
        this.setState({
            isMenuOpen: false
        });
    }

    //로그아웃
    clickToLogout = () => {
        this.props.dispatch({
            type: 'NO_PERMIT_AUTH'
        });
    }

    render () {

        let { isMenuOpen, isShadow, isHiddenMenuOpen } = this.state;

        let { currentMenu, defaultBase, defaultQuote, isMobile } = this.props.base;

        let { isAuthed } = this.props.user;

        let { ...rest } = this.props;

        return (
            <>
                {isHiddenMenuOpen && <Dimmer
                    onClick={this.clickToToggleHiddenMenu}
                    backgroundColour='transparent'
                />}
                <Header
                    isShadow={isShadow}
                    isMobile={isMobile}
                    isMenuOpen={isMenuOpen}
                    clickToToggleMenu={this.clickToToggleMenu}
                    clickToCloseMenu={this.clickToCloseMenu}
                    clickToLogout={this.clickToLogout}
                    clickToToggleHiddenMenu={this.clickToToggleHiddenMenu}
                    isHiddenMenuOpen={isHiddenMenuOpen}
                    clickToSaveCurrentMenu={this.clickToSaveCurrentMenu}
                    currentMenuSemiTitle={currentMenu}
                    isAuthed={isAuthed}
                    defaultBase={defaultBase}
                    defaultQuote={defaultQuote}
                    {...rest}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        base: state.base,
        user: state.user
    }
}

export default connect(mapStateToProps)(HeaderContainer);