export class Board {
  state = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  move = 0;

  getState() {
    return this.state;
  }

  playMove(number: number) {
    if (this.state[number] === 'x' || this.state[number] === 'o')
      throw new Error('Move not allowed');
    if (this.move % 2 === 0) {
      this.state[number] = 'x';
    } else {
      this.state[number] = 'o';
    }
    this.move++;
    return this;
  }
}
