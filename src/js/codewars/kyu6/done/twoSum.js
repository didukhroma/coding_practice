console.log('kyu-6-twoSum.js');

function twoSum(numbers, target) {
  let res = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    if (res.length !== 0) {
      break;
    }
    if (numbers[i] === target) {
      res.push(i);
      break;
    }
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === target) {
        res.push(i, j);
        break;
      }
    }
  }
  return res;
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 3));
