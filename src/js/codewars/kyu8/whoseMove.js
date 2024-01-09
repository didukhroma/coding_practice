console.log('kyu-8-whoseMove.js');
const whoseMove = (lastPlayer, win) =>
  win ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white';

console.log(whoseMove('black', false), 'white');

console.log(whoseMove('white', true), 'white');

console.log(whoseMove('white', false), 'black');
