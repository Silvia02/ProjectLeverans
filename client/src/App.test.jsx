// Important - do this if you don't want to import React in every component
import React from 'react';
globalThis.React = React;

// Other imports
import { render, screen } from '@testing-library/react';
import App from './App';

// A test
test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
