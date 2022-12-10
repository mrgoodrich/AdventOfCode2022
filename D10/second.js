const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = entireLine; // /([^\n]*)\n/gm

let input = [];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);
}

let reg = 1;
let cycle = 0;
let strength = 0;

let screen = '';

let crtpos = 0;

for (let instr of input) {
  let cycleBefore = cycle;
  let args = instr.split(' ')
  let regBefore = reg;
  switch (args[0]) {
    case 'noop':
      check();
      cycle++;
      break;
    case 'addx':
      check();
      cycle++;
      check();
      cycle++;
      reg += parseInt(args[1]);
    default:
      break;
  }
}

function check() {
  if (Math.abs(reg - crtpos) <= 1) {
    screen += '#';
  } else {
    screen += '.'
  }
  crtpos++;

  if (crtpos == 40) {
    crtpos = 0;
    print(screen)
    screen = ''
  }
}



// ----------- GUESSES -------------------------


//
