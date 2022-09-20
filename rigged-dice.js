'use strict';

const prompt = require('prompt-sync')();

let rigged = Number(prompt('What will your rigged number be?'));

let random = Math.ceil(Math.random() * 6);

console.log(random);

if(random == rigged){
  console.log('Matched!');
}