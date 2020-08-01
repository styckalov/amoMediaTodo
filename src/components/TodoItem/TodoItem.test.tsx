import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import TodoItem from './TodoItem'

describe('<TodoItem/>', () => {
    it('Should recieve props and render correctly', () => {
        const output = shallow(
            <TodoItem
                todo=
                {
                    {
                        id: 100,
                        name: "mockName",
                        isDone: false
                    }
                }
                passId={() => { }}
                openModal={() => { }}
                handleTodoClick={() => { }}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    })
})