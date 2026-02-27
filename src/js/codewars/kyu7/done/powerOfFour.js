console.log('kyu-7-powerOfFour.js');
// function powerOf4(n) {
//   if (typeof n !== 'number') return false;

//   return (Math.log(n) / Math.log(4)) % 1 === 0;
// }

function powerOf4(n) {
  return typeof n === 'number' && Math.log2(n) % 2 === 0;
}

console.log(powerOf4(4), true);
console.log(powerOf4(16), true, '4^4 = 16');
console.log(powerOf4(1), true, 'Four to the power of 0 is 1');
console.log(powerOf4(8), false, '8 is not a power of 4');
console.log(powerOf4(20), false, '20 is not a power of 4');
console.log(powerOf4(32), false, '32 is not a power of 4');
console.log(powerOf4(44), false, '44 is not a power of 4');
console.log(powerOf4(3.1415), false);
console.log(powerOf4('1'), false, 'Should return false for strings');
console.log(powerOf4('4'), false, 'Should return false for strings');
console.log(powerOf4(null), false, 'Should return false for non-numbers');
console.log(powerOf4(undefined), false, 'Should return false for non-numbers');
console.log(
  powerOf4(function () {}),
  false,
  'Should return false for non-numbers'
);
