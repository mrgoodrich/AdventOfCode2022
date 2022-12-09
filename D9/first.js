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


let h = [0, 0];
let t = [0, 0];

function catchUpY(notDiag) {
  if (!notDiag && h[0] != t[0]) {
    if (h[1] > t[1]) {
      t[1]++;
    } else {
      t[1]--;
    }
  }
}
function catchUpX(notDiag) {
  if (!notDiag && h[1] != t[1]) {
    if (h[0] > t[0]) {
      t[0]++;
    } else {
      t[0]--;
    }
  }
}
let visited = {};

for (let v of input) {
  let move = v.split(' ');
  for (let count = 0; count < move[1]; count++) {
    let notDiag = h[0] == t[0] || h[1] == t[1];
    switch (move[0]) {
      case 'R':
          h[0]++;
          if (Math.abs(h[0]-t[0]) == 2) {
            t[0]++;
          }
              catchUpY(notDiag)
        break;

      case 'L':
          h[0]--;
          if (Math.abs(h[0]-t[0]) == 2) {
            t[0]--;
          }
              catchUpY(notDiag);
        break;

      case 'U':
          h[1]++;
          if (Math.abs(h[1]-t[1]) == 2) {
            t[1]++;
          }
              catchUpX(notDiag);
        break;

      case 'D':
        h[1]--;
          if (Math.abs(h[1]-t[1]) == 2) {
            t[1]--;
          }
            catchUpX(notDiag);
        break;
      default:
    }
    visited[t[0]+','+t[1]] = 1;
  }
}

print(Object.keys(visited).length);









// ----------- GUESSES -------------------------


//
