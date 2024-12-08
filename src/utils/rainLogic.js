export const COLORS = ['#FF69B4', '#9370DB', '#4B0082', '#0000FF', '#00FFFF'];

export const createEmptyGrid = (rows, cols) => {
  return Array(rows).fill().map(() => Array(cols).fill(null));
};

export const updateRainGrid = (prevGrid) => {
  const rows = prevGrid.length;
  const cols = prevGrid[0].length;
  const newGrid = prevGrid.map(row => [...row]);

  // Move existing drops down
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = 0; j < cols; j++) {
      if (i === rows - 1) {
        newGrid[i][j] = null;
      } else if (prevGrid[i][j]) {
        newGrid[i + 1][j] = prevGrid[i][j];
        newGrid[i][j] = null;
      }
    }
  }

  // Add new drops at random positions in first row
  for (let j = 0; j < cols; j++) {
    if (Math.random() < 0.1) {
      newGrid[0][j] = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
  }

  return newGrid;
};