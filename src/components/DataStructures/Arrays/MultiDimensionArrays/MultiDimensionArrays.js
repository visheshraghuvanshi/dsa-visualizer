import React, { useState } from 'react';

function MultiDimensionArrays() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(4);
  const [array, setArray] = useState(
    Array.from({ length: rows }, () => Array.from({ length: cols }, () => ''))
  );

  const handleInput = (row, col, value) => {
    setArray((prevArray) => {
      prevArray[row][col] = value;
      return prevArray;
    });
  };

  return (
    <div className="multi-dimension-arrays">
      <h1>2D Array Visualization</h1>
      <div>
        <span>Rows: </span>
        <input
          type="number"
          min={1}
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
        <span> Columns: </span>
        <input
          type="number"
          min={1}
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
        />
      </div>
      <ul>
  {Array.from({ length: rows }).map((_, rowIndex) => (
    <li key={rowIndex}>
      {Array.from({ length: cols }).map((_, colIndex) => (
        <span key={`${rowIndex}-${colIndex}`}>
          <input
            type="text"
            value={array[rowIndex][colIndex]} // Accessing updated value
            onChange={(e) => handleInput(rowIndex, colIndex, e.target.value)}
          />
        </span>
      ))}
    </li>
  ))}
</ul>
    </div>
  );
}

export default MultiDimensionArrays;
