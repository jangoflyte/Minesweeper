export function createTable(row, column, mines) {
   let board = [];

    for (let x=0; x < row; x++) {
        let subColumn = [];
        for (let y=0; y < column; y++) {
            subColumn.push({
                value: 0,
                wasClicked: false,
                isBomb: false,
                adjacentBombCount: 0
            });
        }
        board.push(subColumn);
    }

    return board;
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}