console.log('kyu-6-isomorphicWords.js');
function isomorph(a, b) {
  if (a.length !== b.length) return false;
  const pairs = {};
  for (let i = 0; i < a.length; i += 1) {
    let values = Object.values(pairs);
    if (!pairs[a[i]] && !values.includes(b[i])) {
      pairs[a[i]] = b[i];
      continue;
    }

    if (pairs[a[i]] !== b[i]) {
      return false;
    }
    continue;
  }
  return true;
  // Happy coding!
}
console.log(isomorph('ESTATE', 'DUELED'), true);
console.log(isomorph('XXX', 'YYY'), true);

console.log(isomorph('SEE', 'SAW'), false);
console.log(isomorph('XXY', 'XYY'), false);
console.log(isomorph('hmc', 'zgg'), false);
// // Should handle words with more than 10 characters
// console.log(isomorph('abcdefghijk', 'abcdefghijba'), false);
