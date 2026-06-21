import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
  test('should render searchbar correctly', () => {
    const { container } = render(<SearchBar onQuery={() => { }} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should call onQuery with the correct value after 700ms', async () => {
    const onQuery = vi.fn();
    const textValue = 'test';
    render(<SearchBar onQuery={onQuery} />)

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: textValue } });

    // await new Promise(resolve => setTimeout(resolve, 701));
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith(textValue);
    });
  });

  test('should call only once with the last value (debounce)', async () => {
    const onQuery = vi.fn();
    const textValue = 'test';
    render(<SearchBar onQuery={onQuery} />)

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: textValue } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith(textValue);
    });
  });

  test('should call onQuery when button clicked with the input value', () => {
    const onQuery = vi.fn();
    const textValue = 'test';
    render(<SearchBar onQuery={onQuery} />)

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: textValue } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith(textValue);
  });

  test('should the input has the correct placeholder value', () => {
    const placeHolder = 'Buscar gif';
    render(<SearchBar onQuery={() => { }} placeholder={placeHolder} />);
    expect(screen.getByPlaceholderText(placeHolder)).toBeDefined();
  });
});