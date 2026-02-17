function vowelRecognition(str) {
  let count = 0;
  const vowels = 'aeiou';

  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = i + 1; j <= str.length; j++) {
  //       let substring = str.slice(i, j).toLowerCase();

  //       for (let j = 0; j < substring.length; j++) {
  //         if (vowels.includes(substring[j])) {
  //           count++;
  //         }
  //       }
  //     }
  //   }
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(vowelRecognition('bbbb'), 0);
console.log(vowelRecognition('baceb'), 16);
console.log(vowelRecognition('aeiou'), 35);
console.log(vowelRecognition('aeiouAEIOU'), 220);
