const allEqual
 = arr => arr.every(v => v !== " " &&  v === arr[0]);
const readline = require("readline");
const board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let m = [];
let turn = true;
let combo = {
  row: undefined,
  col: undefined
}
let winner = "";
let gameOver = false;



const game = {
  update: function() {
    this.isGameOver();
    if(gameOver) {
      this.updateBoard();
      console.log(`Game over ${winner} won!`)
      process.exit();
    }
    this.updateBoard();
    m = this.possibleMoves();
    if(m.length === 0) {
      gameOver = true;
      console.log("Game over by draw")
      process.exit();
    }
  },
  isGameOver: function() {
    if(allEqual
      (board[0])){
      gameOver = true;
  winner = board[0][0]

}
if(allEqual
  (board[1])){
      gameOver = true;
winner = board[1][0]

}
if(allEqual
  (board[2])){
          gameOver = true;
winner = board[2][0]

}

if(allEqual
  ([board[0][0], board[1][0], board[2][0]])){
        gameOver = true;
 winner = board[0][0]
}
if(allEqual
  ([board[0][1], board[1][1], board[2][1]])){
        gameOver = true;
winner = board[0][1]
}
if(allEqual
  ([board[0][2], board[1][2], board[2][2]])){
        gameOver = true;
winner = board[0][2]
}
 if(allEqual
  ([board[0][0], board[1][1], board[2][2]])){
        gameOver = true;
winner = board[0][0]
}
   if(allEqual
    ([board[0][2], board[1][1], board[2][0]])){
        gameOver = true;
 winner = board[0][2]
}
  },
  move: function(c) {
    board[+c.row][+c.col] = "x";
    combo.row = undefined;
    combo.col = undefined;
    this.update();
    setTimeout(() => {
      this.computer();
    }, 3000);
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

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if(turn) {
      if(combo.row){
        combo.col = key.name;
        turn = false;
        game.move(combo)
      } else {
        combo.row = key.name;
      }
    } else {
      console.log("Wait for your turn");
      
    }
  }
});