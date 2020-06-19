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

let player1Name = prompt("Player 1 name?")
let player2Name = prompt("Player 2 name?")
let player1 = Player(player1Name, "X");
let player2 = Player(player2Name, "O");

const displayStats = (() => {
  let resultsDiv = document.getElementById("stats");
  let displayPlayers = () => {
    let playersP = document.createElement("p");
    playersP.textContent = `${player1.getName()} [X] vs. ${player2.getName()} [O]`;
    resultsDiv.appendChild(playersP);
  };
  let displayWinner = () => {
    let winnerDisplayed = false;
    if(!winnerDisplayed) {
      let winnerP = document.createElement("p");
      let winner = gamePlay.win();
      winnerP.textContent = winner;
      winnerP.style.marginTop = "40px";
      winnerP.style.fontWeight = "bold";
      resultsDiv.appendChild(winnerP);
      winnerDisplayed = true;
    }
   }
  return {displayPlayers, displayWinner};
})()

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
    displayStats.displayWinner();
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
    let winner;
    if((gameboardArr[0] === "X" && gameboardArr[1] === "X" && gameboardArr[2] === "X") 
    || (gameboardArr[3] === "X" && gameboardArr[4] === "X" && gameboardArr[5] === "X")
    || (gameboardArr[6] === "X" && gameboardArr[7] === "X" && gameboardArr[8] === "X")
    || (gameboardArr[0] === "X" && gameboardArr[3] === "X" && gameboardArr[6] === "X")
    || (gameboardArr[1] === "X" && gameboardArr[4] === "X" && gameboardArr[7] === "X")
    || (gameboardArr[2] === "X" && gameboardArr[5] === "X" && gameboardArr[8] === "X")
    || (gameboardArr[0] === "X" && gameboardArr[4] === "X" && gameboardArr[8] === "X")
    || (gameboardArr[2] === "X" && gameboardArr[4] === "X" && gameboardArr[6] === "X"))
    { gameWon = true;
      winner = `${player1.getName()} wins!`;
    } else if((gameboardArr[0] === "O" && gameboardArr[1] === "O" && gameboardArr[2] === "O") 
    || (gameboardArr[3] === "O" && gameboardArr[4] === "O" && gameboardArr[5] === "O")
    || (gameboardArr[6] === "O" && gameboardArr[7] === "O" && gameboardArr[8] === "O")
    || (gameboardArr[0] === "O" && gameboardArr[3] === "O" && gameboardArr[6] === "O")
    || (gameboardArr[1] === "O" && gameboardArr[4] === "O" && gameboardArr[7] === "O")
    || (gameboardArr[2] === "O" && gameboardArr[5] === "O" && gameboardArr[8] === "O")
    || (gameboardArr[0] === "O" && gameboardArr[4] === "O" && gameboardArr[8] === "O")
    || (gameboardArr[2] === "O" && gameboardArr[4] === "O" && gameboardArr[6] === "O"))
    { gameWon = true;
      winner = `${player2.getName()} wins!`; 
  } else if(moveCount === 9) {
      winner = "It's a tie!";
  }
  if(winner != undefined) {
    return winner;
  }
  // Look at refactoring win conditions later ( look at string.match() )
  // let gameboardTop = gameboardArr.slice(0, 3);
  // let horizontalWin = `x,x,x`;
  // if(String(gameboardTop) === horizontalWin) {
    //   return `${player1.getName()} wins!`;
    // }
  };
  return {win};
})();

displayStats.displayPlayers();