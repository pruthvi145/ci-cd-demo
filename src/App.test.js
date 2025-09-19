import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey CI\/CD!/i);
  expect(linkElement).toBeInTheDocument();
});