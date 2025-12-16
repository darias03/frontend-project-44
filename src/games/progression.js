const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
  
const generateRound = () => {
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const length = 10;
  const hiddenIndex = Math.floor(Math.random() * length);
  
  const progression = generateProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};
  
export { generateRound };
