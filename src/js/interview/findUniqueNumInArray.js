console.log('findUniqueNumInArray');
const arr = [2, 1, 7, 9, 5, 2, 1, 7, 9];

const findUniqueNum = arr =>
  arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
// const findUniqueNum = arr => arr.reduce(_ ^ _);
console.time('start');
console.log(findUniqueNum(arr));
console.timeEnd('start');
