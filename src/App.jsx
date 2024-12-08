import React, { useState, useEffect } from 'react';
import RainGrid from './components/RainGrid';
import GridControls from './components/GridControls';
import { createEmptyGrid, updateRainGrid } from './utils/rainLogic';
import './App.css';

function App() {
  const [dimensions, setDimensions] = useState({ rows: 15, cols: 20 });
  const [grid, setGrid] = useState(() => createEmptyGrid(dimensions.rows, dimensions.cols));

  useEffect(() => {
    setGrid(createEmptyGrid(dimensions.rows, dimensions.cols));
  }, [dimensions]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => updateRainGrid(prevGrid));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleSizeChange = (rows, cols) => {
    setDimensions({ rows, cols });
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Rain Pattern Visualization</h1>
        <GridControls
          rows={dimensions.rows}
          cols={dimensions.cols}
          onSizeChange={handleSizeChange}
        />
        <RainGrid grid={grid} />
      </div>
    </div>
  );
}

export default App;