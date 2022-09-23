import React, {useState, useEffect, useContext} from 'react';
import { createTable } from '../helper/helper';
import styled from 'styled-components';
import { MinesweeperContext } from '../App';

const StyledDiv = styled.div`
  display: flex;
  border: 1px solid black;
`;
const StyledContainer = styled.div`
  border: 1px solid black;
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: url("./images/background.png");
`;
const StyledBox = styled.div`
  border: 1px solid black;
  padding: 1em;
  background-color: grey;
`;

export const Board = () => {
    const [grid, setGrid] = useState([]);
    const { row, column, mines} = useContext(MinesweeperContext);
    //console.log("This is the grid", grid);

    useEffect(() => {
        const newBoard = () => {
            const board = createTable(row, column, mines);
            console.log(board);
            setGrid(board);
        };
        newBoard();
    }, [row, column]);

    if (grid.length === 0) {
        return <div>Loading...</div>
    }

    return (
      <StyledContainer>
        <div>
          {grid.map((singleRow, index) => {
            return (
              <StyledDiv key={index}>
                {/* <p>row</p> */}
                {singleRow.map((singleBlock, index) => {
                  return (
                    <StyledBox key={index}>
                      {/* <p>column</p> */}
                      {singleBlock.value}
                    </StyledBox>
                  );
                })}
              </StyledDiv>
            );
          })}
        </div>
      </StyledContainer>
    );
}