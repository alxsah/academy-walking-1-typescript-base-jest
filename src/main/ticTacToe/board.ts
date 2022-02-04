export class Board {
  state = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  move = 0;

  getState() {
    return this.state;
  }

  playMove(number: number) {
    if (this.move % 2 === 0) {
      this.state[number] = 'x';
    } else {
      this.state[number] = 'o';
    }

    this.move++;

    return this;
  }
}
