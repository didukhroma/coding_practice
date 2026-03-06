const addedChar = (s1, s2) =>
  String.fromCharCode([...(s1 + s2)].reduce((a, c) => a ^ c.charCodeAt(0), 0));

console.log(addedChar('hello', 'checlclo'));
