import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './SortIcon.scss';

const cx = classNames.bind(styles);

class SortIcon extends Component {

    static defaultProps = {
        isDesc: undefined
    }

    render() {
        const { isDesc, className } = this.props;
        return (
            <div className={cx('sort', className)}>
                <span className={cx(isDesc ? null : 'active', 'up', 'icon')}></span>
                <span className={cx(isDesc ? 'active' : null, 'down', 'icon')}></span>
            </div>
        )
    }
}

export default SortIcon;