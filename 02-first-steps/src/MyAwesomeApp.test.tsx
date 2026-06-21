import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);
    // console.log(container.innerHTML);
    // render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1?.innerHTML).toContain('Matias');
    expect(h3?.innerHTML).toContain('Romani')
  });

  test('should render firstName and lastName - screen', () => {
    render(<MyAwesomeApp />);
    // console.log(container.innerHTML);
    // screen.debug();

    // const h1 = screen.getByRole('heading', {
    //   level: 1
    // });
    const h1 = screen.getByTestId('first-name-title')
    expect(h1.innerHTML).toContain('Matias');
  });

  test('Should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test('Should match snapshot', () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  });
});