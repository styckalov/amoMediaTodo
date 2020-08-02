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
    it('Should handle click event', () => {
        const openModalMock = jest.fn()
        const passIdMock = jest.fn();
        const output = shallow(
            <TodoItem
                todo=
                {
                    {
                        id: 100,
                        name: "mockName",
                        isDone: true
                    }
                }
                passId={passIdMock}
                openModal={openModalMock}
                handleTodoClick={() => { }}
            />
        );
        output.find('.todoItem__button').simulate('click');
        expect(openModalMock).toHaveBeenCalled()
        expect(passIdMock).toHaveBeenCalled()
    })
})