import React from 'react';
import styles from './FormFeedback.scss';
import classNames from 'classnames/bind';

import { FormFeedback as BFormFeedback } from 'reactstrap';

const cx = classNames.bind(styles);

const FormFeedback = ({className, children, ...rest}) => {
    return (
        <BFormFeedback className={cx('g-feedback', className)} {...rest}>
            {children}
        </BFormFeedback>
    )
}

export default FormFeedback