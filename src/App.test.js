import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello CI\/CD!/i);
  expect(linkElement).toBeInTheDocument();
});