console.log('kyu-7-catchSignChange');

const catchSignChange = (arr, res = 0) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < 0 && arr[i + 1] < 0) continue;
    if (arr[i] >= 0 && arr[i + 1] >= 0) continue;
    res += 1;
  }
  return res;
};

// console.log(catchSignChange([]), 0);
// console.log(catchSignChange([1, 3, 4, 5]), 0);
// console.log(catchSignChange([-1, -3, -4, -5]), 0);
console.log(catchSignChange([1, -3, -4, 0, 5]), 2);
// console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77]), 3);
