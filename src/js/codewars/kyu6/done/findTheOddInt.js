// function findOdd(A) {
//   const cache = {};

//   for (let i = 0; i < A.length; i++) {
//     cache[A[i]] = (cache[A[i]] || 0) + 1;
//   }
//   //happy coding!
//   return +Object.entries(cache).find(([_, value]) => value % 2 !== 0)[0];
// }

const findOdd = A => A.reduce((acc, el) => acc ^ el);

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
