console.log('kyu-7-catAndMouse.js');
const catMouse = x =>
  x.indexOf('m') - x.indexOf('C') > 4 ? 'Escaped!' : 'Caught!';
console.log(catMouse('C....m'), 'Escaped!');
console.log(catMouse('C..m'), 'Caught!');
console.log(catMouse('C.....m'), 'Escaped!');
