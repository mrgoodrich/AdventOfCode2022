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

let knots = [];
for (let i = 0; i<10;i++) {
  knots.push([0,0]);
}
let visited = {};

for (let v of input) {
  let move = v.split(' ');
  for (let count = 0; count < move[1]; count++) {
    switch (move[0]) {
      case 'R':
          knots[0][0]++;
        break;
      case 'L':
          knots[0][0]--;
        break;
      case 'U':
          knots[0][1]++;
        break;
      case 'D':
          knots[0][1]--;
        break;
      default:
    }

    for (let knotNdx = 1; knotNdx < 10; knotNdx++) {
      moveKnot(knotNdx, move);

    }
    visited[[knots[9][0], knots[9][1]]] = 'Y';
  }
  // printKnots(knots);
}


function moveKnot(knotNdx, move) {
  let ahead = knots[knotNdx - 1];
  let current = knots[knotNdx];

  let xdiff = Math.abs(ahead[0] - current[0]);
  let ydiff = Math.abs(ahead[1] - current[1]);
  let x2 = xdiff == 2;
  let y2 = ydiff == 2;

  if (x2) {
    if (ahead[0] > current[0]) {
      current[0]++;
    } else {
      current[0]--;
    }
    if (ydiff) {
      if (ahead[1] > current[1]) {
        current[1]++;
      } else {
        current[1]--;
      }
    }
  } else if (y2) {
    if (ahead[1] > current[1]) {
      current[1]++;
    } else {
      current[1]--;
    }
    if (xdiff) {
      if (ahead[0] > current[0]) {
        current[0]++;
      } else {
        current[0]--;
      }
    }
  }
}


function printKnots() {
  print('')
  let locs = {};
  for (let ndx = 9; ndx >= 0; ndx--) {
    let knot = knots[ndx];
    locs[[knot[0], knot[1]]] = ndx;
  }

  for (let y = 10; y >= 0; y--) {
    let line = '';
    for (let x = 0; x < 15; x++) {
      if (locs[[x,y]] != null) {
        line += locs[[x,y]];
      } else {
        line += '.'
      }
    }
    console.log(line)
  }
}

function printVisited() {
  print('\n VISITED:  ')
  // print(visited)
  for (let y = 15; y > 0; y--) {
    let line = '';
    for (let x = 0; x < 25; x++) {
      if (visited[[x,y]]) {
        line += '#';
      } else {
        line += '.'
      }
    }
    console.log(line)
  }
}
// printVisited();

print(Object.keys(visited).length)









// ----------- GUESSES -------------------------


//
