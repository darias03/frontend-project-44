import { getSecureRandomInt } from '../src/utils/random.js';

test('generateRound возвращает корректный вопрос и ответ', () => {
  getSecureRandomInt
    .mockReturnValueOnce(2) // num1
    .mockReturnValueOnce(3) // num2
    .mockReturnValueOnce(0); // индекс оператора '+'

  const [question, answer] = generateRound();

  expect(question).toBe('2 + 3');
  expect(answer).toBe('5');
});
