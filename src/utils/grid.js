export const createEmptyGrid = (rows, cols) => {
  return Array(rows).fill().map(() => Array(cols).fill(null));
};

export const updateGrid = (grid) => {
  const newGrid = grid.map(row => [...row]);
  const rows = grid.length;
  const cols = grid[0].length;

  // Move existing drops down
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = 0; j < cols; j++) {
      if (i === rows - 1) {
        newGrid[i][j] = null; // Clear bottom row
      } else if (grid[i][j]) {
        newGrid[i + 1][j] = grid[i][j];
        newGrid[i][j] = null;
      }
    }
  }

  // Add new drops at random positions in the first row
  for (let j = 0; j < cols; j++) {
    if (Math.random() < 0.1) { // 10% chance for a new drop
      newGrid[0][j] = true;
    }
  }

  return newGrid;
};