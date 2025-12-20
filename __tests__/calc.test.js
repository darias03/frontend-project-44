import { getSecureRandomInt } from '../src/utils/random.js';
import { calculate, generateRound } from '../src/games/calc.js';

// Мокаем (заменяем) функцию getSecureRandomInt для тестов
jest.mock('../src/utils/random.js', () => ({
    getSecureRandomInt: jest.fn(), // Только функция, не весь модуль
  }));

describe('Калькулятор (calc.js)', () => {
    // 1. Тестируем функцию calculate
    describe('calculate function', () => {
        test('correctly adds two numbers', () => {
            expect(calculate(2, 3, '+')).toBe(5);
        });

        test('correctly subtracts two numbers', () => {
            expect(calculate(5, 3, '-')).toBe(2);
        });

        test('correctly multiplies two numbers', () => {
            expect(calculate(5, 3, '*')).toBe(15);
        });

        test('throws error on unknown operator', () => {
            expect(() => calculate(2, 3, '/')).toThrow('Unknown operator');
        });
    });

    // 2. Тестируем функцию generateRound
    describe('generateRound function', () => {
        test('should return correct question and answer for addition', () => {
            // Настраиваем мок возвращение значений
            getSecureRandomInt
                .mockReturnValueOnce(2) // первое число
                .mockReturnValueOnce(3) // второе число
                .mockReturnValueOnce(0); // индекс оператора для '+'

            const [question, answer] = generateRound();

            // Проверяем результат
            expect(question).toBe('2 + 3');
            expect(answer).toBe('5');
            // Проверяем, что мок был вызван нужное количество раз
            expect(getSecureRandomInt).toHaveBeenCalledTimes(3);
        });
    });
});