function common(a, b, c) {
  const freqMap = arr =>
    arr.reduce((map, v) => {
      map[v] = (map[v] || 0) + 1;
      return map;
    }, {});

  const fa = freqMap(a);
  const fb = freqMap(b);
  const fc = freqMap(c);

  return Object.keys(fa).reduce((sum, value) => {
    if (fb[value] && fc[value]) {
      const count = Math.min(fa[value], fb[value], fc[value]);
      sum += Number(value) * count;
    }
    return sum;
  }, 0);
}

// const common = (a, b, c) => {
//   [a, b, c] = [a, b, c].map(el =>
//     el.reduce((sum, num) => ((sum[num] = (sum[num] || 0) + 1), sum), {})
//   );
//   return Object.keys(a).reduce(
//     (sum, key) => sum + Math.min(a[key] || 0, b[key] || 0, c[key] || 0) * key,
//     0
//   );
// };

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2])); // 5 (3 + 2)
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])); // 4 (2 + 2)
