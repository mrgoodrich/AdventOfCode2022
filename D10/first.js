const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = entireLine; // /([^\n]*)\n/gm

let input = [];
// let inputCopy = [...input];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);
}

// input = input[0];

// let firstIter =

let reg = 1;

// print(execPipe(input,
//   // map(split),
//
// ));
let cycle = 1;

let strength = 0;

let keys = [20, 60, 100, 140, 180, 220];


for (let instr of input) {
  let cycleBefore = cycle;
  let args = instr.split(' ')
  let regBefore = reg;
  switch (args[0]) {
    case 'noop':
      cycle++;
      check();
      break;
    case 'addx':
      cycle++;
      check();
      cycle++;
      reg += parseInt(args[1]);
      check();
    default:
      break;
  }
}

function check() {
  if (keys[0] == cycle) {
    strength += keys[0] * reg;
    console.log('reg ' + reg)
    console.log('adding ' + keys[0] * reg)
    keys = keys.slice(1);
  }
  if (keys.length == 0) {
    print(strength);
    exit(1);
  }
}








// ----------- GUESSES -------------------------


//
