import { Board } from "./board";

export class TicTacToeGame {
  board: Board = new Board();

  start() {
    return this.board;
  }

  hasWon() {
    const state = this.board.getState();
    let hasPlayerWon = false;
    for (let i=0; i<3; i++) {
      if (hasWonVertically(state, i) || hasWonHorizontally(state, i)) return true;
    }
    return false;
  }
}

const hasWonVertically = (state: string[], startPosition: number) => {
  const positionsPlayed = state[startPosition] === 'x' || state[startPosition] === 'o';
  return state[startPosition] === state[startPosition + 3] && state[startPosition] === state[startPosition + 6];
}

const hasWonHorizontally = (state: string[], startPosition: number) => {
  const positionsPlayed = state[startPosition] === 'x' || state[startPosition] === 'o';
  return state[startPosition] === state[startPosition + 1] && state[startPosition] === state[startPosition + 2];
}

