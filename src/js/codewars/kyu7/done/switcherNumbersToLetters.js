console.log('kyu-7-switcherNumbersToLetters.js');
function switcher(x) {
  const symbols = {
    27: '!',
    28: '?',
    29: ' ',
  };
  return x
    .map(el =>
      symbols[el] ? symbols[el] : String.fromCharCode(123 - Number(el))
    )
    .join('');
}
console.log(
  switcher(['24', '12', '23', '22', '4', '26', '9', '8']),
  'codewars'
);
console.log(
  switcher([
    '25',
    '7',
    '8',
    '4',
    '14',
    '23',
    '8',
    '25',
    '23',
    '29',
    '16',
    '16',
    '4',
  ]),
  'btswmdsbd kkw'
);
console.log(switcher(['4', '24']), 'wc');
