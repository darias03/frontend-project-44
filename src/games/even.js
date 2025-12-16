const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};
  
export { generateRound };
