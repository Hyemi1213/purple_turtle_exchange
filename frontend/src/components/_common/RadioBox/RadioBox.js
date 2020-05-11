import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './RadioBox.scss';

import Input from 'components/_common/Input';

const cx = classNames.bind(styles);

class RadioBox extends Component {

    static defaultProps ={ 
        lists: []
    }
    render() {
        const { lists, isRequired, name, className, feedback, ...rest } = this.props;
        return (
            <div className={cx('wrapper', className)}>
                {lists.map((list) => {
                    return <label className={cx('label')} key={list.value} htmlFor={list.value}>
                                <Input
                                    type="radio"
                                    invalid={list.invalid}
                                    id={list.value}
                                    value={list.value}
                                    name={name}
                                    {...rest}
                                />
                                <span className={cx('checkmark', list.invalid ? 'invalid' : null)}></span>
                                <span>{list.label}</span>
                            </label>
                })}
                
                {isRequired ? <span className={cx('focus')}>(필수)</span> : null}
                {feedback}
            </div>
        )
    }
}

export default RadioBox;
