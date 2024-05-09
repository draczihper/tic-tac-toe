const readline = require("readline");
const board = [
  [" ", " ", " "]
  [" ", " ", " "]
  [" ", " ", " "]
];

let m = [];
let turn = true;
let combo = {
  row: undefined,
  col: undefined
}



const game = {
  update: function() {
    this.updateBoard();
    m = this.possibleMoves();
  },
  isGameOver: function() {

  },
  move: function(c) {

  },
  possibleMoves: function() {
    const p = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++){
        if (board[i][j] === " ") {
          p.push({row: i, col: i});
        }
      }
    }
    return p;
  },
  computer: function() {
    console.log(m);
    if(m.length > 0) {
      let ra = Math.round(Math.random() * (m.length - 1));
      board[m[ra].row][m[ra].col] = "O"
    }
    turn = true;
    this.update();
    console.log("Your turn");
  }, 
  updateBoard: function() {
    console.log(" ");
    board.forEach((arr, i) => {
      console.log(arr.toString().replace(/,/g, "|"));
    });
  },
}