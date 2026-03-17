// const solution = (firstArray, secondArray) =>
//   firstArray
//     .map((el, i) => Math.pow(Math.abs(el - secondArray[i]), 2))
//     .reduce((acc, el) => acc + el) / firstArray.length;
const solution = (f, s) =>
  f.reduce(
    (acc, el, i) => acc + Math.pow(Math.abs(el - s[i]), 2) / f.length,
    0
  );

console.log(solution([1, 2, 3], [4, 5, 6]), 9);
