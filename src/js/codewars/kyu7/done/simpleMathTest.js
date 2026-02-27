const numberProperty = n => {
  let isPrime = n > 1 && !(n % 2 === 0 && n !== 2);
  for (let i = 3; i * i <= n && isPrime; i += 2) {
    isPrime = n % i !== 0;
  }
  return [isPrime, n % 2 === 0, n % 10 === 0];
};

console.log(numberProperty(7));
console.log(numberProperty(10));
console.log(numberProperty(-7));
console.log(numberProperty(-10));
