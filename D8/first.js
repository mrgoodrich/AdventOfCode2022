const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
eval(fs.readFileSync('../device-utils.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = entireLine; // /([^\n]*)\n/gm

let input = [];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);
}

class Command {
  constructor(cmd, args, output) {
    this.cmd = cmd;
    this.args = args;
    this.output = output;
  }
}
// Command
//   cmd: 'cd'
//   args: ['/']
//   output: [['dir', 'bqc'], ['143562', 'nrwjb']]

let computer = {
  'cd': (command) => {
    if (command.args[0] === '..') {
      pwd = pwd.get('..');
    } else {
      let childKey = command.args[0];
      if (!pwd.get(childKey)) {
        pwd.set(childKey, new Map([['..', pwd]]));
      }
      pwd = pwd.get(childKey);
    }
  },

  'ls': (command) => {
    for (let output of command.output) {
      if (output[0] === 'dir') {
        let child = new Map([['..', pwd]]);
        pwd.set(output[1], child);
      } else {
        pwd.set(output[1], output[0]);
      }
    }
  },

  '': (command) => {

  }
}

const commands = parseCommands(input);
const filesys = new Map();
let pwd = filesys;

// console.log(commands);
runComputer(commands);
// console.log(filesys);

// let fileSysSize = getDirectorySize(filesys);
// console.log(fileSysSize);





// ----------- GUESSES -------------------------


//
