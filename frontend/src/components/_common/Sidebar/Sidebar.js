import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.scss';

const cx = classNames.bind(styles);

class Sidebar extends Component {

    render () {
        const { menuList, children, className, stickyStyle, resizeStyle, isOpen, yeahnahStyle } = this.props;

        return (
            <div className={cx('wrapper', stickyStyle ? 'sticky' : null, resizeStyle ? 'resize' : null, isOpen ? 'active' : null, className)}>
                {children}
            </div>
        )
    }
}

export default Sidebar