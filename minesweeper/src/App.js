import React, {useState} from 'react';
import './App.css';
import { Board } from './components/Board2';
import { Difficulty } from './components/Difficulty';

export const MinesweeperContext = React.createContext();

export function App() {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [difficulty, setDifficulty] = useState('');

  console.log("Current row", row);
  console.log("Current column", column);
  console.log('Current difficulty', difficulty);

  const contextObj = {
    row,
    setRow,
    column,
    setColumn,
    difficulty,
    setDifficulty,
  };

  return (
    <MinesweeperContext.Provider value={contextObj}>
      <h1 style={{textAlign:'center'}}>Minesweeper</h1>
      <Difficulty />
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
    </MinesweeperContext.Provider>
  );
}


