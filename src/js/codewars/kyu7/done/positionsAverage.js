function posAverage(s) {
  const arr = s.split(', ');
  // your code
  let common = 0;
  let totalCommonPositions = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      totalCommonPositions += arr[i].length;
      for (let k = 0; k < arr[i].length; k++) {
        if (+arr[i][k] === +arr[j][k]) {
          common += 1;
        }
      }
    }
  }
  return (common / totalCommonPositions) * 100;
}

console.log(
  posAverage(
    '466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096'
  )
);
// console.log(posAverage('12, 23, 34, 45, 56, 67, 78, 89, 90'));
// console.log(posAverage('11, 22, 33, 44, 55, 66, 77, 88, 99'));
