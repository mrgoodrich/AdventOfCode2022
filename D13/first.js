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

function comparePacket([first, second]) {
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
    let result = comparePacket([first[ndx], second[ndx]]);
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

// let firstIter =
print(execPipe(input,
  // map(split),
  filter(v=>v),
  splitGroups((value, idx) => Math.floor(idx / 2)),
  map(arrayLast),
  map(comparePacket),
  map(v => v == -1 || v == 0),
  enumerate(1),
  filter(v => v[1]),
  map(v => v[0]),
  sum
));










// ----------- GUESSES -------------------------


//
