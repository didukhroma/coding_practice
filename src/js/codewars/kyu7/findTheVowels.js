console.log('kyu-7-findTheVowels');
function vowelIndices(word) {
  const vowels = 'aeiouy';
  const result = [];
  for (let i = 0; i < word.length; i += 1) {
    if (vowels.includes(word[i]).toLowerCase()) result.push(i + 1);
  }
  return result;
  //your code here
}

// const vowelIndices = (word, res = []) => (
//   word.replace(/[aeiouy]/gi, (w, i) => (res.push(i + 1), w)), res
// );

console.log(vowelIndices('mmm'), []);
console.log(vowelIndices('apple'), [1, 5]);
console.log(vowelIndices('super'), [2, 4]);
console.log(vowelIndices('orange'), [1, 3, 6]);
console.log(
  vowelIndices('supercalifragilisticexpialidocious'),
  [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]
);
