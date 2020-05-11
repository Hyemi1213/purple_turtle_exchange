import React, { Component, Children, cloneElement } from "react";
import classNames from 'classnames/bind';
import styles from './Dropdown.scss';

import arrowIcon from './arrow_icon.svg';

const cx = classNames.bind(styles);

// 형태
// import Dropdown, { Option } from '.../Dropdown';
// <Dropdown onSelect={value => console.log(`Selected: ${value}`)}><Option value="옵션1">옵션1</Option><Option value="옵션2">옵션2</Option></Dropdown>

class Dropdown extends Component {

	state = {
		activeOptionIndex: 0,
		overOptionIndex: 0,
    isOpen: false,
		isLeave: false
	}

	getAdditionalProps = (index, props) => ({
	    onSelect: this.onSelect,
	    onOver: this.onOver,
			onLeave: this.onLeave,
	    index,
	    selected: index === this.state.activeOptionIndex,
			selectedClass: cx('active'),
			unselectedClass: cx('deactive'),
	    ...props
	});



	// 리스트에 현재 선택된 항목도 나옴
	getChildrenOptionssWithProps = () => {
		const selected = this.getAdditionalProps().selected;

	    return Children.map(this.props.children, (child, index) => {
	    	return cloneElement(child, this.getAdditionalProps(index, child.props));
	    });
	};

	// 리스트에 현재 선택된 항목은 나오지 않음
	// getChildrenOptionssWithProps = () => {
	//     return Children.map(this.props.children, (child, index) => {
	//         if (index !== this.state.activeOptionIndex){
	//             return cloneElement(child, this.getAdditionalProps(index, child.props));
	//         }
	//
	//         return;
	//     }
	//     );
	// };

	getActiveOptionLabel = () => {
	    const { children } = this.props;
	    const { activeOptionIndex } = this.state;
	    const currentChildren = children[activeOptionIndex];

	    if (currentChildren) {
	      return currentChildren.props.children;
	    }

	    return false;
	};

	toggleList = () => {
	    this.setState({ isOpen: !this.state.isOpen });
	};

	onSelect = (optionIndex, value) => {
	    const { onSelect } = this.props;

	    this.setState({
	      activeOptionIndex: optionIndex,
	      isOpen: false
	    });

	    if (onSelect !== "undefined") onSelect(value);

	};

	onOver = (optionIndex) => {
	    const { onOver } = this.props;

	    this.setState({
	      overOptionIndex: optionIndex,
				isLeave: false
	    });
	};

	onLeave = (optionIndex) => {
		this.setState({
			isLeave: true
		})
	}

	render(){

		const childrenOptionssWithProps = this.getChildrenOptionssWithProps();
    	// const label = this.getActiveOptionLabel();

		const { text, translatorImg, translatorAlt } = this.props;

		return(
			<div className={cx('dropdown', this.state.activeOptionIndex === 0 ? 'arrow-color-i' : null, this.state.overOptionIndex === 0 ? 'arrow-color' : null, this.state.isLeave ? 'none-hover' : null)} >
				<div onClick={this.toggleList}>
					{this.props.img ? <img src={translatorImg} alt={translatorAlt}/> : text}
					{this.props.arrow ? <img className={cx(this.state.isOpen ? 'arrow-open' : 'arrow-close')} src={arrowIcon} alt="view list"/> : null}
				</div>

				<div className={cx('dropdown-list', this.state.isOpen ? 'open' : 'close')}>
					{childrenOptionssWithProps}
				</div>
			</div>
		)
	}
}

export default Dropdown;
