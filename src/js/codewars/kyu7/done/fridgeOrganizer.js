function fridgeOrganizer(items) {
  return items
    .filter(el => el.expiryDays >= 0)
    .sort((a, b) => {
      if (a.expiryDays === b.expiryDays) {
        return a.name.localeCompare(b.name);
      }
      return a.expiryDays - b.expiryDays;
    })
    .sort((a, b) => b.isAlmostEmpty - a.isAlmostEmpty)
    .map(el => el.name);
}

function fridgeOrganizer(items) {
  return items
    .filter(({ expiryDays }) => expiryDays >= 0)
    .sort(
      (a, b) =>
        b.isAlmostEmpty - a.isAlmostEmpty ||
        a.expiryDays - b.expiryDays ||
        a.name.localeCompare(b.name)
    )
    .map(({ name }) => name);
}

const items = [
  { name: 'Milk', expiryDays: 3, isAlmostEmpty: false },
  { name: 'Jam', expiryDays: 3, isAlmostEmpty: true },
  { name: 'Yogurt', expiryDays: 1, isAlmostEmpty: false },
  { name: 'Old Meat', expiryDays: -1, isAlmostEmpty: true },
  { name: "Today's Tofu", expiryDays: 0, isAlmostEmpty: false },
];

console.table(fridgeOrganizer(items));
