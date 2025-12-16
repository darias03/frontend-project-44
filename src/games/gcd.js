const calculateGcd = (a, b) => {
    let num1 = Math.abs(a);
    let num2 = Math.abs(b);
    
    while (num2) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    
    return num1;
  };
  
  const generateRound = () => {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    
    const question = `${num1} ${num2}`;
    const correctAnswer = String(calculateGcd(num1, num2));
    
    return [question, correctAnswer];
  };
  
  export { generateRound };