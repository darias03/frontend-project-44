import { getSecureRandomInt } from '../src/utils/random.js';
import { isPrime, generateRound } from '../src/games/prime.js';

// Мокаем функцию random
jest.mock('../src/utils/random.js', () => ({
  getSecureRandomInt: jest.fn(),
}));

describe('Простое число (prime.js)', () => {
  // Тестируем чистую функцию isPrime
  describe('isPrime function', () => {
    test('returns false for numbers less than 2', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });

    test('returns true for 2 (smallest prime)', () => {
      expect(isPrime(2)).toBe(true);
    });

    test('returns true for prime numbers', () => {
      expect(isPrime(3)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });

    test('returns false for even numbers greater than 2', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(10)).toBe(false);
      expect(isPrime(98)).toBe(false);
    });

    test('returns false for odd composite numbers', () => {
      expect(isPrime(9)).toBe(false);
      expect(isPrime(15)).toBe(false);
      expect(isPrime(49)).toBe(false);
    });
  });

  // Тестируем generateRound с моком
  describe('generateRound function', () => {
    test('should return "yes" for prime number', () => {
      getSecureRandomInt.mockReturnValueOnce(7);

      const [question, answer] = generateRound();

      expect(question).toBe('7');
      expect(answer).toBe('yes');
      expect(getSecureRandomInt).toHaveBeenCalledWith(1, 100);
    });

    test('should return "no" for composite number', () => {
      getSecureRandomInt.mockReturnValueOnce(10);

      const [question, answer] = generateRound();

      expect(question).toBe('10');
      expect(answer).toBe('no');
      expect(getSecureRandomInt).toHaveBeenCalledWith(1, 100);
    });
  });
});