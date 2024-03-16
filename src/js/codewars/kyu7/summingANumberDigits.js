console.log('kyu-7-summingANumberDigits');
const sumDigits = number => {
  return String(number)
    .replace('-', '')
    .split('')
    .reduce((acc, el) => acc + Number(el), 0);
};

console.log(sumDigits(10), 1);
console.log(sumDigits(101), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
