import { Player } from './Player';

export class TicTacToeKataGame {

  private ticTacToeBoard: string[][] = [[], [], []];
  private currentPlayer: string = Player.X;
  constructor() {
    this.createBoard();
  }

  createBoard()  {
    for(let row = 0 ; row < 3; row++){
      for(let col = 0 ; col < 3; col++){
        this.ticTacToeBoard[row][col] = Player.EMPTY;
      }
    }
  }

  getNextPlayer(){
   if (this.currentPlayer === Player.X) return Player.O;
   return Player.X;
  }

  play(row: number, col: number) {
    if (this.getBoardSymbolAt(row, col) !== Player.EMPTY) {
      throw new Error("Cannot play on already played position");
    }
    this.ticTacToeBoard[row][col] = this.currentPlayer;
    this.currentPlayer = this.getNextPlayer();
  }

  getBoardSymbolAt(row: number, col: number) {
    return this.ticTacToeBoard[row][col];
  }

  winner() {
    
  }
}
