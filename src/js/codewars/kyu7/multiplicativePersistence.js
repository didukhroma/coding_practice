console.log('kyu-7-multiplicativePersistence.js');
function per(n, res = []) {
  if (n <= 9) return res;
  let newNumber = String(n)
    .split('')
    .reduce((acc, el) => (acc *= Number(el)), 1);

  res.push(newNumber);
  if (newNumber === 0) return res;
  return per(newNumber, res);
}
console.log(per(1), []);
console.log(per(10), [0]);
console.log(per(69), [54, 20, 0]);
console.log(
  per(277777788888899),
  [4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]
);
