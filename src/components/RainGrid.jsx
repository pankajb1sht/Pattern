import React from 'react';

function RainGrid({ grid }) {
  return (
    <div className="grid">
      {grid.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className="cell"
              style={{ backgroundColor: cell || '#1a1a1a' }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default RainGrid;