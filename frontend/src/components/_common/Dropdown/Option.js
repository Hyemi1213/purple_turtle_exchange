import React, { Component } from 'react';

class Option extends Component {

	onSelect = () => {
		this.props.onSelect(this.props.index, this.props.value);
	};

	onOver = () => {
		this.props.onOver(this.props.index, this.props.value);
	};

	render() {
		return(
			<div
				className={this.props.selected ? this.props.selectedClass : this.props.unselectedClass }
				onClick={this.onSelect} onMouseOver={this.onOver} onMouseLeave={this.props.onLeave}
			>
				{this.props.children}
			</div>
		)
	}
}

export default Option;
