const hasOneChar = s => new Set(s).size === 1;

console.log(hasOneChar('a'));
console.log(hasOneChar('aaaaa')); //true
console.log(hasOneChar('aaaab')); //false
console.log(hasOneChar('bbbbb')); //true
console.log(hasOneChar('bbabb')); //false
