import { getSecureRandomInt } from '../utils/random.js'; // Импортируем, а не создаём

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getSecureRandomInt(1, 20);
  const step = getSecureRandomInt(1, 10);
  const length = 10;
  const hiddenIndex = getSecureRandomInt(0, length - 1);

  const progression = generateProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export { generateRound };

