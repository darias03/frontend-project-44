import { getSecureRandomInt } from '../src/utils/random.js';
// Убедитесь, что импортируете правильную функцию generateRound
// Например, из calc.js (если это тест для калькулятора)
import { generateRound } from '../src/games/calc.js';

// Мокаем функцию random - ЭТО ОБЯЗАТЕЛЬНО
jest.mock('../src/utils/random.js', () => ({
  getSecureRandomInt: jest.fn(),
}));

describe('generateRound (тест для калькулятора)', () => {
  test('возвращает корректный вопрос и ответ для сложения', () => {
    // Настраиваем мок
    getSecureRandomInt
      .mockReturnValueOnce(2)  // num1
      .mockReturnValueOnce(3)  // num2
      .mockReturnValueOnce(0); // индекс оператора '+'

    const [question, answer] = generateRound();

    expect(question).toBe('2 + 3');
    expect(answer).toBe('5');
  });
});