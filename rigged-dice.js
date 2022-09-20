
const prompt = require('prompt-sync')();

let rigged = prompt('What is your rigged number?');

let roll = Math.ceil(Math.random() * 7);

console.log(`Actual Roll: ${roll}`);
if (roll == 7){
  console.log(rigged);
} else {
  console.log(roll);
}
