

const displayController = (function () {
  const mainEl = document.querySelector("#main");

  const choiceEl = document.createElement("div");
  choiceEl.setAttribute("class", "choice");

  // Create h3 tag
  const choiceH3 = document.createElement("h3");
  choiceH3.textContent = "Player 1 choose your mark";

  // Create a div to hold icons (X, O)
  const choiceIconsDiv = document.createElement("div");
  choiceIconsDiv.setAttribute("id", "icons");

  // Create a div to hold 'X' mark image
  const xEl = document.createElement("div");
  xEl.setAttribute("class", "x-button");
  xEl.value = "X";
  const xELImg = document.createElement("img");
  xELImg.src = "close.png";
  xEl.appendChild(xELImg);

  // create a div to hold 'O' mark image
  const oEl = document.createElement("div");
  oEl.setAttribute("class", "choice-button");
  oEl.value = "O";
  console.log(oEl.value);
  const oElImg = document.createElement("img");
  oElImg.src = "o.png";
  oEl.appendChild(oElImg);

  // Append X and O to choiceIconsDiv
  choiceIconsDiv.appendChild(xEl);
  choiceIconsDiv.appendChild(oEl);

  // Append DOM content
  mainEl.appendChild(choiceEl);
  choiceEl.appendChild(choiceH3);
  choiceEl.appendChild(choiceIconsDiv);

  // Create and info div
  const msgDiv = document.createElement('div');
 msgDiv.setAttribute('id', 'msg');
 const infoSpan = document.createElement('span');
 infoSpan.setAttribute('id', 'info');
 msgDiv.append(infoSpan);
 mainEl.appendChild(msgDiv);

  // Create the grid class
  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("class", "grid");
  gridContainer.innerHTML = `
 <div class="mark-container one"></div>
        <div class="mark-container two"></div>
        <div class="mark-container three"></div>
        <div class="mark-container four"></div>
        <div class="mark-container five"></div>
        <div class="mark-container six"></div>
        <div class="mark-container seven"></div>
        <div class="mark-container eight"></div>
        <div class="mark-container nine"></div>
 `;
 mainEl.appendChild(gridContainer);
 gridContainer.style.display = 'none';

 let playerOneChoice;
 let playerTwoChoice;


 
  xEl.addEventListener("click", () => {
    playerOneChoice = xEl.value;
    playerTwoChoice = oEl.value
    choiceEl.style.display = 'none';
    gridContainer.style.display = '';
    infoSpan.textContent = `Player 1 (${xEl.value}) begin play`;
    console.log(`Player 1 choice is ${playerOneChoice} and player 2 is ${playerTwoChoice}`);

  });

  oEl.addEventListener("click", () => {
    playerOneChoice = oEl.value;
    playerTwoChoice = xEl.value
    choiceEl.style.display = 'none';
    gridContainer.style.display = '';
    infoSpan.textContent = `Player 1 (${oEl.value}) begin play`;
    console.log(`Player 1 choice is ${playerOneChoice} and player 2 is ${playerTwoChoice}`);
  });

  return {
     get player1() {
      return playerOneChoice;
    },

     get player2() {
      return playerTwoChoice;
    }
  };

})();


const GameBoard = (function () {
  const board = [];

  function resetBoard() {
    board.length = 0;
    for (let i = 0; i < 3; i++) {
      board[i] = new Array(3).fill(null);
    }
  }

  function placeMark(row, col, mark) {
    if (board[row][col] === null) {
      board[row][col] = mark;
      return true;
    }
    return false;
  }

  function checkWin(mark) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i].every((cell) => cell === mark)) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        [board[0][i], board[1][i], board[2][i]].every((cell) => cell === mark)
      ) {
        return true;
      }
    }

    // Check diagonals
    const diag1 = [board[0][0], board[1][1], board[2][2]];
    const diag2 = [board[0][2], board[1][1], board[2][0]];
    if (
      diag1.every((cell) => cell === mark) ||
      diag2.every((cell) => cell === mark)
    ) {
      return true;
    }

    return false;
  }

  function isBoardFull() {
    return board.every((row) => row.every((cell) => cell !== null));
  }

  function printBoard() {
    board.forEach((row) => console.log(row.join(" | ")));
  }

  resetBoard();

  return {
    placeMark,
    checkWin,
    isBoardFull,
    printBoard,
  };
})();



// const Player = function (mark) {
//   return {
//     mark,
//   };
// };

const game = GameBoard;
// const player1 = Player(`${displayController.playerOneChoice}`);
// const player2 = Player(`${displayController.playerTwoChoice}`);

let currentPlayer = player1;

const takeTurn = (row, col) => {
  if (game.placeMark(row, col, currentPlayer.mark)) {
    game.printBoard();
    if (game.checkWin(currentPlayer.mark)) {
      console.log(`Player ${currentPlayer.mark} wins`);
    } else if (game.isBoardFull()) {
      console.log(`Tie`);
    } else {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      console.log(`Player ${currentPlayer.mark}'s turn`);
    }
  } else {
    console.log(`Invalid move. Try again`);
  }
};

game.printBoard();
console.log(`Player ${currentPlayer.mark}'s turn`);
