import React from 'react';
import { Square } from './Square';
import { Board as BoardType } from '../types/game';

interface BoardProps {
  squares: BoardType;
  onClick: (i: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-1 bg-gray-200 p-1 rounded">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};