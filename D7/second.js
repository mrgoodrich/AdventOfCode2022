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

let filesys = new Map();
let curdir = filesys;

// let firstIter =
// print(execPipe(input,
//   // splitOnSeq(''),
//   // mapToArray,
//
// ));

let active = '';

for (let ndx = 0; ndx < input.length; ndx++) {
  let v = input[ndx];
  let args = v.split(" ");
  if (v.startsWith("$")) {
    switch (args[1]) {
      case 'cd':
        if (args[2] === '..') {
          curdir = curdir.get('parent');
        } else {
          if (!curdir[args[2]]) {
            let n = new Map();
            n.set('parent', curdir);
            curdir.set(args[2], n);
          }
          curdir = curdir.get(args[2]);
        }
        break;
      case 'ls':
        active = 'ls';
        break;
      default:
    }
  } else {
    if (active === 'ls') {
      if (args[0] === 'dir') {
        let n = new Map();
        n.set('parent', curdir);
        curdir.set(args[1], n);
      } else {
        curdir.set(args[1], args[0]);
      }
    }
  }
}

// console.log(filesys)
let total = 0;

function getMapTotal(sys) {
  let bytes = 0;
  // console.log(Object.entries(sys))
  for (const [key, value] of sys.entries()) {
    if (key === 'parent') {
      // break;
    } else {
      if (value instanceof Map) {
        // console.log('calling with')
        // console.log(value)
        bytes += getMapTotal(value);
      } else {
        bytes += parseInt(value);
      }
    }
  }
  if (bytes <= 100000) {
    total += bytes;
  }
  return bytes;
}

let rootSize = getMapTotal(filesys);

let totalSize = 70000000;
let unused = totalSize - rootSize;

let needed = 30000000 - unused;

let curBestDir = 'none';
let curBest = 1000000000000;

function isCloser(bytes) {
  return bytes > needed && bytes < curBest;
}

function findBest(sys, thisKey) {
  let bytes = 0;
  // console.log(Object.entries(sys))
  for (const [key, value] of sys.entries()) {
    if (key === 'parent') {
      // break;
    } else {
      if (value instanceof Map) {
        // console.log('calling with')
        // console.log(value)
        bytes += findBest(value, key);
      } else {
        bytes += parseInt(value);
      }
    }
  }
  if (isCloser(bytes)) {
    curBestDir = thisKey;
    curBest = bytes;
  }
  return bytes;
}

findBest(filesys, 'ROOT');

console.log(curBest);


// console.log(total);





// ----------- GUESSES -------------------------


//
