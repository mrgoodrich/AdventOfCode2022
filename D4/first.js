const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = entireLine; //      /()\n/gm;

let input = [];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);
}

let r = execPipe(input,
  map(a => a.split(",")),
  map(flatMap(a=>a.split('-'))),
  map(map(a => parseInt(a))),
  mapToArray,
  filter(a =>
    (a[0] <= a[2] && a[1] >= a[3]) ||
      (a[2] <= a[0] && a[3] >= a[1])
  ),
  size
);
print(r)







// ----------- GUESSES -------------------------


//
