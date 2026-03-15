// function remove(str, what) {
//   const arr = [...str];
//   for (let i = 0; i < str.length; i++) {
//     if (Object.keys(what).includes(arr[i])) {
//       if (what[arr[i]] !== 0) {
//         what[arr[i]] -= 1;
//         arr[i] = '';
//       }
//     }
//   }
//   return arr.join('');
// }

const remove = (str, what) =>
  str.replace(/[a-z]/g, char => (what[char]-- > 0 ? '' : char));

console.log(
  remove('codewars', { c: 5, o: 1, d: 1, e: 1, w: 1, z: 1, a: 1, r: 1, s: 1 })
);
