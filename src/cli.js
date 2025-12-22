import readlineSync from 'readline-sync'

export class lab {
  static hello() {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    return name
  }

  static getProgression() {
    const length = Math.floor(Math.random() * 6) + 5
    const start = Math.floor(Math.random() * 20) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const hiddenIndex = Math.floor(Math.random() * length)

    const progression = []
    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step)
    }

    const hiddenNumber = progression[hiddenIndex]
    progression[hiddenIndex] = '..'

    return {
      question: progression.join(' '),
      answer: hiddenNumber.toString(),
    }
  }

  static progression() {
    const name = this.hello()
    console.log('What number is missing in the progression?')

    let correctCount = 0
    const rounds = 3

    while (correctCount < rounds) {
      const { question, answer } = this.getProgression()
      console.log(`Question: ${question}`)
      const userAnswer = readlineSync.question('Your answer: ').trim()

      if (userAnswer === answer) {
        console.log('Correct!')
        correctCount += 1
      }
      else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
        console.log(`Let's try again, ${name}!`)
        return
      }
    }

    console.log(`Congratulations, ${name}!`)
  }

  static isPrime(n) {
    if (n <= 1) return false
    if (n <= 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false
    }
    return true
  }

  static prime() {
    const name = this.hello()
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    let correctCount = 0
    const rounds = 3

    while (correctCount < rounds) {
      const number = Math.floor(Math.random() * 99) + 2
      const correctAnswer = this.isPrime(number) ? 'yes' : 'no'

      console.log(`Question: ${number}`)
      const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

      if (userAnswer === correctAnswer) {
        console.log('Correct!')
        correctCount += 1
      }
      else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        return
      }
    }

    console.log(`Congratulations, ${name}!`)
  }

  static gcd(a, b) {
    let x = Math.abs(a)
    let y = Math.abs(b)
    while (y !== 0) {
      const temp = y
      y = x % y
      x = temp
    }
    return x
  }

  static commonDivisor() {
    const name = this.hello()
    console.log('Find the greatest common divisor of given numbers.')

    let correctCount = 0
    const rounds = 3

    while (correctCount < rounds) {
      const num1 = Math.floor(Math.random() * 100) + 1
      const num2 = Math.floor(Math.random() * 100) + 1
      const correctAnswer = this.gcd(num1, num2)

      console.log(`Question: ${num1} ${num2}`)
      const userAnswer = readlineSync.question('Your answer: ').trim()

      if (Number(userAnswer) === correctAnswer) {
        console.log('Correct!')
        correctCount += 1
      }
      else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        return
      }
    }

    console.log(`Congratulations, ${name}!`)
  }

  static calc() {
    const name = this.hello()
    console.log('What is the result of the expression?')

    let correctCount = 0
    const rounds = 3

    while (correctCount < rounds) {
      const a = Math.floor(Math.random() * 20) + 1
      const b = Math.floor(Math.random() * 20) + 1
      const ops = ['+', '-', '*']
      const op = ops[Math.floor(Math.random() * ops.length)]

      let result
      switch (op) {
        case '+':
          result = a + b
          break
        case '-':
          result = a - b
          break
        case '*':
          result = a * b
          break
        default:
          result = 0
      }

      console.log('Question: ' + a + ' ' + op + ' ' + b)
      const userAnswer = readlineSync.question('Your answer: ').trim()

      if (userAnswer === result.toString()) {
        console.log('Correct!')
        correctCount += 1
      }
      else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`)
        console.log(`Let's try again, ${name}!`)
        return
      }
    }

    console.log(`Congratulations, ${name}!`)
  }

  static parity() {
    const name = this.hello()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let correctCount = 0
    const rounds = 3

    while (correctCount < rounds) {
      const number = Math.floor(Math.random() * 100) + 1
      const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

      console.log(`Question: ${number}`)
      const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

      if (userAnswer === correctAnswer) {
        console.log('Correct!')
        correctCount += 1
      }
      else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        return
      }
    }

    console.log(`Congratulations, ${name}!`)
  }
}
