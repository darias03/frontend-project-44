const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getSecureRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

export { isEven, generateRound };
