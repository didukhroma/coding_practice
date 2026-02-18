// const findMissing = (array1, array2) => {
//   let result = 0;
//   for (let i = 0; i < array1.length; i++) {
//     result += array1[i] - (array2[i] ?? [0]);
//   }
//   return result;
// };

// ===========================
const findMissing = (array1, array2) =>
  array1.concat(array2).reduce((a, b) => a ^ b, 0);

console.log(findMissing([1, 2, 3], [1, 3]));
