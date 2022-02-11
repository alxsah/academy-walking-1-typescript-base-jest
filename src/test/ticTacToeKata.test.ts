import {TicTacToeKataGame} from "../main/ticTacToeKata/ticTacToeKataGame";


describe("tic tac toe game", () => {

  it("Player X goes first always", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(1,1);
    expect(ticTacToe.getBoardSymbolAt(1,1)).toBe("X");
  })

  it("Player o goes next", () => {
    const ticTacToe = new TicTacToeKataGame();
    ticTacToe.play(1,2);
    expect(ticTacToe.getBoardSymbolAt(1,2)).toBe("0");
  })

})
