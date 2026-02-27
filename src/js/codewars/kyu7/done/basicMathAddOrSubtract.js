console.log('kyu-7-basicMathAddOrSubtract.js');

function calculate(str, res = 0) {
  const arr = str.replace(/plus/g, '+').replace(/minus/g, '-').split('');

  for (let i = 0; i < arr.length; i += 2) {
    if (i === 0) {
      if (Number(arr[i])) {
        res += Number(arr[i]);
        continue;
      } else {
        i = -1;
        continue;
      }
    }
    res += arr[i - 1] === '+' ? Number(arr[i]) : Number(arr[i] * -1);
  }

  return String(res);
}

// console.log(calculate('1plus2plus3plus4'), '10');
// console.log(calculate('1minus2minus3minus4'), '-8');
// console.log(calculate('1plus2plus3minus4'), '2');
console.log(calculate('plus2plus3plus4'), '9');
