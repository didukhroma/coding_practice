const countLonelyLetters = text =>
  [...text.toLowerCase().replace(/[^a-z]/g, '')].filter(
    (el, i, arr) =>
      i === arr.lastIndexOf(el) &&
      i === arr.indexOf(el) &&
      !arr.includes(String.fromCharCode(el.charCodeAt(0) - 1)) &&
      !arr.includes(String.fromCharCode(el.charCodeAt(0) + 1))
  ).length;

// console.log(countLonelyLetters('ab'), 0);
// console.log(countLonelyLetters('abc'), 0);
// console.log(countLonelyLetters('aA'), 0);
console.log(countLonelyLetters('Hello, World!'), 3);
// console.log(countLonelyLetters('aAaA'), 0);
