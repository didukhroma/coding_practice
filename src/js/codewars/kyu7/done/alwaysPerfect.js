function checkRoot(string) {
  const parts = string.split(',');
  if (parts.length !== 4 || parts.some(el => isNaN(el) || el === '0'))
    return 'incorrect input';
  if (parts.some((el, i) => i > 0 && +el !== +parts[i - 1] + 1))
    return 'not consecutive';
  const s = parts.reduce((a, el) => a * el, 1) + 1;
  const n = Math.sqrt(s);
  return `${s}, ${n}`;
}

console.log(checkRoot('4,5,6,7'));
