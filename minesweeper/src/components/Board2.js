import React, {useState, useEffect} from 'react';
import { createTable } from '../helper/helper';

export const Board = () => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {}, []);

    const newBoard = () => {
        const board = createTable(10, 10);
        console.log(board);
    }
    return (
        <div></div>
    )
}