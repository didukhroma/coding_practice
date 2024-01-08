console.log('kyu-8-flickSwitch.js');

const flickSwitch = arr => {
  let base = true;
  return arr.map(el => {
    base = el === 'flick' ? !base : base;
    return base;
  });
};

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']), [
  true,
  false,
  false,
  false,
]);
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']), [
  false,
  false,
  false,
  false,
]);
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']), [
  true,
  true,
  false,
  false,
  true,
]);
console.log(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']), [
  false,
  true,
  false,
  true,
  false,
]);
console.log(flickSwitch(['bicycle']), [true]);
console.log(flickSwitch(['flick']), [false]);
console.log(flickSwitch([]), []);
