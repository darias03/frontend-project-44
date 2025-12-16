import { createInterface } from 'readline';

const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (roundsLeft = 3) => {
    if (roundsLeft === 0) {
      console.log('Congratulations, you won!');
      rl.close();
      return;
    }

    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);

    rl.question('Your answer: ', (answer) => {
      if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log('Correct!');
        askQuestion(roundsLeft - 1);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log("Let's try again!");
        rl.close();
      }
    });
  };

  askQuestion();
};

export { runGame };