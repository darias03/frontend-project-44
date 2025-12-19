const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  
  const limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) return false;
  }
  
  return true;
};
  
const generateRound = () => {
  const number = getSecureRandomInt(1, 100);
  
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return [question, correctAnswer];
};
  
export { isPrime, generateRound };
