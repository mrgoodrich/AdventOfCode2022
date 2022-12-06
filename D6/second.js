const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = entireLine; // /([^\n]*)\n/gm

let input = [];
let inputCopy = [...input];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);
}

input = input[0]

let startOfMessageLength = 14;

print(execPipe(input,
  splitOnSeq(''),
  flat,
  window(startOfMessageLength),
  map(pipe(wrap, distinct)),
  enumerate,
  filter(([a,b]) => size(b) == startOfMessageLength),
  map(take(1)),
  flat,
  add(startOfMessageLength),
  first
));






// ----------- GUESSES -------------------------


//
