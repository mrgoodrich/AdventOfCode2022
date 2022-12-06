const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = entireLine; // /([^\n]*)\n/gm

let input = [];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);
}

let lastfour = [];
// let firstIter =
// print(execPipe(input,
//
// ));
let x = 14;

function hasRepeats (str) {
    return /(.).*\1/.test(str);
}

input = input[0];
for (let v of input) {
  if (lastfour.length== x) {
    lastfour.shift();
  }

  if (lastfour.length == x-1 && !lastfour.includes(v) && !hasRepeats(lastfour.join(""))) {
    print(count + 1)
    break;
  } else {
    lastfour.push(v);

  }
  count++;
}








// ----------- GUESSES -------------------------


//
