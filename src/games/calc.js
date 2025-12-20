import { getSecureRandomInt } from '../utils/random.js';

// Добавьте массив операторов (его не было в коде)
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('Unknown operator');
    }
};

const generateRound = () => { // Исправлено: было generateBound
    const num1 = getSecureRandomInt(1, 80);
    const num2 = getSecureRandomInt(1, 80);
    const operatorIndex = getSecureRandomInt(0, operators.length - 1);
    const operator = operators[operatorIndex];

    const question = `${num1} ${operator} ${num2}`; // Исправлены кавычки
    const correctAnswer = String(calculate(num1, num2, operator));

    return [question, correctAnswer];
};

export { calculate, generateRound }; // Исправлено: было generateBound