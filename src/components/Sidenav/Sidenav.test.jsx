import React from 'react';
import {shallow} from 'enzyme';
import {Sidenav} from './Sidenav';
import {AuthProvider} from '../../hooks/useAuth';

describe('<Sidenav />', () => {
    it('renders component', () => {
        const wrapper = shallow(
            <AuthProvider
                domain={process.env.REACT_APP_DOMAIN}
                client_id={process.env.REACT_APP_CLIENT_ID}
                redirect_uri={window.location.origin}>
                <Sidenav />
            </AuthProvider>);
    });
});
