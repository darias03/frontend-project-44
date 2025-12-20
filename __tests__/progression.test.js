import { getSecureRandomInt } from '../src/utils/random.js';
import { generateRound } from '../src/games/progression.js';

// Мокаем функцию random
jest.mock('../src/utils/random.js', () => ({
  getSecureRandomInt: jest.fn(),
}));

describe('Арифметическая прогрессия (progression.js)', () => {
  // Вспомогательная функция для тестирования (если нужно)
  const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + step * i);
    }
    return progression;
  };

  // Тестируем generateRound с моком
  describe('generateRound function', () => {
    test('should return correct question and answer for hidden first element', () => {
      // Мокаем возвращаемые значения: start=2, step=3, hiddenIndex=0
      getSecureRandomInt
        .mockReturnValueOnce(2)  // start
        .mockReturnValueOnce(3)  // step
        .mockReturnValueOnce(0); // hiddenIndex

      const [question, answer] = generateRound();

      // Прогрессия: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29
      // С hiddenIndex=0: '.. 5 8 11 14 17 20 23 26 29'
      expect(question).toBe('.. 5 8 11 14 17 20 23 26 29');
      expect(answer).toBe('2'); // Первый элемент
      expect(getSecureRandomInt).toHaveBeenCalledTimes(3);
    });

    test('should return correct question and answer for hidden middle element', () => {
      // Мокаем: start=5, step=2, hiddenIndex=4
      getSecureRandomInt
        .mockReturnValueOnce(5)  // start
        .mockReturnValueOnce(2)  // step
        .mockReturnValueOnce(4); // hiddenIndex

      const [question, answer] = generateRound();

      // Прогрессия: 5, 7, 9, 11, 13, 15, 17, 19, 21, 23
      // С hiddenIndex=4: '5 7 9 11 .. 15 17 19 21 23'
      expect(question).toBe('5 7 9 11 .. 15 17 19 21 23');
      expect(answer).toBe('13'); // 5-й элемент (индекс 4)
    });

    test('should return correct question and answer for hidden last element', () => {
      // Мокаем: start=1, step=1, hiddenIndex=9
      getSecureRandomInt
        .mockReturnValueOnce(1)  // start
        .mockReturnValueOnce(1)  // step
        .mockReturnValueOnce(9); // hiddenIndex

      const [question, answer] = generateRound();

      // Прогрессия: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      // С hiddenIndex=9: '1 2 3 4 5 6 7 8 9 ..'
      expect(question).toBe('1 2 3 4 5 6 7 8 9 ..');
      expect(answer).toBe('10'); // Последний элемент
    });
  });

  // Опционально: тест для generateProgression (если она экспортируется)
  describe('generateProgression function', () => {
    test('generates correct arithmetic progression', () => {
      expect(generateProgression(2, 3, 5)).toEqual([2, 5, 8, 11, 14]);
      expect(generateProgression(0, 5, 4)).toEqual([0, 5, 10, 15]);
      expect(generateProgression(10, -1, 3)).toEqual([10, 9, 8]);
    });
  });
});