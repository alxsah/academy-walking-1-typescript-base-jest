import {Player, PlayerSymbols} from './Player';

export class TicTacToeKataGame {

  private ticTacToeBoard: string[][] = [[], [], []];
  private player: Player = new Player();

  constructor() {
    this.createBoard();
  }

  createBoard()  {
    for(let row = 0 ; row < 3; row++){
      for(let col = 0 ; col < 3; col++){
        this.ticTacToeBoard[row][col] = PlayerSymbols.EMPTY;
      }
    }
  }

  play(row: number, col: number) {
    if (this.getBoardSymbolAt(row, col) !== PlayerSymbols.EMPTY) {
      throw new Error("Cannot play on already played position");
    }
    this.ticTacToeBoard[row][col] = this.player.currentPlayer;
    this.player.switchPlayer();
  }

  getBoardSymbolAt(row: number, col: number) {
    return this.ticTacToeBoard[row][col];
  }

  winner() {
    for(let position = 0; position < 3; position++ ){
       if(this.checkRowForPlayer(position,PlayerSymbols.X) || this.checkColForPlayer(position,PlayerSymbols.X) )
         return PlayerSymbols.X;
       if(this.checkRowForPlayer(position,PlayerSymbols.O) || this.checkColForPlayer(position,PlayerSymbols.X))
         return PlayerSymbols.O;
       if(this.checkdiagForPlayer(PlayerSymbols.X))
         return PlayerSymbols.X;
       if(this.checkdiagForPlayer(PlayerSymbols.O))
         return PlayerSymbols.O;  
    }
    return PlayerSymbols.EMPTY;
  }

  checkRowForPlayer(row: number, player: string){
    return this.ticTacToeBoard[row][0] === player && this.ticTacToeBoard[row][1] === player &&  this.ticTacToeBoard[row][2] === player;
  }

  checkColForPlayer(col: number, player: string){
    return this.ticTacToeBoard[0][col] === player && this.ticTacToeBoard[1][col] === player &&  this.ticTacToeBoard[2][col] === player;
  }
  checkdiagForPlayer(player:string){
    return this.ticTacToeBoard[0][0] === player && this.ticTacToeBoard[1][1] === player &&  this.ticTacToeBoard[2][2] === player || this.ticTacToeBoard[2][0] === player && this.ticTacToeBoard[1][1] === player &&  this.ticTacToeBoard[0][2] === player ;
  }
}
