#!/usr/bin/env node
import { runGame } from '../src/engine.js';
import { generateRound } from '../src/games/calc.js';

const description = 'What is the result of the expression?';
runGame(description, generateRound);