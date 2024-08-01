import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i);
  const button = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input value/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(input).toMatchSnapshot();
  screen.debug();
});
