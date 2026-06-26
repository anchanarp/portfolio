import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Anchana R P/i })).toBeInTheDocument();
  expect(screen.getByText(/MCA Student \| Aspiring Software Developer/i)).toBeInTheDocument();
});
