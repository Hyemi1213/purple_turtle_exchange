import React from 'react';
import Input from 'components/_common/Input';
import SelectBar from 'components/_common/SelectBar';
import classNames from 'classnames/bind';
import styles from './SearchBarWithSelect.scss';
import { Row, Col } from 'reactstrap';

import searchIcon from 'static/images/menu_users.svg';

const cx = classNames.bind(styles);

const SearchBarWithSelect = ({ optionClick, children, onSubmit, style, ...rest }) => {

    let options = [{
        value: 'username',
        label: '이름'
    }, {
        value: 'phone',
        label: '핸드폰'
    }];

    const customStyles = {
        option: (provided, state) => ({
            border: 'none',
            color: state.isSelected ? '#467AFF' : '#545662',
            cursor: 'pointer',
            padding: '0.6rem 0.8rem',
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: '2rem',
            transition: 'color 0.2s ease-in',
            '&:hover': {
                color: '#467AFF'
            },
            '@media (min-width: 992px)': {
                fontSize: '1.5rem'
            }
        }),
        placeholder: (provided, state) => ({
            color: '#545662',
            fontSize: '1.2rem',
            lineHeight: '2rem',
            padding: '0.6rem 0.8rem',
            transition: 'color 0.2s ease-in',
            '&:hover': {
                color: '#467AFF'
            },
            '@media (min-width: 992px)': {
                fontSize: '1.5rem'
            }
        }),
        control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderRadius: state.menuIsOpen ? '2px 2px 0 0' : '2px',
            boxShadow: 'none',
            cursor: 'pointer',
            '&:hover': {
                color: '#467AFF'
            }
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: 0
        }),
        menu: (provided, state) => ({
            ...provided,
            margin: 0,
            boxShadow: '2px 4px 9px rgba(18, 18, 35, 0.12)',
            border: '1px solid #D9DCE1',
            borderTop: 'none',
            borderRadius: '0 0 2px 2px',
        }),
        menuList: (provided, state) => ({
            ...provided,
            padding: 0,
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        singleValue: (provided, state) => ({
            color: '#7C7F88',
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: '2rem',
            padding: '0.6rem 0.4rem',
            '&:hover': {
                color: '#467AFF'
            },
            '@media (min-width: 992px)': {
                fontSize: '1.5rem'
            }
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            padding: '0 0.7rem'
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: '#7C7F88',
            padding: 0,
            width: '15px',
            height: '15px',
            alignItems: 'center',
            '&:hover': {
                color: '#7C7F88'
            }
        })
    }

    return (
        <form className={cx('wrapper')} onSubmit={onSubmit} style={style}>
            <Row>
                <Col xs="3" className={cx('pl-pr-none')}>
                    <SelectBar
                        styles={customStyles}
                        options={options}
                        defaultValue={options[0]}
                        onChange={optionClick}
                        // classNamePrefix="dd"
                    />
                </Col>
                <Col xs="7" className={cx('pl-pr-none')}>
                    <Input
                        className={cx('search-input')}
                        {...rest}
                    />
                </Col>
                <Col onClick={onSubmit} xs="2" className={cx('pl-pr-none', 'search-icon-box')}>
                    <img src={searchIcon} alt="검색하기" />
                </Col>
            </Row>
        </form>
    )
}

export default SearchBarWithSelect