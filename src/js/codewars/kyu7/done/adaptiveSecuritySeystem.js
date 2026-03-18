function breachAttempts(hackers, securityLevel, increase) {
  let res = 0;
  if (!hackers.length) return res;
  hackers.forEach(el => {
    if (el > securityLevel) {
      res += 1;
    } else {
      securityLevel += increase;
    }
  });
  return res;
}
