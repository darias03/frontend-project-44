import calculate from '../src/games/calc.js';

test('addition', () => {
  expect(calculate(5, 3, '+')).toBe(8);
});

test('subtraction', () => {
  expect(calculate(5, 3, '-')).toBe(2);
});

test('multiplication', () => {
  expect(calculate(5, 3, '*')).toBe(15);
});

test('unknown operator throws error', () => {
  expect(() => calculate(5, 3, '/')).toThrow('Unknown operator: /');
});