const generateRound = () => {
  const number = getSecureRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};
  
export { generateRound };
