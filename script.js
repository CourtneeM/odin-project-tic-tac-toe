const gameBoard = (() => {
  const div = document.createElement("div");
  let gameboard = () => ["x", "x", "o", 
                         "x", "o", "o", 
                         "o", "", "o"];
  return {gameboard};
})();

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return {getName, getSymbol};
}

const gamePlay = (() => {
  let win = () => {
    let gameboard = gameBoard.gameboard();
    if((gameboard[0] === "x" && gameboard[1] === "x" && gameboard[2] === "x") 
    || (gameboard[3] === "x" && gameboard[4] === "x" && gameboard[5] === "x")
    || (gameboard[6] === "x" && gameboard[7] === "x" && gameboard[8] === "x")
    || (gameboard[0] === "x" && gameboard[3] === "x" && gameboard[6] === "x")
    || (gameboard[1] === "x" && gameboard[4] === "x" && gameboard[7] === "x")
    || (gameboard[2] === "x" && gameboard[5] === "x" && gameboard[8] === "x")
    || (gameboard[0] === "x" && gameboard[4] === "x" && gameboard[8] === "x")
    || (gameboard[2] === "x" && gameboard[4] === "x" && gameboard[6] === "x"))
    { return `${player1.getName()} wins!`;
    } else if((gameboard[0] === "o" && gameboard[1] === "o" && gameboard[2] === "o") 
           || (gameboard[3] === "o" && gameboard[4] === "o" && gameboard[5] === "o")
           || (gameboard[6] === "o" && gameboard[7] === "o" && gameboard[8] === "o")
           || (gameboard[0] === "o" && gameboard[3] === "o" && gameboard[6] === "o")
           || (gameboard[1] === "o" && gameboard[4] === "o" && gameboard[7] === "o")
           || (gameboard[2] === "o" && gameboard[5] === "o" && gameboard[8] === "o")
           || (gameboard[0] === "o" && gameboard[4] === "o" && gameboard[8] === "o")
           || (gameboard[2] === "o" && gameboard[4] === "o" && gameboard[6] === "o"))
           { return `${player2.getName()} wins!`; 
    } else {
      return `nobody wins`;
    }
    // Look at refactoring win conditions later ( look at string.match() )
    // let gameboardTop = gameboard.slice(0, 3);
    // let horizontalWin = `x,x,x`;
    // if(String(gameboardTop) === horizontalWin) {
    //   return `${player1.getName()} wins!`;
    // }
  }
  let checkForWin = () => {

  }
  return {win};
})();

let render = () => {
  let gameboard = gameBoard.gameboard();
  let gameboardSquares = document.querySelectorAll("#gameboard div");
  for(let i = 0; i < gameboardSquares.length; i++) {
    gameboardSquares[i].textContent = gameboard[i];
  }
}
render();
let player1 = Player("c", "X");
let player2 = Player("t", "O");
console.log(player1.getName(), player1.getSymbol());
console.log(player2.getName(), player2.getSymbol());
console.log(gameBoard.gameboard());

console.log(gamePlay.win());