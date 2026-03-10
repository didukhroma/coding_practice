// function wheatFromChaff(values) {
//   // Your Code is Here .. Enjoy !!
//   let left = 0;
//   let right = values.length - 1;
//   while (left < right) {
//     if (values[left] > 0 && values[right] < 0) {
//       let temp = values[left];
//       values[left] = values[right];
//       values[right] = temp;
//       left++;
//       right--;
//     } else {
//       if (values[left] < 0) left++;
//       if (values[right] > 0) right--;
//     }
//   }

//   return values;
// }

function wheatFromChaff(values) {
  // Your Code is Here .. Enjoy !!
  for (let head = 0, tail = values.length - 1; head < tail; head++, tail--) {
    while (values[head] < 0) head++;
    while (values[tail] > 0) tail--;
    if (head < tail) {
      let temp = values[head];
      values[head] = values[tail];
      values[tail] = temp;
    }
  }
  return values;
}

console.log(wheatFromChaff([2, -4, 6, -6]), [-6, -4, 6, 2]);
console.log(wheatFromChaff([7, -3, -10]), [-10, -3, 7]);
console.log(wheatFromChaff([7, -8, 1, -2]), [-2, -8, 1, 7]);
console.log(wheatFromChaff([8, 10, -6, -7, 9]), [-7, -6, 10, 8, 9]);
console.log(wheatFromChaff([-3, 4, -10, 2, -6]), [-3, -6, -10, 2, 4]);
console.log(wheatFromChaff([2, -6, -4, 1, -8, -2]), [-2, -6, -4, -8, 1, 2]);
