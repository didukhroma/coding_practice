const getCount = str => str.match(/[aeiou]/g)?.length || 0;

console.log(getCount('abracadabra'), 5);
