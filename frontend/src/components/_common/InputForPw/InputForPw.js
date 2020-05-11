import React from 'react';
import styles from './InputForPw.scss';
import classNames from 'classnames/bind';
import { isNumber, isUppercase, isLowercase, isSpecialcase } from 'lib/functions';

import Input from 'components/_common/Input';
import ReactTooltip from 'react-tooltip';

const cx = classNames.bind(styles);

const InputForPw = ({ tooltipId, value, ...rest}) => {

    let test = [{
        title: '대문자',
        value: 'uppercase'
    }, {
        title: '소문자',
        value: 'lowercase'
    }, {
        title: '특수문자',
        value: 'special'
    }, {
        title: '숫자',
        value: 'number'
    }, {
        title: '8~16자리',
        value: 'length'
    }];
    
    return (
        <div>
            <Input
                data-tip={tooltipId}
                data-event='focus'
                data-event-off='blur'
                value={value}
                {...rest}
            />
            <ReactTooltip
                data-for={tooltipId}
                effect='solid'
                className={cx('tooltip')}
            >
                <div className={cx('list-box')}>
                    {test.map((list, idx) => {
                        return <p key={idx} className={cx('list')}>{list.title}<span className={cx('check-icon', value.length > 0 && 'typing', list.value == 'uppercase' && isUppercase(value) && 'confirmed', list.value == 'lowercase' && isLowercase(value) && 'confirmed', list.value == 'special' && isSpecialcase(value) && 'confirmed', list.value == 'number' && isNumber(value) && 'confirmed', list.value == 'length' && 7 < value.length && value.length < 17 && 'confirmed')}></span></p>
                    })}
                </div>
            </ReactTooltip>
        </div>
    )
};

InputForPw.defaultProps = {
    tooltipId: 'id'
}

export default InputForPw;