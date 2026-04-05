function add10(x) {
  return x + 10;
}

function mulBy30(x) {
  return x * 30;
}

const chain = (input, fs) => fs.reduce((a, f) => f(a), input);

console.log(chain(2, [add10]));
console.log(chain(2, [mulBy30, add10]));
