
const prompt = require('prompt-sync')();

let rigged = prompt('What is your rigged number?');

let roll = Math.ceil(Math.random() * 6);

console.log(roll);

if (roll = 1){
  console.log(roll * 8);
} else if (roll = 2){
  console.log(roll *2);
} else if (roll = 3){
  console.log(roll * 3);
} else if (roll = 4){
  console.log(roll * 4);
} else if (roll = 5){
  console.log(roll * 6);
} else if (roll = 6){
  console.log('yes');
}
