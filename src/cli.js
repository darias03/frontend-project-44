import { createInterface } from 'node:readline';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question('May I have your name? ', (name) => {
      console.log(`Hello, ${name.trim()}!`);
      rl.close();
      resolve();
    });
  });
};

export default greetUser;