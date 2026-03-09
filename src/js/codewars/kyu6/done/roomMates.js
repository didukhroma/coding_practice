const rooms = ['foo', 'bar', 'foobar', 'barfoo', 'foofoo', 'barbar', 'barbar'];

function roomMates(rooms, floor) {
  return rooms.filter((el, i) => el && i < 6 * floor && i >= 6 * (floor - 1));
}

console.log(roomMates(rooms, 1));
console.log(roomMates(rooms, 2));
