import React, { Component } from 'react';
import styles from './ToggleSwitch.scss';
import classNames from 'classnames/bind';

import Input from 'components/_common/Input';

const cx = classNames.bind(styles);

class ToggleSwitch extends Component {

    // isDisabled === ture 일 때 checked true로 못하게 해주기
    preventClick = (e) => {
        e.preventDefault();
    }

    render() {
        const { name, isDisabled, className, ...rest } = this.props;
        return(
            <label htmlFor={name} className={cx("toggle-group", isDisabled ? 'disable' : null, className)}>
                <Input
                    type="checkbox"
                    id={name}
                    name={name}
                    onClick={isDisabled ? this.preventClick : null}
                    {...rest}
                />
                <div className={cx("onoffswitch-label")}>
                    <div className={cx("onoffswitch-inner")}></div>
                    <div className={cx("onoffswitch-switch")}></div>
                </div>
            </label>
        )
    }
}


export default ToggleSwitch