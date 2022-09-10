import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders stay tune link', () => {
  render(<App />);
  const linkElement = screen.getByText(/stay tune/i);
  expect(linkElement).toBeInTheDocument();
});
