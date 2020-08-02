import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import { render } from '@testing-library/react';

import ConfirmModal from './ConfirmModal'


describe('<ConfirmModal/>', () => {
    it('Should recieve props and render correctly', () => {
        const confirmModal = <ConfirmModal
            id={20}
            removeTodo={() => {}}
            closeModal={() => {}}
            />
        const output = shallow(
            confirmModal
        );
        const { getByText } = render(            
            confirmModal
        );
        const title = getByText(/Are you sure you want to delete this ToDo item/i);
        expect(title).toBeInTheDocument();
        expect(shallowToJson(output)).toMatchSnapshot();
    })
    it('Should handle click events', () => {
        const removeTodoMock = jest.fn();
        const closeModalMock = jest.fn()
        const output = shallow(
            <ConfirmModal
            id={20}
            removeTodo={removeTodoMock}
            closeModal={closeModalMock}
            />
        )
        output.find('.confirmModal__okButton').simulate('click')
        output.find('.confirmModal__cancelButton').simulate('click')
        expect(removeTodoMock).toHaveBeenCalled()
        expect(closeModalMock).toHaveBeenCalled()
    })
})