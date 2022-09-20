
const prompt = require('prompt-sync')();

let rigged = prompt('What is your rigged number?');

let roll = Math.ceil(Math.random() * 7);

if (roll == 7){
  console.log(rigged);
} else {
  console.log(roll);
}
