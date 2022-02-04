export class Board {
  state = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

  getState() {
    return this.state;
  }

  playMove(number: number) {
    this.state[number]='x';
    return this;
  }
}
