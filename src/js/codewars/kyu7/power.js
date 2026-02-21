function power(base, exponent) {
  if (exponent === 0) return 1;

  if (exponent < 0) {
    return 1 / power(base, -exponent);
  }

  if (exponent % 2 === 0) {
    let half_power = power(base, exponent / 2);
    return half_power * half_power;
  } else {
    let half_power = power(base, (exponent - 1) / 2);
    return base * half_power * half_power;
  }
}

console.log(power(2, 3)); //8
console.log(power(4, -2));
