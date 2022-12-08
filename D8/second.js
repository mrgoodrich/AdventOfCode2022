const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = entireLine; // /([^\n]*)\n/gm

let input = [];
// let inputCopy = [...input];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);
}

// input = input[0];

// let firstIter =
// print(execPipe(input,
//   // splitOnSeq(''),
//   // mapToArray,
//
// ));

let visible = {};

// function setVis(row, col) {
//   if (!visible[row]) {
//     visible[row] = {};
//   }
//   visible[row][col] = 1;
// }

function getDist(tree, others, row, col) {
  let dist = 0;
  // print('comparing ' + tree + ' with  ' + others)
  if (others.length == 0) {
    dist = 0;
  }
  for (let other of others) {
    if (tree <= other) {
      // print('returning ' + (dist + 1))
      return dist + 1;
    } else {
      dist++;
    }
  }
    // print('returning ' + (dist ))
  return dist;
}

let best = 0;

function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

for (let row = 0; row < input.length; row++) {
  let rowVal = input[row];
  for (let col = 0; col < rowVal.length; col++) {
    let tree = rowVal[col];
    let thisTreeVis = [];

    let checks = [];
    for (let left = col - 1; left >= 0; left--) {
        checks.push(rowVal[left]);
    }
    thisTreeVis.push(getDist(tree, checks, row, col));

    checks = [];
    for (let right = col + 1; right < rowVal.length; right++) {
        checks.push(rowVal[right]);
    }
    thisTreeVis.push(getDist(tree, checks, row, col));

    checks = [];
    for (let above = row - 1; above >= 0; above--) {
        checks.push(input[above][col]);
    }
    thisTreeVis.push(getDist(tree, checks, row, col));


    checks = [];
    for (let below = row + 1; below < rowVal.length; below++) {
        checks.push(input[below][col]);
    }
    thisTreeVis.push(getDist(tree, checks, row, col));

    // let myvis = thisTreeVis
    let myvis = multiply(thisTreeVis);
    if (myvis > best) {
      best = myvis;
    }
  }
}

// print(Object.values(visible).flatMap(v => Object.values(v)).length)
print(best)






// ----------- GUESSES -------------------------


//
