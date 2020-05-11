import React from 'react';
import { withRouter } from 'react-router-dom';
import { menuMobile, menuWithoutLogin, menuPC } from 'lib/variables';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'

import { Arrow } from 'components/_common/Icons';
import BackToPrevious from 'components/_common/backToPrevious';
import Dimmer from 'components/_common/Dimmer';
import Sidebar from 'components/_common/Sidebar';
import Hamburger from 'components/_common/Hamburger';

import homeIcon from 'static/images/home_icon.svg';
import logoIcon from 'static/images/logo.svg';

const cx = classNames.bind(styles);

const Header = ({ isMenuOpen, clickToToggleMenu, clickToLogout, clickToCloseMenu, isShadow, to, currentMenuTitle, menuLists, hiddenMenuLists, isHiddenMenuOpen, clickToToggleHiddenMenu, clickToSaveCurrentMenu, currentMenuSemiTitle, hiddenMenuHeight, noLeftIcon, isAuthed, defaultBase, defaultQuote, pcSubMenu, isMobile }) => {
	return (
		<header className={cx('header-wrapper', isShadow && isMobile ? 'shadow': null)}>

			{/* 모바일 사이드바 */}
			<Sidebar className={cx('sidebar', isMenuOpen ? 'open' : null)}>
				{isAuthed ? menuMobile.map((list, idx) => {
					return <p onClick={list.value == 'logout' ? clickToLogout : () => clickToSaveCurrentMenu(list)} key={idx} className={cx('menu-list')}><NavLink to={list.location ? list.location : '/'}><img src={list.icon} alt={list.title} />{list.title}</NavLink></p>
				}) : menuWithoutLogin.map((list, idx) => {
					return <p onClick={list.value == 'logout' ? clickToLogout : () => clickToSaveCurrentMenu(list)} key={idx} className={cx('menu-list')}><NavLink to={list.location ? list.location : '/'}><img src={list.icon} alt={list.title} />{list.title}</NavLink></p>
				})}
			</Sidebar>

			{isMenuOpen ? <Dimmer onClick={clickToCloseMenu}/> : null}
			
			<Container>
				<div
					className={cx('main-header', 'pure-main-header')}
				>

					{/* 모바일 뒤로가기/홈 아이콘 */}
					{noLeftIcon ? null : <>{to ? <BackToPrevious to={to} className={cx('back-arrow')} /> : <Link to='/'><img className={cx('back-home', 'g-mobile-only-f')} src={homeIcon} alt='홈으로' /></Link>}</>}
					
					{/* 모바일 페이지 타이틀 */}
					<p className={cx('menu-title', 'g-mobile-only')}>{currentMenuTitle}</p>

					{/* 모바일 햄버거 */}
					<Hamburger
						isRight
						className={cx('hamburger')}
						active={isMenuOpen}
						onClick={clickToToggleMenu}
					/>

					{/* PC 로고 */}
					<Link to='/' className={cx('g-pc-only-f', 'main-logo')}><img src={logoIcon} alt='홈으로'/></Link>

					{/* PC 기본 메뉴 */}
					<div className={cx('menu-box', 'g-pc-only-f')}>
						{isAuthed ?
							<>
								{menuPC.map((list, idx) => {
									return <p onClick={list.value == 'logout' ? clickToLogout : () => clickToSaveCurrentMenu(list)} key={idx} className={cx('menu-list')}>
										<NavLink to={list.value == 'trade' ? `/trade` : list.location} activeClassName={cx(list.value !== 'logout' && 'active')}>{list.title}</NavLink>
									</p>
								})}
							</>
							:
							<>
								{menuWithoutLogin.map((list, idx) => {
									return <p onClick={() => clickToSaveCurrentMenu(list)} key={idx} className={cx('menu-list')}>
										<NavLink to={list.value == 'trade' ? `/trade/${defaultBase}_${defaultQuote}` : list.location } activeClassName={cx('active')} >{list.title}</NavLink>
									</p>
								})}
							</>
						}
					</div>
				</div>
				{/* 모바일 세컨드메뉴 */}
				{menuLists.length > 0 && <div className={cx('main-menu', 'added-menu-box', 'g-mobile-only-f')}>
					{menuLists.map((list, idx) => {
						return <p onClick={() => clickToSaveCurrentMenu(list)} className={cx('appeared-menu', 'menu', currentMenuSemiTitle == list.value && 'active', 'pure-appeared-menu')} key={idx}>{list.title}</p>
					})}
				</div>}

				{/* 모바일 세컨드메뉴에 숨겨져있는 메뉴 */}
				{hiddenMenuLists.length > 0 && 
					<div className={cx('main-extended-menu', 'added-menu-box')}>
						<div
							className={cx('clicked-menu')}
							onClick={clickToToggleHiddenMenu}
						>
							<div className={cx('appeared-menu', 'menu', 'pure-appeared-menu', 'g-mobile-only-f')}>
								<span className={cx('title')}>
									{currentMenuSemiTitle}
								</span>
								<Arrow
									top={isHiddenMenuOpen}
									bottom={!isHiddenMenuOpen}
									className={cx('dropdown-icon')}/>
							</div>
						</div>
						<div
							className={cx('hidden-menu', isHiddenMenuOpen && 'open')}
							style={{height: hiddenMenuHeight}}
						>
							<Row>
								{hiddenMenuLists.map((list, idx) => {
									return <Col
												onClick={clickToToggleHiddenMenu}
												xs='4'
												className={cx('pl-pr-none')}
												key={idx}
											>
												<NavLink
													exact
													activeClassName={cx('active')}
													className={cx('menu')}
													to={{
														pathname: list.location ? list.location : '/'
													}}
												>
													{list.title}
												</NavLink>
											</Col>
								})}
							</Row>
						</div>
					</div>
				}
			</Container>

			{/* pc마이페이지&서포트페이지 사이드헤더 */}
			{pcSubMenu.length > 0 &&
				<div className={cx('mypage-list-sub-menu', 'g-pc-only-f')}>
					{pcSubMenu.map((list, idx) => {
						return <div key={idx} className={cx('menu-list-box')}>
							<NavLink exact className={cx('menu-list-box-link')} to={list.location} activeClassName={cx('active')}>
								<img className={cx('img')} src={list.icon} alt={list.title} />
								<p className={cx('menu')}>{list.title}</p>
							</NavLink>
						</div>
					})}
				</div>
			}
		</header>
	)
}

Header.defaultProps = {
	menuLists: [],
	hiddenMenuLists: [],
	pcSubMenu: []
}

export default withRouter(Header);