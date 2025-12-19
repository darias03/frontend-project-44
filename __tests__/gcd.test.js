import { calculateGcd } from '../src/games/gcd.js';

test('gcd of 54 and 24 is 6', () => {
  expect(calculateGcd(54, 24)).toBe(6);
});