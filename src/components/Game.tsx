import React, { useState } from 'react';
import { Board } from './Board';
import { checkWinner } from '../utils/gameLogic';
import { Player, Board as BoardType } from '../types/game';

export const Game: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    if (board[i] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const winner = checkWinner(board);
  const status = winner
    ? winner === 'DRAW'
      ? "It's a draw!"
      : `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Tic Tac Toe</h1>
      <div className="text-xl mb-4 text-gray-700">{status}</div>
      <Board squares={board} onClick={handleClick} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={resetGame}
      >
        New Game
      </button>
    </div>
  );
};