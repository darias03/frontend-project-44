import { runGame } from '../src/engine.js';
import { createInterface } from 'node:readline';

// Мокаем readline и console.log
jest.mock('node:readline');
jest.spyOn(console, 'log').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});

describe('Игровой движок (engine.js)', () => {
  let mockQuestion;
  let mockClose;

  beforeEach(() => {
    // Сбрасываем моки перед каждым тестом
    jest.clearAllMocks();
    
    mockQuestion = jest.fn();
    mockClose = jest.fn();
    
    // Настраиваем мок readline
    createInterface.mockReturnValue({
      question: mockQuestion,
      close: mockClose,
    });
  });

  test('runGame вызывает генерацию раунда и задаёт вопрос', () => {
    const mockGenerateRound = jest.fn()
      .mockReturnValue(['2 + 2', '4']);
    
    // Запускаем игру
    runGame('Test game', mockGenerateRound);
    
    // Проверяем, что генератор вызывался
    expect(mockGenerateRound).toHaveBeenCalled();
    
    // Проверяем, что вопрос был задан
    expect(mockQuestion).toHaveBeenCalledWith(
      'Your answer: ',
      expect.any(Function)
    );
  });

  test('завершает игру после 3 правильных ответов', () => {
    const mockGenerateRound = jest.fn()
      .mockReturnValueOnce(['Q1', 'A1'])
      .mockReturnValueOnce(['Q2', 'A2'])
      .mockReturnValueOnce(['Q3', 'A3']);
    
    runGame('Test game', mockGenerateRound);
    
    // Симулируем 3 правильных ответа
    const firstCall = mockQuestion.mock.calls[0][1];
    firstCall('A1');
    
    const secondCall = mockQuestion.mock.calls[1][1];
    secondCall('A2');
    
    const thirdCall = mockQuestion.mock.calls[2][1];
    thirdCall('A3');
    
    // Проверяем, что игра закрылась после победы
    expect(mockClose).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Congratulations, you won!');
  });

  test('завершает игру при неправильном ответе', () => {
    const mockGenerateRound = jest.fn()
      .mockReturnValue(['Q1', 'correct']);
    
    runGame('Test game', mockGenerateRound);
    
    // Симулируем неправильный ответ
    const callback = mockQuestion.mock.calls[0][1];
    callback('wrong');
    
    // Проверяем, что игра закрылась с ошибкой
    expect(mockClose).toHaveBeenCalled();
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});

// Мокаем process.exit
global.process.exit = jest.fn();
