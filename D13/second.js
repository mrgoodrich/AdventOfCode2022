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

class Packet {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

function toArray(v) {
  let depth = 0;
  let arr = [];
  let current = '';
  v = v.substring(1, v.length - 1);
  for (let char of v) {
    switch (char) {
      case '[':
        depth++;
        current += char;
        break;
      case ']':
        depth--;
        current += char;
        break;
      case ',':
        if (depth == 0) {
          arr.push(current);
          current = '';
        } else {
          current += char;
        }
        break;
      default:
        current += char;
    }
  }
  if (current) {
    arr.push(current);
  }
  return arr;
}

function isInt(v) {
  return !isNaN(v);
}

function comparePacket(first, second) {
  // if (first === undefined && second === undefined) {
  //   return 0;
  // }
  // if (first === undefined) {
  //   return 1;
  // }
  // if (second === undefined) {
  //   return -1;
  // }


  let intFirst = parseInt(first);
  let intSecond = parseInt(second);

  if (isInt(intFirst) && isInt(intSecond)) {
    if (intFirst < intSecond) {
      return -1;
    } else if (intFirst > intSecond) {
      return 1;
    }
    return 0;
  }
  if (isInt(intFirst) || isInt(intSecond)) {
    if (isInt(intFirst)) {
      first = `[${first}]`
    } else {
      second = `[${second}]`;
    }
  }
  first = toArray(first);
  second = toArray(second);

  for (let ndx = 0; ndx < first.length; ndx++) {
    if (ndx >= second.length) {
      continue;
    }
    let result = comparePacket(first[ndx], second[ndx]);
    switch (result) {
      case -1:
        return -1;
      case 0:
        break;
      case 1:
        return 1;
      default:
    }
  }

  if (second.length < first.length) {
    return 1;
  } else if (first.length < second.length) {
    return -1;
  }
  return 0;
}

let currentPacket;

let divTwo = '[[2]]';
let divSix = '[[6]]';

// let input1 = input;
let input1 = concat(input, [divTwo,divSix])
// let firstIter =
let res = execPipe(input1,
  filter(v=>v),
  sorted(comparePacket),
  enumerate(1)
);

let first = find(
  v => v[1] === divTwo,
res);
let second = find(
  v => v[1] === divSix,
res);

// let s = sorted(comparePacket, res)
print(first[0] * second[0]);









// ----------- GUESSES -------------------------


//
