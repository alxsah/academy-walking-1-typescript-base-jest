import {TicTacToeKataGame} from "../main/ticTacToeKata/ticTacToeKataGame";

describe("tic tac toe game", () => {

  it("Player X goes first always", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(1,1);
    expect(ticTacToe.getBoardSymbolAt(1,1)).toBe("X");
  })

  it("Player o goes next", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(1,1);
    ticTacToe.play(1,2);
    expect(ticTacToe.getBoardSymbolAt(1,2)).toBe("O");
  })

  it("Player X goes next", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(1,1);
    ticTacToe.play(1,2);
    ticTacToe.play(2,2);
    expect(ticTacToe.getBoardSymbolAt(2,2)).toBe("X");
  })

  it("Player cannot play on played position", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(1,1);
    expect(() => {
      ticTacToe.play(1,1)
    }).toThrowError("Cannot play on already played position");
  })

  it("Player wins when they have 3 symbols in a row horizontally", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(0,0);
    ticTacToe.play(1,0);
    ticTacToe.play(0,1);
    ticTacToe.play(1, 1);
    ticTacToe.play(0,2);
    expect(ticTacToe.winner()).toBe("X");
  })

  it("Player wins when they have 3 symbols in a column vertically", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(0,0);
    ticTacToe.play(0,1);
    ticTacToe.play(1,0);
    ticTacToe.play(1, 2);
    ticTacToe.play(2,0);
    expect(ticTacToe.winner()).toBe("X");
  })

  it("Player wins when they have 3 symbols diagonally", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(0,0);
    ticTacToe.play(0,1);
    ticTacToe.play(1,1);
    ticTacToe.play(1, 2);
    ticTacToe.play(2,2);
    expect(ticTacToe.winner()).toBe("X");
  })
  it("Is draw if board is filled and no winner", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(0,0); // X
    ticTacToe.play(0,1); // O
    ticTacToe.play(0,2); // X
    ticTacToe.play(1,0); // O
    ticTacToe.play(1,2); // X
    ticTacToe.play(1,1); // O
    ticTacToe.play(2,0); // X
    ticTacToe.play(2,2); // O
    ticTacToe.play(2,1); // X
    expect(ticTacToe.winner()).toBe("-");
  })
  it("Player cannot play outside the board", () => {
    const ticTacToe = new TicTacToeKataGame();
    expect(() => {
      ticTacToe.play(1,9)
    }).toThrowError("Cannot play outside the board");
  })
})
