import React from 'react';
import { Form as BForm } from 'reactstrap';

const Form = ({ children, ...rest }) => {
    return (
        <BForm {...rest} >
            {children}
        </BForm>
    )
};

export default Form;