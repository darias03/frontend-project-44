jest.mock('../src/utils/random.js', () => ({
    getSecureRandomInt: jest.fn(),
  }));
  
  import { calculate, generateRound } from '../src/games/calc.js';
  import { getSecureRandomInt } from '../src/utils/random.js';
  
  test('generateRound returns correct question and answer', () => {
    getSecureRandomInt
      .mockReturnValueOnce(2) // num1
      .mockReturnValueOnce(3) // num2
      .mockReturnValueOnce(0); // '+'
  
    const [question, answer] = generateRound();
  
    expect(question).toBe('2 + 3');
    expect(answer).toBe('5');
  });