import { getSecureRandomInt } from '../src/utils/random.js';
import { isEven, generateRound } from '../src/games/even.js';

// Мокаем только функцию random
jest.mock('../src/utils/random.js', () => ({
  getSecureRandomInt: jest.fn(),
}));

describe('Чётность (even.js)', () => {
  // Тестируем чистую функцию isEven
  describe('isEven function', () => {
    test('even number returns true', () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
    });

    test('odd number returns false', () => {
      expect(isEven(7)).toBe(false);
      expect(isEven(1)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });
  });

  // Тестируем generateRound с моком
  describe('generateRound function', () => {
    test('should return correct question and answer for even number', () => {
      // Мокаем возврат ЧЁТНОГО числа
      getSecureRandomInt.mockReturnValueOnce(42);

      const [question, answer] = generateRound();

      expect(question).toBe('42');
      expect(answer).toBe('yes');
      expect(getSecureRandomInt).toHaveBeenCalledWith(1, 100);
    });

    test('should return correct question and answer for odd number', () => {
      // Мокаем возврат НЕЧЁТНОГО числа
      getSecureRandomInt.mockReturnValueOnce(17);

      const [question, answer] = generateRound();

      expect(question).toBe('17');
      expect(answer).toBe('no');
      expect(getSecureRandomInt).toHaveBeenCalledWith(1, 100);
    });
  });
});