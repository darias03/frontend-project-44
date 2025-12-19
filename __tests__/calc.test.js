import { calculate } from '../src/games/calc.js';

test('addition', () => {
  expect(calculate(2, 3, '+')).toBe(5);
});

test('subtraction', () => {
  expect(calculate(5, 3, '-')).toBe(2);
});

test('multiplication', () => {
  expect(calculate(4, 3, '*')).toBe(12);
});

test('unknown operator throws error', () => {
  expect(() => calculate(2, 3, '&')).toThrow('Unknown operator');
});