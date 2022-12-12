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
//   // map(split),
//
// ));
let starts = [];

let alts = [];
for (let rowNdx = 0; rowNdx < input.length; rowNdx++) {
  let row = input[rowNdx];
  let thisRow = [];
  for (let vndx = 0; vndx < row.length; vndx++) {
    let v = row[vndx];
    switch (v) {
      case 'S':
        starts.push([vndx, rowNdx]);
        thisRow.push(0);
        break;
      case 'E':
        thisRow.push(25)
        break;
      case 'a':
        starts.push([vndx, rowNdx]);
        thisRow.push(v.charCodeAt(0) - 97);
        break;
      default:
        thisRow.push(v.charCodeAt(0) - 97);
        break;
    }
  }
  alts.push(thisRow);
}
// print(alts)

let bestPerSquare = {};

function run(startX, startY) {

  let width = alts[0].length;
  let height = alts.length;

  let shortest = 100000;

  function findBest(x, y, stepCount, path, depth) {
    // print('path: ')
    // print(path)
    //print(stepCount)
    let newHeight = alts[y][x];
    //print('new height ' + newHeight);
    if (newHeight == 25) {
      // print('found end! ' + stepCount);
      // print(path)
      let total = stepCount;
      if (total < shortest) {
        shortest = total;
      }
      return [total, path];
    }
    let possibles = [
      [x, y - 1],
      [x, y + 1],
      [x - 1, y],
      [x + 1, y]
    ];
    // print(possibles);
    // exit(0)
    let bestSub = 10000000;
    let bestPath = {};
    for (let next of possibles) {

      //print('next: ' + next)
      //print(bestPerSquare)
      //print('checking ' + next[0] + ', ' + next[1]);
      if (next[0] >= 0 && next[0] < width && next[1] >= 0 && next[1] < height) {
        // print('thispath:')
        // print(thisPath)
        //print(alts.length)
        //print('looking at ' + next)
        let possibleNextAlt = alts[next[1]][next[0]];
        if (!bestPerSquare[[next[0], next[1]]] || bestPerSquare[[next[0], next[1]]] > stepCount) {
          if (possibleNextAlt <= newHeight + 1) {
            bestPerSquare[[next[0], next[1]]] = stepCount;
            // let thisPath = new Map(path);
            // thisPath.set(next[0] + ',' + next[1], depth);
            let res = findBest(next[0], next[1], stepCount + 1, path + '|' + next, depth + 1);
            let total = res[0];
            let totalBest = res[1];
            if (total < bestSub) {
              bestSub = total;
              bestPath = totalBest;
            }
          }
        }
      }
    }
    return [bestSub, bestPath];
  }

  let best = findBest(startX, startY, 0, + startX + ',' + startY, 1);
  return best[0];
}

let bestStart = 10000000000;
for (let start of starts) {
  if (start[0] < 3) {
    // print(start);
    let tot = run(start[0], start[1]);
    // print(tot);
    if (tot < bestStart) {
      bestStart = tot;
    }
  }
}
print(bestStart);


// let initVisited = new Map();
// initVisited.set(startX + ',' + startY, 0);

// let bestVisited = best[1];
// // print(best)
// // print('SHORTEST ' + shortest)
//
// let bestRoute = new Set(bestVisited.split('|'));
// print(best[1].size)

// print(bestRoute.has([0,0]))

// for (let y = 0; y < input.length; y++) {
//   let thisLine = '';
//   for (let x = 0; x < input[0].length; x++) {
//     if (bestRoute.has(x + ',' + y)) {
//       // if (bestRoute.get(x + ',' + y) >= 10) {
//       //   thisLine += '*';
//       // } else {
//       //   thisLine += bestRoute.get(x + ',' + y);
//       // }
//       thisLine += '*';
//     } else {
//       thisLine += input[y][x];
//     }
//   }
//   console.log(thisLine);
// }


// ----------- GUESSES -------------------------


//
