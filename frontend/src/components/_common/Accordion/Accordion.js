import React, { Component, Children, cloneElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Accordion.scss';

// import arrow from 'static/images/dropdown_arrow.svg';

const cx = classNames.bind(styles);

// 형태
// import Accordion, { Section } from '.../Accordion';
// <Accordion><Section title="아코디언 타이틀"><div>아코디언 내용</div></Section></Accordion>

class Accordion extends Component {

	state = {
		selectedSectionIndex: -1
	};

	getAdditionalProps = (index, props) => ({
		handleClick: this.toggle,
		index,
		selected: index === this.state.selectedSectionIndex,
		...props
	});

	getChildrenSectionsWithProps = () => {
		return Children.map(this.props.children, (child, index) =>
			cloneElement(child, this.getAdditionalProps(index, child.props))
		);
	};

	toggle = (sectionIndex) => {
		if(this.state.selectedSectionIndex === sectionIndex){
			this.setState({ selectedSectionIndex: -1 });
		}else {
			this.setState({ selectedSectionIndex: sectionIndex });
		}
	}

	render(){
		const childrenSectionsWithProps = this.getChildrenSectionsWithProps();

		return <div>{childrenSectionsWithProps}</div>;
	}
}

export {Accordion};

class Section extends Component {

	toggle = () => {
		this.props.handleClick(this.props.index);
	};

	render(){
		return(
			<div
				key={this.props.key}
			>
				<div className="Accordion__title" onClick={this.toggle}>
					<div className={cx('dropdown')}>{this.props.title}</div>
				</div>

				<div className={cx('accordion-content', this.props.selected ? 'open' : 'close')}>
					<div className="Accordion__inner">{this.props.children}</div>
				</div>

			</div>
		);
	}
}

export {Section};
