const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    let gameResult = false;

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    for(let i = 0; i < grid.length; i++){
      let currentArray = grid[i];
      let countX = 0;
      let countO = 0;

      for(let j = 0; j < currentArray.length; j++){
        let currentElement = currentArray[j];

        if(currentElement != ' '){
          gameResult = true;

          if(currentElement === "X"){
            countX++;
          }
          if(currentElement === "O"){
            countO++;
          }
          if()
        }
      }

      if(countX === 3){
        return 'X';
      }

      else if(countO === 3){
        return 'O';
      }

    }
    return gameResult;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
