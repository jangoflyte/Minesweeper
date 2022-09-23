import React, {useState} from 'react';
import './App.css';
import { Board } from './components/Board2';
import { Difficulty } from './components/Difficulty';
import { Timer } from './components/Timer';

export const MinesweeperContext = React.createContext();

export function App() {
  const [row, setRow] = useState(10);
  const [column, setColumn] = useState(10);
  const [mines, setMines] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');

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
    mines,
    setMines,
  };

  return (
    <MinesweeperContext.Provider value={contextObj}>
      <h1 style={{ textAlign: "center" }}>Minesweeper</h1>
      <Timer />
      <Difficulty />
      <h3>Number of mines: {mines}</h3>
      <Board />
      <h2>How to play MineSweeper:</h2>
      <p>1) The goal is to NOT click on any mines</p>
      <p>
        2) Each number (1-8) tells you how many bombs are adjacent to the
        "clicked" box.
      </p>
      <p>
        3) Decide on which box to click next that makes most sense. For example,
        if you clicked a box and the number is 1, then there is a bomb close to
        that box.
      </p>
      <p>4) Depending on the difficulty, let's you know how many mines there are.</p>
    </MinesweeperContext.Provider>
  );
}


