import { getSecureRandomInt } from '../src/utils/random.js';
import { calculate, generateRound } from '../src/games/calc.js';

// Мокаем только конкретную функцию, а не весь модуль
jest.mock('../src/utils/random.js', () => ({
  getSecureRandomInt: jest.fn(),
}));

describe('Калькулятор (calc.js)', () => {
  // 1. Тест для чистой функции calculate
  describe('calculate function', () => {
    test('correctly adds two numbers', () => {
      expect(calculate(5, 3, '+')).toBe(8);
    });

    test('correctly subtracts two numbers', () => {
      expect(calculate(5, 3, '-')).toBe(2);
    });

    test('correctly multiplies two numbers', () => {
      expect(calculate(5, 3, '*')).toBe(15);
    });

    test('throws error on unknown operator', () => {
      expect(() => calculate(5, 3, '/')).toThrow('Unknown operator');
    });
  });

  // 2. Тест для generateRound с моком
  describe('generateRound function', () => {
    test('should return correct question and answer for addition', () => {
      // Задаём конкретные возвращаемые значения для мока
      getSecureRandomInt
        .mockReturnValueOnce(2) // num1
        .mockReturnValueOnce(3) // num2
        .mockReturnValueOnce(0); // operatorIndex для '+'

      const [question, answer] = generateRound();

      // Проверяем результат
      expect(question).toBe('2 + 3');
      expect(answer).toBe('5');
      // Проверяем, что мок был вызван с нужными аргументами
      expect(getSecureRandomInt).toHaveBeenCalledTimes(3);
    });
  });
});