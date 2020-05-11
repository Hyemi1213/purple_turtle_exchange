import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.scss';
import Input from 'components/_common/Input';
import { Search } from 'components/_common/Icons';

const cx = classNames.bind(styles);

const SearchBar = ({ className, clickToSearch, ...rest }) => {
    return(
        <div className={cx('wrapper', className)}>
            <Input
                extraText
                extraTextClassName={cx('extra-box')}
                className={cx('search-input')}
                {...rest}
            />
            <div className={cx('search-icon-frame')} onClick={clickToSearch}>
                <Search className={cx('search-icon')} />
            </div>
        </div>
    )
}

export default SearchBar;
