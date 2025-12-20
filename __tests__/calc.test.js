// tests/calc.test.js
import { getSecureRandomInt } from '../src/utils/random.js';
import { calculate, generateRound } from '../src/games/calc.js';

// Мокаем рандомную функцию
jest.mock('../src/utils/random.js', () => ({
    getSecureRandomInt: jest.fn()
}));

describe('Calculator Game (calc.js)', () => {
    // Тест 1: Проверка импорта
    test('should import all functions correctly', () => {
        expect(typeof calculate).toBe('function');
        expect(typeof generateRound).toBe('function');
        expect(typeof getSecureRandomInt).toBe('function');
    });

    // УДАЛИТЕ этот тест или исправьте его:
    // test('should have operators array defined', () => {
    //     // Вместо require используйте уже импортированные функции
    //     // или проверьте косвенно через calculate
    //     expect(calculate(2, 3, '+')).toBe(5);
    // });

    describe('calculate function', () => {
        test('should add two numbers correctly', () => {
            expect(calculate(5, 3, '+')).toBe(8);
            expect(calculate(0, 0, '+')).toBe(0);
            expect(calculate(-5, 10, '+')).toBe(5);
        });

        test('should subtract two numbers correctly', () => {
            expect(calculate(5, 3, '-')).toBe(2);
            expect(calculate(3, 5, '-')).toBe(-2);
            expect(calculate(0, 5, '-')).toBe(-5);
        });

        test('should multiply two numbers correctly', () => {
            expect(calculate(5, 3, '*')).toBe(15);
            expect(calculate(0, 5, '*')).toBe(0);
            expect(calculate(-5, 3, '*')).toBe(-15);
        });

        test('should throw error for unknown operator', () => {
            expect(() => calculate(5, 3, '/')).toThrow('Unknown operator');
            expect(() => calculate(5, 3, '%')).toThrow('Unknown operator');
        });

        test('should handle all operators from operators array', () => {
            expect(calculate(10, 5, '+')).toBe(15);
            expect(calculate(10, 5, '-')).toBe(5);
            expect(calculate(10, 5, '*')).toBe(50);
        });
    });

    describe('generateRound function', () => {
        beforeEach(() => {
            getSecureRandomInt.mockClear();
        });

        test('should generate round with addition', () => {
            getSecureRandomInt
                .mockReturnValueOnce(5)    // num1
                .mockReturnValueOnce(3)    // num2
                .mockReturnValueOnce(0);   // operatorIndex для '+'

            const [question, answer] = generateRound();

            expect(question).toBe('5 + 3');
            expect(answer).toBe('8');
            expect(getSecureRandomInt).toHaveBeenCalledTimes(3);
        });

        test('should generate round with subtraction', () => {
            getSecureRandomInt
                .mockReturnValueOnce(10)   // num1
                .mockReturnValueOnce(3)    // num2
                .mockReturnValueOnce(1);   // operatorIndex для '-'

            const [question, answer] = generateRound();

            expect(question).toBe('10 - 3');
            expect(answer).toBe('7');
        });

        test('should generate round with multiplication', () => {
            getSecureRandomInt
                .mockReturnValueOnce(7)    // num1
                .mockReturnValueOnce(6)    // num2
                .mockReturnValueOnce(2);   // operatorIndex для '*'

            const [question, answer] = generateRound();

            expect(question).toBe('7 * 6');
            expect(answer).toBe('42');
        });

        test('should call getSecureRandomInt with correct parameters', () => {
            getSecureRandomInt
                .mockReturnValueOnce(8)
                .mockReturnValueOnce(12)
                .mockReturnValueOnce(0);

            generateRound();

            expect(getSecureRandomInt).toHaveBeenCalledTimes(3);
            expect(getSecureRandomInt).toHaveBeenNthCalledWith(1, 1, 80);
            expect(getSecureRandomInt).toHaveBeenNthCalledWith(2, 1, 80);
            expect(getSecureRandomInt).toHaveBeenNthCalledWith(3, 0, 2);
        });

        test('should generate round with GCD of 1', () => {
            getSecureRandomInt
                .mockReturnValueOnce(7)
                .mockReturnValueOnce(13)
                .mockReturnValueOnce(0);

            const [question, answer] = generateRound();

            expect(question).toBe('7 + 13');
            expect(answer).toBe('20');
        });
    });

    // Альтернатива: если хотите проверить существование операторов напрямую
    test('should work with all defined operators', () => {
        // Этот тест косвенно проверяет, что операторы определены
        const results = [
            calculate(4, 2, '+'),
            calculate(4, 2, '-'),
            calculate(4, 2, '*')
        ];
        
        expect(results).toEqual([6, 2, 8]);
    });
});