console.log('kyu-7-howManyArguments');
const args_count = (...arg) => arg.length;

console.log(args_count(1, 2), 2);
console.log(args_count(), 0);
console.log(args_count('A', 'B', 'C'), 3);
console.log(args_count(['foo', 'bar']), 1);
