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
    it('Should handle change and keyUp events', () => {
        const handleKeyUpMock = jest.fn()
        const handleChangeMock = jest.fn()
        const output = shallow(
            <SearchPanel
            searchInputValue="mockValue"
            handleSearchInputChange={handleChangeMock}
            searchTodo={handleKeyUpMock}
            />
        );
        output.find('.searchPanel__input').simulate('change');
        output.find('.searchPanel__input').simulate('keyUp');
        expect(handleChangeMock).toHaveBeenCalled()
        expect(handleKeyUpMock).toHaveBeenCalled()
    })
})

