import { Board } from "./board";

export class TicTacToeGame {
  board: Board = new Board();

  start() {
    return this.board;
  }

  hasWon() {
    let hasPlayerWon = false;
    for (let i=0; i<3; i++) {
      if (hasWonVertically(this.board, i)) return true;
    }
    return false;
  }
}

const hasWonVertically = (board: Board, startPosition: number) => {
  const state = board.getState();
  const positionsPlayed = state[startPosition] === 'x' || state[startPosition] === 'o';
  return state[startPosition] === state[startPosition + 3] && state[startPosition] === state[startPosition + 6];
}
