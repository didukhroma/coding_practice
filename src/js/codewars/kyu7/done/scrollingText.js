console.log('kyu-7-scrollingText');
// const scrollingText = (text, res = [], firstText = '') => {
//   if (!res.length) firstText = text;
//   if (res.length && text === firstText) return res;
//   res.push(text.toUpperCase());
//   const newText = text.slice(1) + text.slice(0, 1);
//   return scrollingText(newText, res, firstText);
// };

const scrollingText = text =>
  text
    .split('')
    .map((_, i) => (text.slice(i) + text.slice(0, i)).toUpperCase());

console.log(scrollingText('abc'));
console.log(scrollingText('codewars'));
