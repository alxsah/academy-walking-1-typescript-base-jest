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
    if (hasWonDiagonally(state)) return true;
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

const hasWonDiagonally = (state: string[]) => {
  const winStates = [[0, 4, 8], [2, 4, 6]];
  for (let winState of winStates) {
    if (state[winState[0]] === state[winState[1]] && state[winState[0]] === state[winState[2]] && positionHasBeenPlayed(state[winState[0]])) {
      return true;
    }
  }
  return false;
}

const positionHasBeenPlayed = (position: string) => position === 'x' || position === 'o';
