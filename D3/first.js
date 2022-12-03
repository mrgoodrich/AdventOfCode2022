// ----------- PACKAGES -----------------------
const fs = require('fs');
// {all, any, contains, enumerate, filter, iter, map, partition, permutations, range, reduce, reduce_, sorted, sum, toArray, zip, zip3}
const iterTools = require('iter-tools');
// {max, min}
const itertools = require('itertools');
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

// for (const v of input) {
// }
// iterTools  itertools

let r = itertools.map(input, (a) => {
  let f = a.slice(0, a.length / 2);
  let s = a.slice(a.length / 2, a.length);

  let f1 = {};
  let f1find;
  for (const letter of f) {
    if (s.includes(letter)) {
      f1find = letter;
      break;
    }
  }
    // console.log('B');
  // let v = f1find.charCodeAt(0);
  if (f1find.charCodeAt(0) - 96 > 0) {
    return f1find.charCodeAt(0) - 96;
  } else {
    return f1find.charCodeAt(0) - 38;
  }


  // let fg = itertools.groupby(f);
  // console.log(fg.next())
  // for (const a in fg) {
  //   console.log(a);
  // }
  // console.log(fg);

  // let im = []
  // return [];
});



// r =
// console.log(r)
console.log(itertools.sum(r));

// ----------- GUESSES -------------------------
