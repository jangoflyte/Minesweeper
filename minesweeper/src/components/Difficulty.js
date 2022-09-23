import React from 'react';

export const Difficulty = () => {
    return (
      <div>
        <form>
          <label htmlFor="difficulty">Pick Difficulty:</label>
          <select name="difficulty" id="difficulty">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    )
}


//The three difficulty levels are 
//Beginner (10x10 with 10 mines), 
//Intermediate (16x16 with 40 mines) and 
//Expert (30x16 with 99 mines)