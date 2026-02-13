function mergeStrings(first, second) {
  if (!first) return second;
  if (!second) return first;

  const maxOverlap = Math.min(first.length, second.length);

  for (let overlap = maxOverlap; overlap > 0; overlap--) {
    if (first.endsWith(second.slice(0, overlap))) {
      return first + second.slice(overlap);
    }
  }

  return first + second;
}

console.log(mergeStrings('abcde', 'cdefgh')); // expected: abcdefgh
