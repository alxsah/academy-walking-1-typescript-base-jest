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
    const board = ticTacToeGame.start();
    const expectedBoard = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    expect(board.getState()).toStrictEqual(expectedBoard);
  });
  it('x should always go first', () => {
    const ticTacToeGame = new TicTacToeGame();
    const board = ticTacToeGame.start();
    expect(board.playMove(3).getState()).toEqual(['-', '-', '-', 'x', '-', '-', '-', '-', '-']);
  });
  it('o should go after x', () => {
    const ticTacToeGame = new TicTacToeGame();
    const board = ticTacToeGame.start();
    expect(board.playMove(3).playMove(4).getState()).toEqual(['-', '-', '-', 'x', 'o', '-', '-', '-', '-'])
  });
  it('should not allow you to play on a played position', () => {
    const ticTacToeGame = new TicTacToeGame();
    let board = ticTacToeGame.start();
    board = board.playMove(3);
      expect(() => {
        board.playMove(3);
      }).toThrowError('Move not allowed');
    });
    it('A player with 3 X’s or 3 o’s in a row vertically wins', () => {
      const ticTacToeGame = new TicTacToeGame();
      let board = ticTacToeGame.start();
      board = board
        .playMove(0) // x first move
        .playMove(1) // o first move
        .playMove(3) // x
        .playMove(2) // o
        .playMove(6) // x wins

      expect(board.getState()).toEqual(['x', 'o', 'o', 'x', '-', '-', 'x', '-', '-'])
      expect(ticTacToeGame.hasWon()).toBe(true);
    });
  it('A player with 3 X’s or 3 o’s in a row vertically wins for a different row', () => {
    const ticTacToeGame = new TicTacToeGame();
    let board = ticTacToeGame.start();
    board = board
      .playMove(1) // x first move
      .playMove(2) // o first move
      .playMove(4) // x
      .playMove(8) // o
      .playMove(7) // x wins

    expect(board.getState()).toEqual(['-', 'x', 'o', '-', 'x', '-', '-', 'x', 'o'])
    expect(ticTacToeGame.hasWon()).toBe(true);
  });
  it('A player with 3 X’s or 3 o’s in a row horizontally wins', () => {
    const ticTacToeGame = new TicTacToeGame();
    let board = ticTacToeGame.start();
    board = board
      .playMove(0) // x first move
      .playMove(8) // o first move
      .playMove(1) // x
      .playMove(7) // o
      .playMove(2) // x wins

    expect(board.getState()).toEqual(['x', 'x', 'x', '-', '-', '-', '-', 'o', 'o'])
    expect(ticTacToeGame.hasWon()).toBe(true);
  });
});
