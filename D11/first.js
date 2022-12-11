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

let monkeys = [];

class Monkey {
  constructor(items, ins, div, trueMonkey, falseMonkey) {
    this.items = items;
    print('setting ')
    console.log(ins)
    this.ins = ins;
    this.div = div;
    this.trueMonkey = trueMonkey;
    this.falseMonkey = falseMonkey;
  }
}

for (let ndx = 0; ndx < input.length; ndx++) {
  let items = [];
  let ins;
  let test;
  let trueMonkey;
  let div;
  let falseMonkey;
  while (input[ndx]) {
    let line = input[ndx];
    console.log(line);
    if (line.startsWith('  Starting items: ')) {
      items = line.replace('  Starting items: ', '').split(', ').map(v => parseInt(v));
    } else if (line.startsWith('  Operation: new = old')) {
      let op = line.replace('  Operation: new = old ', '').split(' ');
      if (op[0] === '+') {
        ins = function(a) {
          let o;
          if (op[1] === 'old') {
            o = a;
          } else {
            o = parseInt(op[1]);
          }
          return a + o;
        }
      } else if (op[0] === '-') {
        ins = function(a) {
          let o;
          if (op[1] === 'old') {
            o = a;
          } else {
            o = parseInt(op[1]);
          }
          return a - o;
        }
      } else if (op[0] === '*') {
        ins = function(a) {
          let o;
          if (op[1] === 'old') {
            o = a;
          } else {
            o = parseInt(op[1]);
          }
          return a * o;
        };
      } else if (op[0] === '/') {
        ins = function(a) {
          let o;
          if (op[1] === 'old') {
            o = a;
          } else {
            o = parseInt(op[1]);
          }
          return a / o;
        };
      } else {
        print(op[1])
        exit(1);
      }
    } else if (line.startsWith('  Test: divisible by ')) {
      div = parseInt(line.replace('  Test: divisible by ', ''));
    } else if (line.startsWith('    If true: throw to monkey ')) {
      print('truemonkey is ')
      trueMonkey = parseInt(line.replace('    If true: throw to monkey ', ''));
      print(trueMonkey)
    } else if (line.startsWith('    If false: throw to monkey ')) {
      falseMonkey = parseInt(line.replace('    If false: throw to monkey ', ''));
    }

    console.log(ins)
    console.log('above')


    ndx++;
  }
  monkeys.push(new Monkey(items, (v) => {return ins(v)}, div, trueMonkey, falseMonkey));
  console.log('null')
}

print ('\n\n\n')

let counts = [];
for (let c = 0; c < monkeys.length; c++) {
  counts.push(0);
}

for (let round = 0; round < 20; round++) {
  for (let monkeyNdx = 0; monkeyNdx < monkeys.length; monkeyNdx++) {
    let monkey = monkeys[monkeyNdx];
    // console.log(monkey)
    let items = monkey.items;
    for (let item of items) {
      print('item is ' + item)
      let v = item;
      // inspect
      // console.log(monkey.ins(1));
      v = monkey.ins(v);
      counts[monkeyNdx]++;

      // divide worry by 3
      v /= 3;
      v = Math.trunc(v);

      // monkey tests worry
      let target = -1;
      if (v % monkey.div == 0) {
        target = monkey.trueMonkey;
      } else {
        target = monkey.falseMonkey;
      }
      print('  throwing ' + v + ' to ' + target);
      monkeys[target].items.push(v);
    }
    monkey.items = [];
  }
}

print(
  execPipe(
  counts,
  takeSorted(2),
  reduce((a,b) => a*b)
  )
)




// ----------- GUESSES -------------------------


//
