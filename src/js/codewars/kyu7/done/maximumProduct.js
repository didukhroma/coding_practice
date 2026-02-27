console.log('kyu-7-maximumProduct.js');
function adjacentElementsProduct(array) {
  let maxNum;
  for (let i = 1; i < array.length; i += 1) {
    let newNum = array[i - 1] * array[i];
    // maxNum = maxNum ?? 0;
    if (!maxNum) {
      console.log(maxNum);
      maxNum = newNum;
      continue;
    }
    maxNum = newNum > maxNum ? newNum : maxNum;
  }
  return maxNum;
}
console.log('Positive numbers');
console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);

console.log('Both positive and negative values');
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
console.log(
  adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]),
  -14
);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);

console.log('Contains zeroes');
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
console.log(adjacentElementsProduct([1, 2, 3, 0]), 6);
