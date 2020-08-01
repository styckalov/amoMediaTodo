import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  it('renders Todo Application', () => {
    const { getByText } = render(<App />);
    const title = getByText(/ToDo Application/i);
    expect(title).toBeInTheDocument();
  });
})

