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

let cave = new Map();
let sands = [];

// let firstIter =
let scans = execPipe(input,
  map(a=>a.split(' -> ')),
  map(map(a=>a.split(','))),
  map(map(map(v => parseInt(v))))
  // map(map(a=>parseInt(a)))
);

// print(scans);

for (scan of scans) {
  let scanArr = Array.from(scan);
  for (let ndx = 0; ndx < scanArr.length; ndx++) {
    let corner = Array.from(scanArr[ndx]);

    if (ndx < scanArr.length - 1) {
      // we know there is another corner ahead
      // get that one
      let nextCorner = Array.from(scanArr[ndx + 1]);

      // draw from this corner to the next
      let xrange =
        corner[0] < nextCorner[0] ?
        range(corner[0], nextCorner[0] + 1) :
        range(nextCorner[0], corner[0] + 1);
      let yrange =
        corner[1] < nextCorner[1] ?
        range(corner[1], nextCorner[1] + 1) :
        range(nextCorner[1], corner[1] + 1);

      for (let x of xrange) {
        for (let y of yrange) {
          cave.set(x + ',' + y, '#')
        }
      }
    }
  }
}

let left = execPipe(cave.keys(),
  map(a=>a.split(',')),
  map(first),
  map(v => parseInt(v)),
  sorted,
  first
)
let top = execPipe(cave.keys(),
  map(a=>a.split(',')),
  map(v => v[1]),
  map(v => parseInt(v)),
  sorted,
  first
)
let right = execPipe(cave.keys(),
  map(a=>a.split(',')),
  map(first),
  map(v => parseInt(v)),
  sortedReverse,
  first
)
let bottom = execPipe(cave.keys(),
  map(a=>a.split(',')),
  map(v => v[1]),
  map(v => parseInt(v)),
  sortedReverse,
  first
)

top = 0;

let floor = bottom + 2;

function printCave() {
  for (let y of range(top - 1, bottom + 2)) {
    let currentLine = '';
    for (let x of range(left - 1, right + 2)) {
      let block = cave.get(x + ',' + y);
      currentLine += block ? block : '.';
    }
    print(currentLine);
  }
}



function canSandMove(x, y) {
  let below = x + ',' + (y + 1);
  let belowLeft = (x - 1) + ',' + (y + 1);
  let belowRight = (x + 1) + ',' + (y + 1);

  if (y + 1 == floor) {
    return 'END';
  } else if (!cave.has(below)) {
    return [x, y + 1];
  } else if (!cave.has(belowLeft)) {
    return [x - 1, y + 1];
  } else if (!cave.has(belowRight)) {
    return [x + 1, y + 1];
  }

  return 'END';
}

function runSand() {
  while (true) {
    let sandX = 500;
    let sandY = 0;
    let nextPos;
    while ('END' !== (nextPos = canSandMove(sandX, sandY))) {
      sandX = nextPos[0];
      sandY = nextPos[1];
    }

    count++;
    cave.set(sandX + ',' + sandY, 'o');

    if (sandX == 500 && sandY == 0) {
      break;
    }
  }
}

runSand();


left = execPipe(cave.keys(),
  map(a=>a.split(',')),
  map(first),
  map(v => parseInt(v)),
  sorted,
  first
);
right = execPipe(cave.keys(),
  map(a=>a.split(',')),
  map(first),
  map(v => parseInt(v)),
  sortedReverse,
  first
)

// printCave();
print(count);


  // If sand falls endlessly stop

// Print out each step of the sand falling (not just result)






// ----------- GUESSES -------------------------


//
