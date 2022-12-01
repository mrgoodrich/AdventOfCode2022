// ----------- PACKAGES -----------------------
const fs = require('fs');
const iter = require('iter-tools');
const {max, min, sorted} = require('itertools');
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
let tot  = 0;
let sums = [];

for (const v of input) {
  // console.log(parseInt(v));
  if (v) {
    tot += parseInt(v);
    // console.log(parseInt(v))
    // console.log(tot)
  }
  if (!v) {
    // console.log(tot);
    sums.push(tot);
    tot = 0;
  }
}
let s = sorted(sums);
let r = iter.arrayFrom(iter.reverse(s));
console.log(r[0] + r[1] + r[2]);



// ----------- GUESSES -------------------------
