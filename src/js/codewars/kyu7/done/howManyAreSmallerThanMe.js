console.log('kyu-7-howManyAreSmallerThanMe');
/**Task */
/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
For example:
* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
*/
/**Solution One*/
// function smaller(nums) {
//   const result = [];
//   for (let i = 0; i < nums.length; i += 1) {
//     let count = 0;
//     for (let j = i + 1; j < nums.length; j += 1) {
//       if (nums[j] >= nums[i]) continue;
//       count += 1;
//     }
//     result.push(count);
//   }
//   return result;
// }
/**Solution Two*/
// const smaller = nums =>
//   nums.reduce((acc, el, idx) => {
//     let count = 0;
//     nums.slice(idx + 1).forEach(element => {
//       if (element < el) count += 1;
//     });
//     return [...acc, count];
//   }, []);

/**Solution Three*/
const smaller = nums =>
  nums.map((x, i) => nums.slice(i + 1).filter(el => el < x).length);

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
