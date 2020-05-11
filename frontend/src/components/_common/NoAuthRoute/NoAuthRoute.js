import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NoAuthRoute = ({ component: Component, authed, title, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component title={title} {...props} />
                : <Redirect to='/' />}
        />
    )
};

export default NoAuthRoute;