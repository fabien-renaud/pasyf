import React from 'react';
import {shallow} from 'enzyme';
import {NotFound} from './NotFound';

describe('<NotFound />', () => {
    it('renders component', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper.contains(<h1>404 Not Found</h1>)).toEqual(true);
    });
});
