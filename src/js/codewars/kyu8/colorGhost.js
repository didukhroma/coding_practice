console.log('kyu-8-colorGhost.js');
class Ghost {
  // your code goes here
  constructor() {
    this.colors = ['white', 'yellow', 'purple', 'red'];
    this.color = this.colors[Math.floor(Math.random() * 4)];
  }
}

// var Ghost = function () {
//   const colors = ['white', 'yellow', 'purple', 'red'];
//   this.color = colors[Math.floor(Math.random() * 4)];
//   // your code goes here
// };
const ghost = new Ghost();
// console.log(ghost);
console.log(ghost.color);
