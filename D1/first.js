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

for (const v of input) {
}



// ----------- GUESSES -------------------------
