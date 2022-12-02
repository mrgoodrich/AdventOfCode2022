// ----------- PACKAGES -----------------------
const fs = require('fs');
const {all, any, contains, enumerate, filter, iter, map, partition, permutations, range, reduce, reduce_, sorted, sum, toArray, zip, zip3} = require('iter-tools');
const {max, min} = require('itertools');
// const Map = require('collections/map');
const pycollections = require('pycollections');

// ----------- INPUT SETUP --------------------
const inFile = fs.readFileSync('inputs/input', 'utf8');

// ----------- TESTING AND REGEX -----®---------
const nonWhitespace = /\S+/g;
const positiveOrNegativeNumber = /(-?)(\d+)/g;
const numberAndWord = /(-?)(\d+) \S+/g;
const entireLine = /([^\n]*)\n/gm

const regex = entireLine; //      /()\n/gm;

let input = [];
let count = 0;
let d = new pycollections.Dict();
let dd = new pycollections.DefaultDict([].constructor);
let c = new pycollections.Counter();
let od = new pycollections.OrderedDict();

let NT = pycollections.NamedTuple('Js', ['a', 'b']);
let nt = new NT(1, 2);

// ----------- SOLUTION ------------------------
let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);

}

// for (const ndx in input) {
//
// }

// for (const v of input) {
//   for (const v2 of input) {
//
//   }
// }
// rock paper scissors 0 3 6
function getResult(x, y) {
  if (x === 'A') {
    switch (y) {
      case 'X':
        return 3;
      case 'Y':
        return 0;
      case 'Z':
        return 6;
    }
  } else if (x === 'B') {
    switch (y) {
      case 'X':
        return 6;
      case 'Y':
        return 3;
      case 'Z':
        return 0;
    }
  } else if (x === 'C') {
    switch (y) {
      case 'X':
        return 0;
      case 'Y':
        return 6;
      case 'Z':
        return 3;
    }
  }
}

for (const v of input) {
  count += Math.abs(6-getResult(v[0], v[2]));
  // console.log(Math.abs(6-getResult(v[0], v[2])));

  switch (v[2]) {
    case 'X':
      count += 1;
      break;
    case 'Y':
      count +=2;
      break;
    case 'Z':
      count +=3;
  }
  // console.log(count)
}

console.log(count);


// ----------- GUESSES -------------------------
