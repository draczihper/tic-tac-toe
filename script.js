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
function drawBoard() {
  console.log(`
        --BOARD--
        | ${board[0]} ${board[1]} ${board[2]} |
        | ${board[3]} ${board[4]} ${board[5]} |
        | ${board[6]} ${board[7]} ${board[8]} |
        `);
}
drawBoard();

var patternOne = [board[0], board[1], board[2]];
let patternTwo = [board[3], board[4], board[5]];
let patternThree = [board[6], board[7], board[8]];
let patternFour = [board[0], board[3], board[6]];
let patternFive = [board[1], board[4], board[7]];
let patternSix = [board[2], board[5], board[8]]; 
let patternSeven = [board[0], board[4], board[8]];
let patternEight = [board[2], board[4], board[6]];


function playerOneMoveFunc() {
  const playerOneMove = prompt("Player 1 type a number from the board.");
  const parsePlayerOneMove = parseInt(playerOneMove);
  if (board.includes(parsePlayerOneMove)) {
    let index = board.indexOf(parsePlayerOneMove);
    board[index] = playerOne;
    drawBoard();
    playerTwoMoveFunc();
  }
}

function playerTwoMoveFunc() {
  const playerTwoMove = prompt("Player 2 type a number form the board");
  const parsePlayerTwoMove = parseInt(playerTwoMove);
  if (board.includes(parsePlayerTwoMove)) {
    let index = board.indexOf(parsePlayerTwoMove);
    board[index] = playerTwo;
    drawBoard();
    playerOneMoveFunc();
  }
}
playerOneMoveFunc();


