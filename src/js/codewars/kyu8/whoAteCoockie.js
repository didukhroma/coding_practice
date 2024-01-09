console.log('kyu-8-whoAteCoockie.js');

const cookie = x =>
  `Who ate the last cookie? It was ${
    typeof x === 'string'
      ? 'Zach!'
      : typeof x === 'number'
      ? 'Monica!'
      : 'the dog!'
  }`;

console.log(cookie('Ryan'), 'Who ate the last cookie? It was Zach!');
console.log(cookie(26), 'Who ate the last cookie? It was Monica!');
console.log(cookie(2.3), 'Who ate the last cookie? It was Monica!');
console.log(cookie(true), 'Who ate the last cookie? It was the dog!');
