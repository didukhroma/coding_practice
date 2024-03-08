console.log('kyu-7-fromAtoZ.js');

function gimmeTheLetters(sp) {
  let res = '';

  const startIdx = sp.charCodeAt(0);
  const lastIdx = sp.charCodeAt(2);

  if (startIdx === lastIdx) return sp[0];

  for (let i = startIdx; i <= lastIdx; i += 1) {
    res += String.fromCharCode(i);
  }

  return res;
}

console.log(gimmeTheLetters('J-J'), 'J', `'J-J'`);
console.log(gimmeTheLetters('Z-Z'), 'Z', `'Z-Z'`);
console.log(gimmeTheLetters('a-a'), 'a', `'a-a'`);

console.log(gimmeTheLetters('h-o'), 'hijklmno', `'h-o'`);
console.log(gimmeTheLetters('e-k'), 'efghijk', `'e-k'`);
console.log(gimmeTheLetters('a-q'), 'abcdefghijklmnopq', `'a-q'`);
