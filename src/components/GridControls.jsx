import React from 'react';

function GridControls({ rows, cols, onSizeChange }) {
  return (
    <div className="controls">
      <div className="control-group">
        <label htmlFor="rows">Rows:</label>
        <input
          id="rows"
          type="number"
          min="5"
          max="50"
          value={rows}
          onChange={(e) => onSizeChange(parseInt(e.target.value), cols)}
          className="size-input"
        />
      </div>
      <div className="control-group">
        <label htmlFor="cols">Columns:</label>
        <input
          id="cols"
          type="number"
          min="5"
          max="50"
          value={cols}
          onChange={(e) => onSizeChange(rows, parseInt(e.target.value))}
          className="size-input"
        />
      </div>
    </div>
  );
}

export default GridControls;