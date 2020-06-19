const gameBoard = (() => {
  let gameboardArr = () => ["", "", "", 
                            "", "", "", 
                            "", "", ""];
  return {gameboardArr};
})();

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return {getName, getSymbol};
}

const gamePlay = (() => {
  let gameboardArr = gameBoard.gameboardArr();
  let gameWon = false;
  let moveCount = 0;
  const gameboard = document.getElementById("gameboard");
  gameboard.addEventListener('click', e => {
    if(gameWon) {
      return;
    }
    playerMove(e);
    win();
  });
  
  let playerMove = e => {
    if(e.target.classList.contains("gameboard-square")) {
      if(e.target.textContent === "X" || e.target.textContent === "O") {
        return;
      }
      if(moveCount % 2 === 0) {
        gameboardArr[e.target.id] = player1.getSymbol();
        e.target.textContent = player1.getSymbol();
      } else if(moveCount % 2 === 1) {
        gameboardArr[e.target.id] = player2.getSymbol();
        e.target.textContent = player2.getSymbol();
      }
      moveCount++;
    }
    console.log(gameboardArr);
  };
  const win = () => {
    if((gameboardArr[0] === "X" && gameboardArr[1] === "X" && gameboardArr[2] === "X") 
    || (gameboardArr[3] === "X" && gameboardArr[4] === "X" && gameboardArr[5] === "X")
    || (gameboardArr[6] === "X" && gameboardArr[7] === "X" && gameboardArr[8] === "X")
    || (gameboardArr[0] === "X" && gameboardArr[3] === "X" && gameboardArr[6] === "X")
    || (gameboardArr[1] === "X" && gameboardArr[4] === "X" && gameboardArr[7] === "X")
    || (gameboardArr[2] === "X" && gameboardArr[5] === "X" && gameboardArr[8] === "X")
    || (gameboardArr[0] === "X" && gameboardArr[4] === "X" && gameboardArr[8] === "X")
    || (gameboardArr[2] === "X" && gameboardArr[4] === "X" && gameboardArr[6] === "X"))
    { gameWon = true;
      console.log( `${player1.getName()} wins!` );
    } else if((gameboardArr[0] === "O" && gameboardArr[1] === "O" && gameboardArr[2] === "O") 
    || (gameboardArr[3] === "O" && gameboardArr[4] === "O" && gameboardArr[5] === "O")
    || (gameboardArr[6] === "O" && gameboardArr[7] === "O" && gameboardArr[8] === "O")
    || (gameboardArr[0] === "O" && gameboardArr[3] === "O" && gameboardArr[6] === "O")
    || (gameboardArr[1] === "O" && gameboardArr[4] === "O" && gameboardArr[7] === "O")
    || (gameboardArr[2] === "O" && gameboardArr[5] === "O" && gameboardArr[8] === "O")
    || (gameboardArr[0] === "O" && gameboardArr[4] === "O" && gameboardArr[8] === "O")
    || (gameboardArr[2] === "O" && gameboardArr[4] === "O" && gameboardArr[6] === "O"))
    { gameWon = true;
      return `${player2.getName()} wins!`; 
  } else if(moveCount === 9) {
    console.log( `nobody wins` );
  }
  // Look at refactoring win conditions later ( look at string.match() )
  // let gameboardTop = gameboardArr.slice(0, 3);
  // let horizontalWin = `x,x,x`;
  // if(String(gameboardTop) === horizontalWin) {
    //   return `${player1.getName()} wins!`;
    // }
  };
})();

// let render = () => {
//   let gameboardArr = gameBoard.gameboardArr();
//   let gameboardSquares = document.querySelectorAll("#gameboard div");
//   for(let i = 0; i < gameboardSquares.length; i++) {
//     gameboardSquares[i].textContent = gameboardArr[i];
//   }
// }

// render();
let player1 = Player("coco", "X");
let player2 = Player("tee", "O");
console.log(player1.getName(), player1.getSymbol());
console.log(player2.getName(), player2.getSymbol());