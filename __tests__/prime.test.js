import { isPrime } from '../src/games/prime.js';

test('isPrime returns true for prime number', () => {
  expect(isPrime(7)).toBe(true);
});

test('isPrime returns false for non-prime number', () => {
  expect(isPrime(4)).toBe(false);
});