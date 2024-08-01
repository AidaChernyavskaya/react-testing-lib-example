import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('test case', async () => {
    render(<App/>);
    const helloWorldElem = screen.queryByText(/hello2/i);
    expect(helloWorldElem).toBeNull();
    screen.debug();
    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument();
    expect(data).toHaveStyle({color: 'red'})
    screen.debug();
  });
})
