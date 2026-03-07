const frame = (text, char) => {
  const sortedText = text.toSorted((a, b) => b.length - a.length);
  const longestWord = sortedText[0].length;
  const delimiter = char.repeat(longestWord + 4);
  const res = text.map(
    el => `${char} ${el}${' '.repeat(longestWord + 1 - el.length)}${char}`
  );
  return delimiter + '\n' + res.join('\n') + '\n' + delimiter;
};

console.log(frame(['Create', 'a', 'frame'], '+'));
