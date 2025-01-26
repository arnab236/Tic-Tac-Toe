import React from 'react';
import { Cell } from '../types/game';

interface SquareProps {
  value: Cell;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 border border-gray-200 text-4xl font-bold bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
    >
      {value}
    </button>
  );
};