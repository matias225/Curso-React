import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
  test('Should add two positives numbers', () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b)
    console.log({ a, b, result });

    // ! 3. Assert
    expect(result).toBe(a + b);
  });

  test('Should add two negative numbers', () => {
    const a = -2;
    const b = -6;

    const result = add(a, b)
    console.log({ a, b, result });


    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('Should substract two positives numbers', () => {
    const a = 5;
    const b = 2;

    const result = subtract(a, b)
    console.log({ a, b, result });

    expect(result).toBe(a - b);
  });

  test('Should substract two negative numbers', () => {
    const a = -5;
    const b = -2;

    const result = subtract(a, b)
    console.log({ a, b, result });

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('Should multiply two positives numbers', () => {
    const a = 5;
    const b = 4;

    const result = multiply(a, b)
    console.log({ a, b, result });

    expect(result).toBe(a * b);
  });

  test('Should multiply two negatives numbers', () => {
    const a = -5;
    const b = -4;

    const result = multiply(a, b)
    console.log({ a, b, result });

    expect(result).toBe(a * b);
  });
});

describe('divide', () => {
  test('Should divide two positives numbers', () => {
    const a = 5;
    const b = 4;

    const result = divide(a, b)
    console.log({ a, b, result });

    expect(result).toBe(a / b);
  });
});
