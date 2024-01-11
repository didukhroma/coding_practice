console.log('kyu-8-bigTooSmall');
// const bigToSmall = (arr, res = []) => {
//   arr.forEach(el => res.push(...el));
//   return res.sort((a, b) => b - a).join('>');
// };
const bigToSmall = arr =>
  []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join('>');
console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  '6>5>4>3>2>1'
);
console.log(
  bigToSmall([
    [1, 3, 5],
    [2, 4, 6],
  ]),
  '6>5>4>3>2>1'
);
console.log(bigToSmall([[1, 1], [1], [1, 1]]), '1>1>1>1>1');
