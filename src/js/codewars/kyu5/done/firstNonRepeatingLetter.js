const firstNonRepeatingLetter = s => {
  const str = s.toLowerCase();
  let index = [...str].findIndex(
    val => str.indexOf(val) === str.lastIndexOf(val)
  );
  return ~index ? s[index] : '';
};

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter('go go go'), '');
