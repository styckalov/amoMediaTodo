import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import AddTodoPanel from './AddTodoPanel'

describe('<AddTodoPanel/>', () => {
    it('Should recieve props and render correctly', () => {
        const output = shallow(
            <AddTodoPanel
            inputValue="mockValue"
            handleKeyUp={() => {}}
            handleSubmit={() => {}} 
            handleChange={() => {}}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    })
})