import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NotFound, PrivateRoute, Sidenav} from './components';
import {Catalog, Purchase} from './pages';
import {useAuth} from './hooks';
import './App.scss';

export const App = () => {
    const { loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    return (
        <Router>
            <Sidenav />
            <main role="main">
                <Switch>
                    <PrivateRoute exact path="/" component={Catalog} />
                    <PrivateRoute path="/login" component={Catalog} />
                    <PrivateRoute path="/catalog" component={Catalog} />
                    <PrivateRoute path="/purchase" component={Purchase} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
};

