// const Map = require('collections/map');
var pycollections = require('pycollections');
var it = require('itertools');
Object.entries(require('iter-tools')).forEach(([name, exported]) => global[name] = exported);

function print(s) {
  console.log(s);
}
function iprint(s) {
  print([...s]);
}

// if o is GeneratorFunctionPrototype [Generator] {}
// [...o] or Array.from(o)


// ----------- TESTING AND REGEX -----®---------
var nonWhitespace = /\S+/g;
var positiveOrNegativeNumber = /(-?)(\d+)/g;
var numberAndWord = /(-?)(\d+) \S+/g;
var entireLine = /([^\n]*)\n/gm

var d = new pycollections.Dict();
var dd = new pycollections.DefaultDict([].constructor);
var c = new pycollections.Counter();
var od = new pycollections.OrderedDict();

var count = 0;

var NT = pycollections.NamedTuple('Js', ['a', 'b']);
var nt = new NT(1, 2);

var sum = a => reduce((c,d) => c + d, a);
var sorted = takeSorted;
var sortedReverse = takeSorted((a, b) => b-a);
var toInt = map(a => parseInt(a));
var mapToArray = map(a => Array.from(a));
