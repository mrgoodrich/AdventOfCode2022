// ----------- PACKAGES -----------------------
const fs = require('fs');
Object.entries(require('iter-tools')).forEach(([name, exported]) => global[name] = exported);
const it = require('itertools');
// const Map = require('collections/map');
const pycollections = require('pycollections');

function print(s) {
  console.log(s);
}
function iprint(s) {
  print([...s]);
}
let sum = a => reduce((c,d) => c + d, a);
let sorted = takeSorted;
let sortedReverse = takeSorted((a, b) => b-a);
let toInt = map(a => parseInt(a));

// if o is GeneratorFunctionPrototype [Generator] {}
// [...o] or Array.from(o)

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


print(execPipe(input,
  toInt,
  splitOn(NaN),
  map(sum),
  sortedReverse,
  take(3),
  sum
))


// print(input)
// let nums = iT.map(a => parseInt(a), input);
// let nparagraphs = iT.map(iT.toArray, iT.splitOn(NaN, nums));
// let isums = iT.map(a => it.sum(a), nparagraphs);
// let tot = iT.findBest(iT.firstHighest, isums);
// print(tot)

// iT.map((a) => it.sum(parseInt(a)), )
// print(it.sum(iT.map((a) => it.sum(parseInt(a)), iT.splitOn('', input))));




iprint(execPipe(input,
  splitOn(''),
  map(a => reduce("", (result, v) => result + " " + v, a)),
  map(a => a.trim().split(" ")),
  map(a => {
    return toArray(flatMap(b => b.split(":"), a))
  })

));










// ----------- GUESSES -------------------------


//
