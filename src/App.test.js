import { render, screen } from '@testing-library/react';
import App, {Buttons} from './App';

describe('App', () => {

  describe('Buttons', () => {

    it('renders', () => {
      expect(render(<Buttons/>).container).toMatchSnapshot()
    });

    it('calls increase function', () => {
      const increase = jest.fn();

      render(<Buttons increase={increase}/>)

      screen.getByTestId('plus').click()

      expect(increase).toHaveBeenCalled();
    })

  });

  it('increases the counter correctly', () => {
    render(<App/>);

    expect(screen.getByTestId('counter-result')).toHaveTextContent('Counter: 0')

    screen.getByTestId('plus').click()

    expect(screen.getByTestId('counter-result')).toHaveTextContent('Counter: 1')
  })

  it('decreases the counter', () => {})

  it('displays the emoji when counter < 0', () => {
    render(<App/>);

    expect(screen.getByTestId('counter-result')).toHaveTextContent('Counter: 0')

    screen.getByTestId('minus').click()

    const actual = screen.getByTestId('counter-result');
    const expected = ':-)';

    expect(actual).toHaveTextContent(expected)
  })

})