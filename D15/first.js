const fs = require('fs');
eval(fs.readFileSync('../helpers.js')+'');
const inFile = fs.readFileSync('inputs/input', 'utf8');

const regex = /Sensor at x=(\-?)(\d+), y=(\-?)(\d+): closest beacon is at x=(\-?)(\d+), y=(\-?)(\d+)\n/gm;

let input = [];
// let inputCopy = [...input];

let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push([result[1] + result[2], result[3] + result[4], result[5] + result[6], result[7] + result[8]]);
}

// input = input[0];

let scanned = new Map();

function manhattan(x, y, x2, y2) {
  return Math.abs(x-x2) + Math.abs(y-y2);
}

let beacons = new Map();

for (beacon of input) {
  beacons.set(parseInt(beacon[2]) + ',' + parseInt(beacon[3]), true);
}

let target = 2000000;

print(execPipe(input,
  map(split),
  map(map(map(v => parseInt(v)))),
  map(v => flat(v)),
  map(getRangedPoints),
  flat,
  filter(x => x[1] == target),
  sorted(x=>x[0]),
  map(v => v[0] + ',' + v[1]),
  distinct,
  size
));

function getRangedPoints(a) {
  let x = a.next().value;
  let y = a.next().value;
  let bx = a.next().value;
  let by = a.next().value;

  let dist = manhattan(x, y, bx, by);

  let o = [];
  // print('dist: ' + dist)

  if (y + dist >= target && y - dist <= target) {
    // target = y + yneed
    let yneed = Math.abs(target - y);
    // print('need ' + yneed)
    let xres = dist - yneed;
    // print('res ' + xres)

    for (let xdist = 0; xdist <= xres; xdist++) {
      if (!beacons.has((x + xdist) + ',' + (target))) {
        o.push([x + xdist, target]);
      }
      if (!beacons.has((x - xdist) + ',' + (target))) {
        o.push([x - xdist, target]);
      }
    }
    // print(o)
  }


  return o;
}







// ----------- GUESSES -------------------------


//
