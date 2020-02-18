import React from 'react';
import {shallow} from 'enzyme';
import {SidenavList} from './SidenavList';

describe('<SidenavList />', () => {
    it('renders component', () => {
        const wrapper = shallow(<SidenavList title="test list" links={[
            {
                "label": "test1",
                "href": "http://localhost:10081/test1"
            },
            {
                "label": "test2",
                "href": "http://localhost:10081/test2"
            }
        ]} />);
        expect(wrapper.contains(<span className="collapsible-header">test list</span>)).toEqual(true);
        expect(wrapper.contains(<a href="http://localhost:10081/test1">test1</a>)).toEqual(true);
        expect(wrapper.contains(<a href="http://localhost:10081/test2">test2</a>)).toEqual(true);
    });
});
