console.log('kyu-6 oneVariableSecondDegreeEquationSolver');
function secDegSolver(a, b, c) {
  const formatResult = res => Number(res.toFixed(10));

  //your code here
  if (!a && !b && !c) return 'The equation is indeterminate';
  if (!a && !b) return 'Impossible situation. Wrong entries';
  if (!a && !c) return 'It is a first degree equation. Solution: 0.0';
  if (!a) {
    return `It is a first degree equation. Solution: ${formatResult(
      (-1 * c) / b
    )}`;
  }
  const d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) return 'There are no real solutions';
  if (!d)
    return `It has one double solution: ${formatResult((-1 * b) / (2 * a))}`;
  const resA = (-1 * b + Math.sqrt(d)) / (2 * a);
  const resB = (-1 * b - Math.sqrt(d)) / (2 * a);

  const result = [formatResult(resA), formatResult(resB)].sort();

  return `Two solutions: ${result[0]}, ${result[1]}`;
}
console.log(secDegSolver(0, 2, -4));
console.log(secDegSolver(10, 2, -4));
console.log(secDegSolver(1.5, 2, 4));
console.log(secDegSolver(1, -2, 1));
console.log(secDegSolver(0, 0, 0));
console.log(secDegSolver(0, 0, -2));
console.log(secDegSolver(2, -3, -10));
