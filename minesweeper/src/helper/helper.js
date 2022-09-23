export function createTable(row, column) {
    const board = [];

    for (let x=0; x < row; x++) {
        let subColumn = [];
        for (let y=0; y < column; y++) {
            subColumn.push("X")
        }
        board.push(subColumn);
    }

    return board;
}