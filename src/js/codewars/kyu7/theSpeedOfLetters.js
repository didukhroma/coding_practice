console.log('kyu-7-theSpeedOfLetters');
function speedify(input) {
  let res = [];
  for (let i = 0; i < input.length; i += 1) {
    const position = input[i].codePointAt(0) - 'A'.codePointAt(0);
    res[position + i] = input[i];
  }
  return Array.from(res)
    .map(el => (!el ? ' ' : el))
    .join('');
}
console.log(speedify('AZ'), '\nA                         Z');
console.log(speedify('ABC'), '\nA B C');
console.log(speedify('ACE'), '\nA  C  E');
console.log(speedify('CBA'), '\n  A');
console.log(speedify('HELLOWORLD'), '\n     E H    DLL   OLO   R  W');
