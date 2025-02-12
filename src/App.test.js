import { render, screen } from '@testing-library/react';
import App from './App';

test('renders New Post heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/New Post/i);
  expect(headingElement).toBeInTheDocument();
});