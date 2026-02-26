function calculate(a, operator, b) {
  const allowedOperations = {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => (b === 0 ? null : a / b),
  };
  return operator in allowedOperations ? allowedOperations[operator]() : null;
}

console.log(calculate(2, '+', 4));
console.log(calculate(2, '-', 4));
console.log(calculate(2, '*', 4));
console.log(calculate(2, '/', 0));
console.log(calculate(2, '/', 4));
