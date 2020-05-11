import React from 'react';
import styles from './Input.scss';
import classNames from 'classnames/bind';

import FormFeedback from 'components/_common/FormFeedback';
import { Input as BInput } from 'reactstrap';

const cx = classNames.bind(styles);

const Input = ({ valid, invalid, disabled, focused, className, bigBox, extraText, extraTextClassName, extraTextNoBg, feedbackMsg, extraTextNextToFeedback, extraTextBoxClassName, onClick, feedbackClassName, normalPaddingPc, ...rest }) => {

    let input = <>
        <BInput
            autoComplete="off"
            valid={valid}
            invalid={invalid}
            className={cx('default-input', valid && 'valid', invalid && 'invalid', disabled && 'disabled', focused && 'focused', bigBox && 'big-box', extraText && 'is-extra-box', className)}
            onClick={onClick}
            {...rest}
        />
        { feedbackMsg ? <FormFeedback className={feedbackClassName}>{feedbackMsg}</FormFeedback> : null }
        { extraTextNextToFeedback ? <>{extraTextNextToFeedback}</> : null }
    </>;

    return (
        <>
            {extraText ?
                <div className={cx('box-for-extra-text', extraTextBoxClassName, normalPaddingPc && 'normal-padding-pc')} onClick={onClick}>
                    {input}
                    <div className={cx('extra-box', extraTextClassName, extraTextNoBg ? null : 'bg')}>{extraText}</div>
                </div>
                :
                <>
                    {input}
                </>
            }
        </>
    )
}

export default Input;