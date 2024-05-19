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

  function isBoardFull () {
    return board.every(row => row.every(cell => cell !== null));
  }

  function printBoard () {
    board.forEach(row => console.log(row.join(' | ')));
  }

  resetBoard();

  return {
    placeMark,
    checkWin,
    isBoardFull,
    printBoard
  };
})();

const displayController = (function () {
  const mainEl = document.createElement('div');
  const choiceEl = document.createElement('div');
  choiceEl.setAttribute('class', 'choice')
  choiceEl.appendChild(choiceH3)
  const choiceH3 = document.createElement('h3');
  choiceH3.textContent = 'Player 1 choose your mark';
  const choiceIconsDiv = document.createElement('div');
  choiceIconsDiv.setAttribute('id', 'icons');
  const xEl = document.createElement('div');
  xEl.setAttribute('class','x');
  const xELImg = document.createElement('img');
  xELImg.src = 'close.png';
  xEl.appendChild(xELImg);
  const oEl = document.createElement('div');
  oEl.setAttribute('class', 'o');
  const oElImg = document.createElement('img');
  oElImg.src = 'o.png';
oEl.appendChild(oElImg);
})();


const Player = (function (mark) {
  return {
    mark,
  };
});


const game = GameBoard;
const player1 = Player('X');
const player2 = Player('O');

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


