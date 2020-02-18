import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';

import {AuthProvider} from './hooks';

import {Provider} from 'react-redux';
import {store} from './store';

import * as serviceWorker from './serviceWorker';

import 'materialize-css/sass/materialize.scss';
import './index.scss';

ReactDOM.render(
    <AuthProvider
        domain={process.env.REACT_APP_DOMAIN}
        client_id={process.env.REACT_APP_CLIENT_ID}
        redirect_uri={window.location.origin}>
        <Provider store={store}>
            <App />
        </Provider>
    </AuthProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
