function toSnake(camel) {
  const regex = /[A-Z]/g;
  return camel.replace(regex, vowel => '_' + vowel.toLowerCase());
}

console.log(toSnake('helloWorld'));
