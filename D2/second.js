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
// }a  b   c
  //                         x  y    z
// rock paper scissors 0 3 6  lose draw win
function getResult(x, y) {
  if (x === 'A') {
    switch (y) {
      case 'X':
        return 3;
      case 'Y':
        return 1;
      case 'Z':
        return 2;
    }
  } else if (x === 'B') {
    switch (y) {
      case 'X':
        return 1;
      case 'Y':
        return 2;
      case 'Z':
        return 3;
    }
  } else if (x === 'C') {
    switch (y) {
      case 'X':
        return 2;
      case 'Y':
        return 3;
      case 'Z':
        return 1;
    }
  }
}

for (const v of input) {
  count += Math.abs(getResult(v[0], v[2]));
  // console.log(Math.abs(6-getResult(v[0], v[2])));

  switch (v[2]) {
    case 'X':
      count += 0;
      break;
    case 'Y':
      count +=3;
      break;
    case 'Z':
      count +=6;
      break;
  }
  // console.log(count)
}

console.log(count);


// ----------- GUESSES -------------------------
