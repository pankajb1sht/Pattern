import React from 'react';
import { getRandomColor } from '../utils/colors';

export default function Grid({ grid }) {
  return (
    <div className="grid gap-1" style={{
      gridTemplateColumns: `repeat(${grid[0].length}, minmax(0, 1fr))`,
    }}>
      {grid.map((row, i) => (
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={`aspect-square border border-gray-700 rounded-sm ${
              cell ? getRandomColor() : 'bg-gray-900'
            }`}
          />
        ))
      ))}
    </div>
  );
}