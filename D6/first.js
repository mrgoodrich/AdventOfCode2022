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

input = input[0];
for (let v of input) {
  if (lastfour.length== 4) {
    lastfour.shift();
  }

  if (lastfour.length == 3 && !lastfour.includes(v) && (lastfour[0] != lastfour[1]) && (lastfour[1] != lastfour[2]) && lastfour[0] != lastfour[2]) {
    print(count + 1)
    break;
  } else {
    lastfour.push(v);

  }
  count++;
}








// ----------- GUESSES -------------------------


//
