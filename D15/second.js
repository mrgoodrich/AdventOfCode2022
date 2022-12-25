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

class Intercept {
  constructor(zeroIntercept, isClimb, pos) {
    this.zeroIntercept = zeroIntercept;
    this.isClimb = isClimb;
    this.pos = pos;
  }
}

let lines = execPipe(input,
  map(split),
  map(map(map(v => parseInt(v)))),
  map(v => flat(v)),
  map(getZeroIntercepts),
  flat,
  map(v=>[parseInt(v.zeroIntercept), v]),
  sorted((a,b)=>a[0]-b[0]),
  splitGroups(v => {
    return v[1].zeroIntercept + ',' + v[1].isClimb
  }),
  map(v => {
    let a = Array.from(v[1]);
    v.push(a)
    v.push(a.length)
    return v;
  }),
  filter(v => v[3] > 1),
  map(v=>v[2]),
  map(map(v=> v[1])),
  map(map(v => v.zeroIntercept + ',' + v.isClimb + ',' + v.pos)),
  map(v => distinct(v)),
  filter(v => size(v) > 1),
  // flat,
  map(first),
  map(v => v.split(',')),
  map(v => new Intercept(parseInt(v[0]), v[1], v[2]))
);
lines = Array.from(lines);
// print(lines);

let sharedLines = [];

for (let ndx1 = 0; ndx1 < lines.length; ndx1++) {
  let l1 = lines[ndx1];
  for (let ndx2 = 0; ndx2 < lines.length; ndx2++) {
    let l2 = lines[ndx2];
    if (ndx1 > ndx2 && l1.isClimb !== l2.isClimb) {
      let space = Math.abs(l1.zeroIntercept - l2.zeroIntercept);

      let x;
      if (l1.zeroIntercept < l2.zeroIntercept) {
        x = l1.zeroIntercept + space / 2;
      } else {
        x = l2.zeroIntercept + space / 2;
      }
      let y = space / 2;

      print(x * 4000000 + y);
    }
  }
}

let groups = it.permutations(lines, 2)

function getZeroIntercepts(a) {
  let x = a.next().value;
  let y = a.next().value;
  let bx = a.next().value;
  let by = a.next().value;

  let dist = manhattan(x, y, bx, by);

  let zero = x - y + manhattan;

  return [
    new Intercept(x - y + dist + 1, false, -1),
    new Intercept(x - y - dist - 1, false, 1),
    new Intercept(x + y - dist - 1, true, -1),
    new Intercept(x + y + dist + 1, true, 1)
  ];
}







// ----------- GUESSES -------------------------


//
