import { Board, Player } from '../types/game';

export const checkWinner = (board: Board): Player | 'DRAW' | null => {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const [a, b, c] of winningCombos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }

  if (board.every(cell => cell !== null)) {
    return 'DRAW';
  }

  return null;
};