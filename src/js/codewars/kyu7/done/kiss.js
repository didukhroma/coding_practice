function isKiss(words) {
  const wordsToArray = words.split(' ');
  const isPresent = wordsToArray.find(el => el.length > wordsToArray.length);

  return isPresent ? 'Keep It Simple Stupid' : 'Good work Joe!';
}

console.log(isKiss('Joe had a bad day'));
