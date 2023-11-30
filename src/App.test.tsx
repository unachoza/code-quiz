import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Frontend Quiz/i);
  expect(linkElement).toBeInTheDocument();
});
