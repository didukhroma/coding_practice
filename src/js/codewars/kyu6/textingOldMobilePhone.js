const sendMessage = message => {
  //   console.log(message);
  // Start typing here
  const keyboard = {
    '.,?!': 1,
    abc: 2,
    def: 3,
    ghi: 4,
    jkl: 5,
    mno: 6,
    pqrs: 7,
    tuv: 8,
    wxyz: 9,
    "'-+=": '*',
    space: 0,
    case: '#',
  };
  const keys = Object.keys(keyboard);
  let caseUpper = false;

  return message
    .split(' ')
    .map(el => {
      let result = '';
      for (let i = 0; i < el.length; i++) {
        const idx = keys.findIndex(key => key.includes(el[i].toLowerCase()));

        if (
          (el[i] === el[i].toUpperCase() && !caseUpper) ||
          (el[i] === el[i].toLowerCase() && caseUpper)
        ) {
          caseUpper = !caseUpper;
          result += '#';
        }
        let keyStr = keys[idx];
        let numStr = String(keyboard[keyStr]);
        let example = numStr.padEnd(keyStr.indexOf(el[i]) + 1, numStr);
        result += result.endsWith(numStr) ? ' ' + example : example;
      }
      return result;
    })
    .join('');
};

// console.log(sendMessage('hey'), '4433999');
// console.log(sendMessage('one two three'), '666 6633089666084477733 33');
console.log(sendMessage('H'), '');
// console.log(sendMessage('Hello World!'), '#44#33555 5556660#9#66677755531111');
// console.log(sendMessage('ONE TWO THREE'), '666 6633089666084477733');
