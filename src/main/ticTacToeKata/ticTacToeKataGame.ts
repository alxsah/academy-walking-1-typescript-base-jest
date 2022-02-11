export class TicTacToeKataGame {

  private ticTacToeBoard: string[][] = [[], [], []];

  constructor() {
    this.createBoard();
  }

  createBoard()  {
    for(let row = 0 ; row < 3; row++){
      for(let col = 0 ; col < 3; col++){
        this.ticTacToeBoard[row][col] = "-";
      }
    }
  }

  play(row: number, col: number) {
    this.ticTacToeBoard[row][col] = "X";
  }

  getBoardSymbolAt(row: number, col: number) {
    return this.ticTacToeBoard[row][col];
  }
}
