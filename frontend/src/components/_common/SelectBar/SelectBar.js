import React from 'react';
import styles from './SelectBar.scss';
import classNames from 'classnames/bind';

import Select, { components } from 'react-select';
import { Arrow } from 'components/_common/Icons';

const cx = classNames.bind(styles);

//커스텀이 자유로운 selectbar
// <SelectBar
//      options={//예시 [{value: 'apple', label: '사과'}, {value: 'orange', label: '오렌지'}]}
//      defaultValue={//render 됐을 때 나올 value, Array[0] 이런 식으로}
//      onChange={//select 안에서 option을 클릭 했을 때}
// />
// 나머지 props는 react-select에서 확인


//드롭다운화살표
const DropdownIndicator = props => {
    let { menuIsOpen, dropdownIndicatorColour, dropdownIndicatorSize, dropdownIndicatorborderWidth } = props.selectProps;
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <Arrow bottom className={cx('arrow')} style={{borderColor: dropdownIndicatorColour, width: dropdownIndicatorSize, height: dropdownIndicatorSize, borderWidth: dropdownIndicatorborderWidth}}/>
            </components.DropdownIndicator>
        )
    );
};

const SelectBar = ({ options, onChange, placeholder, ...rest}) => {
    const customStyles = {
        option: (provided, state) => ({
            border: 'none',
            color: state.isSelected ? '#C569FE' : '#545662',
            cursor: 'pointer',
            padding: '0.4rem 0.6rem 0.6rem',
            fontSize: '1.4rem',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '-0.3px',
            fontWeight: 600,
            lineHeight: '1.8rem',
            transition: 'color 0.2s ease-in',
            '&:hover': {
                color: '#C569FE'
            }
        }),
        placeholder: (provided, state) => ({
            color: '#545662',
            fontSize: '1.4rem',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '-0.3px',
            lineHeight: '1.8rem',
            fontWeight: 600,
            padding: '0.4rem 0.6rem 0.6rem',
            transition: 'color 0.2s ease-in',
            '&:hover': {
                color: '#467AFF'
            }
        }),
        control: (provided, state) => ({
            ...provided,
            borderColor: '#D9DCE1',
            borderRadius: state.menuIsOpen ? '4px 4px 0 0' : '4px',
            boxShadow: 'none',
            cursor: 'pointer',
            minHeight: '28px',
            height: '28px',
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
            borderRadius: '0 0 4px 4px',
        }),
        menuList: (provided, state) => ({
            ...provided,
            padding: 0,
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        singleValue: (provided, state) => ({
            color: '#545662',
            fontSize: '1.4rem',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '-0.3px',
            fontWeight: 600,
            lineHeight: '1.8rem',
            padding: '0.4rem 0.6rem 0.6rem',
            '&:hover': {
                color: '#467AFF'
            }
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: '#B0B7C0',
            padding: 0,
            '&:hover': {
                color: '#B0B7C0'
            }
        })
    }
    return (
        <Select
            components={{ DropdownIndicator }}
            styles={customStyles || null}
            options={options}
            isSearchable={false}
            onChange={onChange}
            placeholder={placeholder}
            classNamePrefix='sdf=asfd'
            {...rest}
        />
    )
}

export default SelectBar