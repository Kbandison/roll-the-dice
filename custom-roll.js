'use strict';

const prompt = require('prompt-sync')();

let custom = Number(prompt('How many sides does your dice have? '));

console.log(Math.ceil(Math.random() * custom));