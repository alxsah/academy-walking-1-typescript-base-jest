export class Board {
  state = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

  getState() {
    return this.state;
  }

  playMove(number: number) {
    return this;
  }
}
