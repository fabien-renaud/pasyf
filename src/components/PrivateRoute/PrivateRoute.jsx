import React from 'react';
import {Route} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

export const PrivateRoute = (props) => {
    const {path, component: Component} = props;
    const {isAuthenticated, loginWithRedirect} = useAuth();
    return (
        <Route
            path={path}
            render={() => isAuthenticated
                ? <Component />
                : loginWithRedirect() }
        />
    )
};
