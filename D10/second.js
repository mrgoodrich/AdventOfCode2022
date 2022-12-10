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
let cycle = 0;

let strength = 0;

let keys = [20, 60, 100, 140, 180, 220];

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
  // if (keys[0] == cycle) {
  //   strength += keys[0] * reg;
  //   console.log('reg ' + reg)
  //   console.log('adding ' + keys[0] * reg)
  //   keys = keys.slice(1);
  // }
  // if (keys.length == 0) {
  //   print(strength);
  //   exit(1);
  // }
    //print('cycle: ' + cycle);
    //print('   register ' + reg)
    //print('   crt ' + crtpos)
  if (Math.abs(reg - crtpos) <= 1) {
    screen += '#';
    //print('   #')
  } else {
    screen += '.'
    //print('   .')
  }
  crtpos++;

  if (crtpos == 40) {
    crtpos = 0;
    print(screen)
    screen = ''
  }
}

// for (let i = 0; i < 10; i++) {
//   // print((i * 40) + ','+  ((i+1)*40 - 1) )
//   print(screen.substring((i * 40) ,  ((i+1)*40 - 1)))
// }







// ----------- GUESSES -------------------------


//
