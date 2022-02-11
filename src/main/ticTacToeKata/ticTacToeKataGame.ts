export class TicTacToeKataGame {

  private ticTacToeBoard: string[][] = [[], [], []];
  private currentPlayer: string = "X";
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

  getNextPlayer(){
   if (this.currentPlayer === "X") return "O";
   return "X";
  }
  play(row: number, col: number) {
    this.ticTacToeBoard[row][col] = this.currentPlayer;
    this.currentPlayer = this.getNextPlayer();
  }

  getBoardSymbolAt(row: number, col: number) {
    return this.ticTacToeBoard[row][col];
  }
}
