// function thanosSort(arr) {
//   if (arr.length === 0) return 0;
//   if (arr.length === 1) return 1;
//   if (arr.toString() === [...arr].sort((a, b) => a - b).toString())
//     return arr.length;

//   let mid = arr.length / 2;
//   mid = mid % 1 === 0 ? mid : mid + 1;

//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   return Math.max(thanosSort(left), thanosSort(right));
// }

function thanosSort(arr) {
  const isSortedArr = arr.every((el, i) => i === 0 || el >= arr[i - 1]);
  if (isSortedArr) return arr.length;

  let mid = Math.ceil(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return Math.max(thanosSort(left), thanosSort(right));
}

console.log(thanosSort([]), 0);
console.log(thanosSort([5]), 1);
console.log(thanosSort([2, 1]), 1);
console.log(thanosSort([1, 2, 3, 4, 5]), 5);
console.log(thanosSort([-5, -3, -1, 0, 2, 8]), 6);
console.log(thanosSort([7, 7, 7, 7, 7]), 5);
console.log(thanosSort([1, 1, 1, 1, 1, 1, 1, 1]), 8);
console.log(thanosSort([9, 8, 7, 1, 2, 3]), 3);
console.log(thanosSort([1, 2, 3, 9, 8, 7]), 3);
console.log(thanosSort([5, 4, 3, 1, 2, 6, 7, 8]), 4);
console.log(thanosSort([5, 4, 3, 2, 1, 6, 7]), 3);
console.log(thanosSort([3, 3, 3, 2, 2, 2]), 3);
console.log(thanosSort([1, 2, 3, 4, 0]), 3);
console.log(thanosSort([8, 7, 6, 5, 4, 3, 2, 1, 9, 10, 11, 12]), 3);
console.log(thanosSort([10, 9, 8, 7, 1, 2, 3, 4, 5, 6]), 5);
