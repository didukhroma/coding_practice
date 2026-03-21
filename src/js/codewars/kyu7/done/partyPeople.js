function partyPeople(party) {
  const filtered = party.filter(p => p <= party.length);
  if (party.length === filtered.length) return party.length;
  return partyPeople(filtered);
}
console.log(partyPeople([4, 5, 4, 1]));
