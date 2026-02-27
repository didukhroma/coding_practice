console.log('kyu-7-evenOrOdd.js');
const evenOrOdd = (str, even = 0, odd = 0) => {
  str
    .split('')
    .forEach(el =>
      !(Number(el) % 2) ? (even += Number(el)) : (odd += Number(el))
    );
  return even > odd
    ? 'Even is greater than Odd'
    : even === odd
    ? 'Even and Odd are the same'
    : 'Odd is greater than Even';
};

console.log(evenOrOdd('12'), '\nEven is greater than Odd');
console.log(evenOrOdd('123'), '\nOdd is greater than Even');
console.log(evenOrOdd('112'), '\nEven and Odd are the same');
