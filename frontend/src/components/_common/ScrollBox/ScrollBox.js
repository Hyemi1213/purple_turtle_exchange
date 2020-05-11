import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './ScrollBox.scss';

const cx = classNames.bind(styles);

// 형태
// <ScrollBars>스크롤 박스에 들어갈 내용</ScrollBox>

// <ScrollBars>에 들어있는 style값은 default 값입니다.

const ScrollBox = ({title, className, children, isDeactiveScrollBar, ...props}) => {
	return(
		<>
			{isDeactiveScrollBar ? 
				<>
					{children}
				</>
			: 
				<Scrollbars
					className={className}
					{...props}
				>
					{children}
				</Scrollbars>
			}
		</>
	);
};

export { ScrollBox };


// 스크롤 위, 아래에 따른 shadow 추가
// shadowTop(props), shadowBottom(props) 를 통해 추가 및 제거 가능

class ShadowScrollBox extends Component {

	state = {
		scrollTop: 0,
		scrollHeight: 0,
		clientHeight: 0
	}

	handleUpdate = (values) => {
		const { shadowTop, shadowBottom } = this.refs;
		const { scrollTop, scrollHeight, clientHeight } = values;
		const shadowTopOpacity = 1 / 20 * Math.min(scrollTop, 20);
		
		//scrollHeight : 스크롤 시키지 않았을 때의 전체 높이
		//clientHeight : 눈에 보이는 만큼의 높이
		const bottomScrollTop = scrollHeight - clientHeight;
		const shadowBottomOpacity = 1 / 20 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));

		if(shadowTop) {
			shadowTop.style.opacity = shadowTopOpacity;
		}
		if(shadowBottom) {
			shadowBottom.style.opacity = shadowBottomOpacity;
		}

		if (shadowBottomOpacity == 0) {
			if (this.props.fetchFromScroll) { 
				this.props.fetchFromScroll()
			}
		}
	}

	renderThumb({ style, ...props }) {
		const thumbStyle = {
			width: 4,
			backgroundColor: `#d9dce1`,
			borderRadius: 3
		};
		return (
			<div
				style={{ ...style, ...thumbStyle }}
				{...props} />
		);
	}

	renderTrack({ style, ...props }) {
		const trackStyle = {
			width: 4,
			backgroundColor: `#eee`,
			borderRadius: 3,
			height: '100%',
			right: 0
		};
		return (
			<div
				style={{ ...style, ...trackStyle }}
				{...props} />
		)
	}

	render() {
		const { children, shadowTop, shadowBottom, className, id, fetchFromScroll, isDeactiveScrollBar, scrollPadding, ...props } = this.props;
		return(
			<>
				{isDeactiveScrollBar ? 
					<>
						{children}
					</>
					:
					<div id={id} className={cx('shadow-wrapper', className)}>
						<Scrollbars
							onUpdate={this.handleUpdate}
							renderThumbVertical={this.renderThumb}
							renderTrackVertical={this.renderTrack}
							hideTracksWhenNotNeeded
							{...props}
						>
							<div
								className={cx('inner')}
								style={{paddingRight: scrollPadding || scrollPadding == 0 ? `${scrollPadding}rem` : '0.6rem'}}
							>
								{children}
							</div>
						</Scrollbars>
						{shadowTop ?
							<div
								ref="shadowTop"
								className={cx('shadow-bar', 'top')}
							></div>
							:
							null
						}
						{shadowBottom ?
							<div
								ref="shadowBottom"
								className={cx('shadow-bar', 'bottom')}
							></div>
							:
							null
						}

					</div>
				}
			</>
		)
	}
}

export { ShadowScrollBox };
