import React, {useContext} from 'react';
import { MinesweeperContext } from '../App';

export const Difficulty = () => {
    const { setDifficulty , setRow, setColumn, setMines} = useContext(MinesweeperContext);
    
    const handleDifficulty = (e) => {
      e.preventDefault();
      if (e.target.value === "easy") {
        setDifficulty("easy")
        setRow(10);
        setColumn(10);
        setMines(10);
      } else if (e.target.value === "medium") {
        setDifficulty("medium");
        setRow(16);
        setColumn(16);
        setMines(40);
      } else if (e.target.value === "hard") {
        setDifficulty("hard");
        setRow(30);
        setColumn(16);
        setMines(99);
      }
    };

    return (
      <div>
        <form>
          <label htmlFor="difficulty">Pick Difficulty:</label>
          <select name="difficulty" id="difficulty" onChange={handleDifficulty}>
            <option disabled selected defaultValue="disabled">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {/* <button>Submit</button> */}
        </form>
      </div>
    );
}


//The three difficulty levels are 
//Beginner (10x10 with 10 mines), 
//Intermediate (16x16 with 40 mines) and 
//Expert (30x16 with 99 mines)