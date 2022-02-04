import { TicTacToeGame } from "../main/ticTacToe/ticTacToe";

// Rules
// X always goes first
// Players alternate placing X’s and O’s on the board
// Players cannot play on a played position
// A player with 3 X’s or 3 O’s in a row (vertically, horizontally or diagonally) wins the game.
// If all 9 squares are filled and neither player achieves 3 in a row, the game is a draw.


describe('TicTacToe game', () => {
  it('should be able to create a new board', () => {
    const ticTacToeGame = new TicTacToeGame();
    const board = ticTacToeGame.newBoard();
    const expectedBoard = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    expect(board.getState()).toStrictEqual(expectedBoard);
  });
  it('x should always go first', () => {
    const ticTacToeGame = new TicTacToeGame();
    const board = ticTacToeGame.newBoard();
    expect(board.playMove(3).getState()).toEqual(['-', '-', '-', 'x', '-', '-', '-', '-', '-']);
  });
});
