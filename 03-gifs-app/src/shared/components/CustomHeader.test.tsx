import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {

  const title = 'Titulo de prueba';
  const description = 'Descripcion de prueba';


  test('should redner the title correctly', () => {
    // Con container
    // const { container } = render(<CustomHeader title={title} />);
    // const h1 = container.querySelector('h1');
    // expect(h1?.innerHTML).toContain(title);


    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined;
  });

  test('should render the description when provided', () => {

    // Con container
    // const { container } = render(
    //   <CustomHeader
    //     title={title}
    //     description={description}
    //   />
    // );
    // const desc = container.querySelector('p');
    // expect(desc?.innerHTML).toContain(description);

    render(<CustomHeader title={title} description={description} />);
    expect(screen.getByText(description)).toBeDefined;
    expect(screen.getByRole('paragraph')).toBeDefined;
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should note render the description when not provided', () => {
    // Con container
    const { container } = render(<CustomHeader title={title} />);
    const divElement = container.querySelector('.content-center');
    const h1 = divElement?.querySelector('h1');
    const p = divElement?.querySelector('p')

    expect(h1?.innerHTML).toBe(title);
    expect(p).toBeNull;
  });
});