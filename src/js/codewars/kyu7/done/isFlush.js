console.log('kyu-7-isFlush');
const isFlush = cards =>
  !cards.some((el, i, arr) => el.at(-1) !== arr[1].at(-1));

console.log(isFlush(['AS', '3S', '9S', 'KS', '4S']), true);
console.log(isFlush(['AD', '4S', '7H', 'KC', '5S']), false);
console.log(isFlush(['AD', '4S', '10H', 'KC', '5S']), false);
console.log(isFlush(['QD', '4D', '10D', 'KD', '5D']), true);
console.log(isFlush(['10D', '4D', 'QD', 'KD', '5D']), true);
