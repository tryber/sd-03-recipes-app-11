import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Meals from '../../pages/Meals';

test('renders a message', () => {
  const { getByText } = render(<Meals />);
  expect(getByText('Login')).toBeInTheDocument();

});