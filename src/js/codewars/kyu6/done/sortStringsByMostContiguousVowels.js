function fl(str) {
  const vowels = 'aeiou';
  let longest = 0;
  let current = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  }

  return longest;
}

const sortStringsByVowels = strings => strings.sort((a, b) => fl(b) - fl(a));
