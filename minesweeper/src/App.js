import React from 'react';
import './App.css';
import { Board } from './components/Board';
import { Difficulty } from './components/Difficulty';

export function App() {
  return (
    <div>
      <h1>Minesweeper</h1>
      <Difficulty/>
      <Board />
      <h2>How to play Minesweeper:</h2>
      <p>1) The goal of the game is to NOT click any bombs</p>
      <p>
        2) Each number tells you how many bombs are adjacent to the "clicked"
        cell.
      </p>
      <p>
        3) The numbers range from 0 to 8. Each cell has 8 neighbors. Count them.
      </p>
      <p>4) Use process of elimination to choose where to click next.</p>
    </div>
  );
}


