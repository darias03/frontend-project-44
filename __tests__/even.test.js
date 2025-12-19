import { isEven } from '../src/games/even.js';

test('even number returns true', () => {
  expect(isEven(4)).toBe(true);
});

test('odd number returns false', () => {
  expect(isEven(7)).toBe(false);
});