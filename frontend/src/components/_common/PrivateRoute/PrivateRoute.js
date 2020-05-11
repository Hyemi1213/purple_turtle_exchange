import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, title, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component title={title} {...props} />
                : <Redirect to='/' />}
        />
    )
}

export default PrivateRoute;