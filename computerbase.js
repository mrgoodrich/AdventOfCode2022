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

let computer = {
  'cd': (command) => {
    // $ cd /
    // $ cd ..
    // $ cd bqc
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
    // $ ls
    //     5693 qqvdcclf
    //     dir rlf
    for (let output of command.output) {
      if (output[0] === 'dir') {
        let child = new Map([['..', pwd]]);
        pwd.set(output[1], child);
      } else {
        pwd.set(output[1], output[0]);
      }
    }
  },

  'mv': (command) => {
    // known bug: can't move into itself
    // known bug: needs support for mv file newdir/    where nothing after / of target
    // $ mv bqc ..
    // $ mv tvrms cmfphpc    116085 tvrms
    // $ mv mwmlf lqp        mwmlf Map(..)
    function mvRecur(tpwd, remaining, transitName, transitVal) {
      console.log(remaining)
      if (remaining.length == 1) {
        if (remaining[0] === '..') {
          mvRecur(tpwd.get('..'), [transitName], transitName, transitVal);
        } else if (remaining[0] === '' || remaining[0] === '/') {
          tpwd.set(transitName, transitVal);
        } else {
          tpwd.set(remaining[0], transitVal);
        }
      } else {
        if (!tpwd.has(remaining[0])) {
          tpwd.set(remaining[0], new Map([['..', tpwd]]));
        }
        mvRecur(tpwd.get(remaining[0]), remaining.slice(1), transitName, transitVal);
      }
    }
    let destination = command.args[1].split('/');
    let transitName = command.args[0];
    let transitVal = pwd.get(transitName);
    mvRecur(pwd, destination, transitName, transitVal);
    pwd.delete(transitName);
  }
}

// ___   .., myval   another  2222
// ___   myval       another  2222

// $ mv another ../myval

// Command
//   cmd: 'cd'
//   args: ['/']
//   output: [['dir', 'bqc'], ['143562', 'nrwjb']]

const commands = parseCommands(input);
const filesys = new Map();
let pwd = filesys;

// console.log(commands);
runComputer(commands);
console.log(filesys);

// let fileSysSize = getDirectorySize(filesys);
// console.log(fileSysSize);





// ----------- GUESSES -------------------------


//
