console.log('kyu-7-basicMathAddOrSubtract.js');
function calculate(str, res = 0) {
  let operation = null;
  str
    .replace(/plus/g, '+')
    .replace(/minus/g, '-')
    .split('')
    .forEach(element => {
      if (!operation) {
        res += Number(element);
      } else if (Number.isNaN(element)) {
        operation = element;
      } else {
        res += operation === '+' ? Number(element) : Number(element * -1);
      }
    });
  return res;
}

console.log(calculate('1plus2plus3plus4'), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');
