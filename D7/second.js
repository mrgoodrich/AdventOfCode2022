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

class Command {
  constructor(cmd, args, output) {
    this.cmd = cmd;
    this.args = args;
    this.output = output;
  }
}

function mapToCommands(fullOutput) {
  let commands = [];
  for (let ndx = 0; ndx < fullOutput.length; ndx++) {
    let prompt = fullOutput[ndx].split(' ');
    let output = [];
    while (ndx < fullOutput.length - 1 && !fullOutput[ndx + 1].startsWith('$')) {
      ndx++;
      output.push(fullOutput[ndx].split(' '));
    }
    commands.push(new Command(prompt[1], prompt.slice(2), output));
  }
  return commands;
}

let commands = mapToCommands(input);
// console.log(commands);

let filesys = new Map();
let pwd = filesys;

function cd(command) {
  if (command.args[0] === '..') {
    pwd = pwd.get('..');
  } else {
    let childKey = command.args[0];
    if (!pwd.get(childKey)) {
      pwd.set(childKey, new Map([['..', pwd]]));
    }
    pwd = pwd.get(childKey);
  }
}
function ls(command) {
  for (let output of command.output) {
    if (output[0] === 'dir') {
      let child = new Map([['..', pwd]]);
      pwd.set(output[1], child);
    } else {
      pwd.set(output[1], output[0]);
    }
  }
}
function runCommands(commands) {
  for (let command of commands) {
    switch (command.cmd) {
      case 'cd':
        cd(command);
        break;
      case 'ls':
        ls(command);
        break;
      default:
        break;
    }
  }
}
runCommands(commands);
// console.log(filesys);

function getDirectorySize(directory) {
  let bytes = 0;
  for (const [key, value] of directory.entries()) {
    if (key === '..') {
      // break;
    } else {
      if (value instanceof Map) {
        bytes += getDirectorySize(value);
      } else {
        bytes += parseInt(value);
      }
    }
  }
  return bytes;
}

let rootSize = getDirectorySize(filesys);
let machineSize = 70000000;
let freeSpace = machineSize - rootSize;
let neededSpace = 30000000 - freeSpace;

let bestToRemove = ['unset', 1000000000000];

function findBest(sys, thisKey) {
  let bytes = 0;
  for (const [key, value] of sys.entries()) {
    if (key === '..') {
      // break;
    } else {
      if (value instanceof Map) {
        bytes += findBest(value, key);
      } else {
        bytes += parseInt(value);
      }
    }
  }
  if (bytes > neededSpace && bytes < bestToRemove[1]) {
    bestToRemove[0] = thisKey;
    bestToRemove[1] = bytes;
  }
  return bytes;
}

findBest(filesys, 'ROOT');

console.log(bestToRemove[1]);





// ----------- GUESSES -------------------------


//
