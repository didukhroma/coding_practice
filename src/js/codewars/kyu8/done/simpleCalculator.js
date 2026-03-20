function calculator(a, b, sign) {
  if (isNaN(Number(a)) || isNaN(Number(b))) return 'unknown value';

  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'unknown value';
  }
}

console.log(calculator('3', '5', '+'), 8);
console.log(calculator('3', '5', '-'), -2);
console.log(calculator('3', '5', '*'), 15);
console.log(calculator('3', '5', '/'), 0.6);
