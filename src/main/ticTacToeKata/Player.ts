export enum PlayerSymbols {
    X = "X",
    O = "O",
    EMPTY = "-"
}

export class Player {
  public currentPlayer: string = PlayerSymbols.X;

  getNextPlayer(){
    if (this.currentPlayer === PlayerSymbols.X)
     return PlayerSymbols.O;
    return PlayerSymbols.X;
  }

  switchPlayer(){
    this.currentPlayer = this.getNextPlayer();
  }
}
