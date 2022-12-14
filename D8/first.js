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

function setVis(row, col) {
  if (!visible[row]) {
    visible[row] = {};
  }
  visible[row][col] = 1;
}

function checkIfTaller(tree, others, row, col) {
  if (others.length == 0) {
    return setVis(row, col);
  }
  // print('comparing ' + tree + ' with  ' + others)
  for (let other of others) {
    if (tree <= other) {
      return 0;
    }
  }
  return setVis(row, col);
}

// let total = 0;

for (let row = 0; row < input.length; row++) {
  let rowVal = input[row];
  for (let col = 0; col < rowVal.length; col++) {
    let tree = rowVal[col];

    let checks = [];
    for (let left = col - 1; left >= 0; left--) {
        checks.push(rowVal[left]);
    }
    checkIfTaller(tree, checks, row, col);

    checks = [];
    for (let right = col + 1; right < rowVal.length; right++) {
        checks.push(rowVal[right]);
    }
    checkIfTaller(tree, checks, row, col);

    checks = [];
    for (let above = row - 1; above >= 0; above--) {
        checks.push(input[above][col]);
    }
    checkIfTaller(tree, checks, row, col);


    checks = [];
    for (let below = row + 1; below < rowVal.length; below++) {
        checks.push(input[below][col]);
    }
    checkIfTaller(tree, checks, row, col);
  }
}

print(Object.values(visible).flatMap(v => Object.values(v)).length)






// ----------- GUESSES -------------------------


//
