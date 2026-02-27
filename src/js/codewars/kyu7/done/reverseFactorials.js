console.log('kyu-7-reverseFactorials.js');

function reverseFactorial(number, num = 1, result = 1) {
  // happy coding!
  result *= num;
  if (result > number) return 'None';
  if (result === number) return `${num}!`;
  num += 1;
  return reverseFactorial(number, num, result);
}

console.log(reverseFactorial(120), '5!');
console.log(reverseFactorial(3628800), '10!');
console.log(reverseFactorial(150), 'None');
console.log(reverseFactorial(6), '3!');
console.log(reverseFactorial(3), 'None');
console.log(reverseFactorial(2), '2!');
console.log(reverseFactorial(1), '1!');
console.log(reverseFactorial(0), 'None');
