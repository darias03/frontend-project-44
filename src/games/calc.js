const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
  case '+': return num1 + num2;
  case '-': return num1 - num2;
  case '*': return num1 * num2;
  default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getSecureRandomInt(1, 50);
  const num2 = getSecureRandomInt(1, 50);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  
  return [question, correctAnswer];
};

export { generateRound };
