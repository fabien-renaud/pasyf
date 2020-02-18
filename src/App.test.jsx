import React from 'react';
import {shallow} from 'enzyme';
import {AuthProvider} from './hooks/useAuth';
import {App} from './App';

describe('<App />', () => {
    it('renders component', () => {
        const wrapper = shallow(
            <AuthProvider
                domain={process.env.REACT_APP_DOMAIN}
                client_id={process.env.REACT_APP_CLIENT_ID}
                redirect_uri={window.location.origin}>
                <App />
            </AuthProvider>);
    });
});
