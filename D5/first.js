const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const r = /(move )(\d+)( from )(\d+)( to )(\d+)\n/gm

const regex = r; //      /()\n/gm;

let input = [];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push([parseInt(result[2]), parseInt(result[4]), parseInt(result[6])]);
}

let stacks = [['Q', 'W', 'P', 'S', 'Z', 'R', 'H', 'D'],['V', 'B', 'R', 'W', 'Q', 'H', 'F'],
['C','V','S','H'],
['H','F','G'],
['P','G','J','B','Z'],
['Q','T','J','H','W','F','L'],
['Z','T','W','D','L','V','J','N'],
['D','T','Z','C','J','G','H','F'],
['W','P','V','M','B','H']
];
// let stacks = [['Z', 'N'],['M','C','D'],['P']];

for (let [count, orig, dest] of input) {
  for (let num = 0; num < count; num++) {
    if (stacks[orig-1].length > 0) {
      let o = stacks[orig-1];
      let take = o[o.length-1];
      o.splice(-1, 1);
      stacks[dest-1].push(take);
    }
  }
}

print(
  execPipe(stacks,
    map(v => v.length ? v[v.length-1] : ''),
    str
  )
)




// ----------- GUESSES -------------------------


//
