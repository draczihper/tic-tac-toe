const game = (() => {
  const gameBoard = () => {
    return {
      board: ['', '', '', '', '', '', '', '', ''],
      makeMove(index, player) {
        if (this.board[i] === '') {
          this.board[i] = player;
          return true; 
        }
        return false;
      },
      checkWinner () {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8] // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8] // Columns
          [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (const combo of winningCombinations) {
          const [a, b, c] = combo;
          if (
            this.board[a] && 
            this.board[a] === this.board[b] &&
            this.board[a] === this.board[c] 
          ) {
            return this.board[a]; // Return winner 
          }
        }
        return null;
      }
    };
  };

  let currentPlayer = 'X';
  let gameOver = false;
  const board = gameBoard();

  const switchPlayer = () => {
    currentPlayer =  currentPlayer === 'X' ? 'O' : 'X';
  }
});