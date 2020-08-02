import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import AddTodoPanel from './AddTodoPanel'

describe('<AddTodoPanel/>', () => {
    const handleChangeMock = jest.fn()
    const handleKeyUpMock = jest.fn()
    const handleClickMock = jest.fn();
    const addTodoPanel = <AddTodoPanel
        inputValue="mockValue"
        handleKeyUp={handleKeyUpMock}
        handleSubmit={handleClickMock} 
        handleChange={handleChangeMock}
    />
    it('Should recieve props and render correctly', () => {
        const output = shallow(
            addTodoPanel
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    })
    it('Should handle change, keyUp and click events', () => {
        const output = shallow(
            addTodoPanel
        )
        output.find('.addTodoPanel__input').simulate('change')
        output.find('.addTodoPanel__input').simulate('keyUp')
        output.find('.addTodoPanel__button').simulate('click')

        expect(handleChangeMock).toHaveBeenCalled()
        expect(handleKeyUpMock).toHaveBeenCalled()
        expect(handleClickMock).toHaveBeenCalled()
    })
})