import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import SearchPanel from './SearchPanel'

describe('<SearchPanel/>', () => {
    it('Should recieve props and render correctly', () => {
        const output = shallow(
            <SearchPanel
            searchInputValue="mockValue"
            handleSearchInputChange={() => {}}
            searchTodo={() => {}}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    })
})

