import { render, screen, fireEvent } from '@testing-library/react';
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

  test('click event', () => {
    render(<App/>);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('input event', () => {
    render(<App/>);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    fireEvent.input(input, {
      target: {value: '1123'}
    });
    expect(screen.queryByTestId('value-elem')).toContainHTML('1123');
  });
})
