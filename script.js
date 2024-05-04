let playerOne = prompt("Choose X or O").toUpperCase();
let playerTwo;
if (playerOne == "X") {
  playerTwo = "O";
}
if (playerOne == "O") {
  playerTwo = "X";
}
console.log(`Player one is ${playerOne} and player two is ${playerTwo}`);

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let boardCopy = [...board];
function drawBoard() {
  console.log(`
        --BOARD--
        | ${board[0]} ${board[1]} ${board[2]} |
        | ${board[3]} ${board[4]} ${board[5]} |
        | ${board[6]} ${board[7]} ${board[8]} |
        `);
}
drawBoard();


function playerMove() {
  const player1Move = prompt("Player 1 type a number from the board.");
  const parsePlayer1Move = parseInt(player1Move);
  if (board.includes(parsePlayer1Move)) {
    let index = board.indexOf(parsePlayer1Move);
    board[index] = playerOne;
    drawBoard();
  }

  const player2Move = prompt("Player 2 type a number form the board");
  const parsePlayer2Move = parseInt(player2Move);
  if (board.includes(parsePlayer2Move)) {
    let index = board.indexOf(parsePlayer2Move);
    board[index] = player2;
    drawBoard();
  }
}

for (let i = 0; i < 9; i++) {
    playerMove();
}
