console.log('kyu-8-finishGuessTheNumberGame');
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (!this.lives) throw new Error('Expect error already dead');
    if (n === this.number) return true;
    this.lives -= 1;
    return false;
  }
}


let guesser = new Guesser(10, 2);
console.log(guesser.guess(10));
console.log(guesser.guess(10));
console.log(guesser.guess(10));
console.log(guesser.guess(10));