import { getSecureRandomInt } from '../src/utils/random.js';
import { calculateGcd, generateRound } from '../src/games/gcd.js';

// Мокаем функцию random
jest.mock('../src/utils/random.js', () => ({
  getSecureRandomInt: jest.fn(),
}));

describe('НОД (gcd.js)', () => {
  // Тестируем чистую функцию calculateGcd
  describe('calculateGcd function', () => {
    test('gcd of 54 and 24 is 6', () => {
      expect(calculateGcd(54, 24)).toBe(6);
    });

    test('gcd of 17 and 13 is 1 (coprime)', () => {
      expect(calculateGcd(17, 13)).toBe(1);
    });

    test('gcd of a number and itself is the number', () => {
      expect(calculateGcd(7, 7)).toBe(7);
    });

    test('gcd with zero is the non-zero number', () => {
      expect(calculateGcd(0, 5)).toBe(5);
      expect(calculateGcd(5, 0)).toBe(5);
    });

    test('works with negative numbers', () => {
      expect(calculateGcd(-54, 24)).toBe(6);
      expect(calculateGcd(54, -24)).toBe(6);
    });
  });

  // Тестируем generateRound с моком
  describe('generateRound function', () => {
    test('should return correct question and answer', () => {
      // Мокаем возвращаемые значения
      getSecureRandomInt
        .mockReturnValueOnce(54) // num1
        .mockReturnValueOnce(24); // num2

      const [question, answer] = generateRound();

      expect(question).toBe('54 24');
      expect(answer).toBe('6');
      // Проверяем, что функция вызывалась с правильными аргументами
      expect(getSecureRandomInt).toHaveBeenCalledWith(1, 50);
      expect(getSecureRandomInt).toHaveBeenCalledTimes(2);
    });
  });
});