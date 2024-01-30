console.log('kyu-7-arrayArrayArray.js');
function explode(x) {
  let filteredArr = x.filter(el => typeof el === 'number');
  if (!filteredArr.length) return 'Void!';
  let repeat =
    filteredArr.length === 1 ? filteredArr[0] : filteredArr[0] + filteredArr[1];
  return new Array(repeat).fill(x);
}
console.log(explode([9, 3]), [
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
]);
console.log(explode(['a', 3]), [
  ['a', 3],
  ['a', 3],
  ['a', 3],
]);
console.log(explode([6, 'c']), [
  [6, 'c'],
  [6, 'c'],
  [6, 'c'],
  [6, 'c'],
  [6, 'c'],
  [6, 'c'],
]);
console.log(explode(['a', 'b']), 'Void!');
console.log(explode(['a', 0]), []);
