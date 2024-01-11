console.log('kyu-8-whosNext');
function nextItem(xs, item) {
  if (typeof xs === 'string' || Array.isArray(xs))
    return xs.includes(item) ? xs[xs.indexOf(item) + 1] : undefined;
  if (xs instanceof Function) return xs();
  return 1;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
console.log(nextItem(['a', 'b', 'c'], 'd'), undefined);
console.log(nextItem(['a', 'b', 'c'], 'c'), undefined);
console.log(nextItem('testing', 't'), 'e');
// function countFrom(n) {
//     for (let i = n; ; ++i) yield i;
// }
function countFrom(n) {
  console.log(n);
}
console.log(nextItem(countFrom(1), 12), 13);
console.dir(String);
