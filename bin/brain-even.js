#!/usr/bin/env node
import { runGame } from '../src/engine.js';
import { generateRound } from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(description, generateRound);