import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

import HeaderContainer from 'containers/HeaderContainer';
import Footer from 'components/_common/Footer';

const cx = classNames.bind(styles);

class PageTemplate extends Component {

	state= {
		pageMarginTop: 0
	}

	componentDidMount(){
		this.getMarginTopForHeader();
	}

	//메뉴 height값이 변수라 페이지마다 이렇게 계산해서 <main></main>에 margin-top을 추가한다
	getMarginTopForHeader = () => {
		let mainHeader = document.getElementsByClassName('pure-main-header')[0];
		let appearedMenu = document.getElementsByClassName('pure-appeared-menu')[0];

		mainHeader = mainHeader !== undefined && mainHeader.clientHeight;
		appearedMenu = appearedMenu !== undefined && appearedMenu.clientHeight;

		//25는 기본값
		appearedMenu <= 8 && appearedMenu ? appearedMenu = 25 : appearedMenu;

		this.setState({
			pageMarginTop: mainHeader + appearedMenu
		});

		//CurrentMarketPairInfo.js 에서 사용
		this.props.dispatch({
			type: 'SAVE_MAIN_MARGINTOP',
			mainMarinTop: mainHeader + appearedMenu
		});
	}

	render(){
		let { pageMarginTop } = this.state;
		let { children, className, backgroundColor, isNoPaddingBottom, ...rest } = this.props;
		return(
			<div className={cx('page', className)}>
				<HeaderContainer
					{...rest}
				/>
				<main
					className={cx('main')}
					style={{ marginTop: pageMarginTop, backgroundColor: backgroundColor, paddingBottom: isNoPaddingBottom && 0}}
				>
					{children}
				</main>

				<Footer />
			</div>
		)
	}
}

export default connect()(withRouter(PageTemplate));
