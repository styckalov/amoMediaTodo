import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import { render } from '@testing-library/react';

import ConfirmModal from './ConfirmModal'


describe('<ConfirmModal/>', () => {
    it('Should recieve props and render correctly', () => {
        const output = shallow(
            <ConfirmModal
            id={20}
            removeTodo={() => {}}
            closeModal={() => {}}
            />
        );
        const { getByText } = render(            
        <ConfirmModal
            id={20}
            removeTodo={() => {}}
            closeModal={() => {}}
        />
        );
        const title = getByText(/Are you sure you want to delete this ToDo item/i);
        expect(title).toBeInTheDocument();
        expect(shallowToJson(output)).toMatchSnapshot();
    })
})