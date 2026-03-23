function peakAndValley(arr) {
  if (!Array.isArray(arr) || arr.length < 7) return [];

  const windowRadius = 3;
  const results = [];
  let lastType = null;

  for (let i = windowRadius; i < arr.length - windowRadius; i++) {
    const mid = arr[i];

    let peak = true;
    let valley = true;

    for (let j = 1; j <= windowRadius; j++) {
      if (arr[i + j] > mid || arr[i - j] > mid) {
        peak = false;
      }
      if (arr[i + j] < mid || arr[i - j] < mid) {
        valley = false;
      }

      // 🚀 early exit
      if (!peak && !valley) break;
    }

    const type = peak ? 'peak' : valley ? 'valley' : null;

    if (!type || type === lastType) continue;

    results.push(mid);
    lastType = type;
    // i += 2; // optional
  }

  return results;
}

console.log(
  peakAndValley([
    10, 20, 30, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13,
  ])
);
