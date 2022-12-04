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
  map(a => a.split(",").map(b => b.split("-"))),

);

for ([c, d] of r) {
  if (parseInt(c[0]) <= parseInt(d[0]) && parseInt(c[1]) >= parseInt(d[0])) {
    count ++;
  } else if (parseInt(d[0]) <= parseInt(c[0]) && parseInt(d[1]) >= parseInt(c[0])) {
    count++;
  }
}
print(count)








// ----------- GUESSES -------------------------


//
