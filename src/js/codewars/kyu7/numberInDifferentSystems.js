console.log('kyu-7-numberInDifferentSystems.js');

const sysNums = (n, sys) =>
  n === 0 ? 0 : Number(n.toString(sys)) || n.toString(sys);

console.log(sysNums(5, 2), 101);
console.log(sysNums(5, 8), 5);
console.log(sysNums(250, 2), 11111010);
console.log(sysNums(250, 16), 'fa');
console.log(sysNums(135, 2), 10000111);
console.log(sysNums(879, 8), 1557);
console.log(sysNums(3894, 16), 'f36');
