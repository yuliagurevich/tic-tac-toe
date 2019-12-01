import React from 'react';

import Board from './Board';

import './App.css';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* to do */}</ol>
      </div>
    </div>
  );
}

export default App;
