document.addEventListener("DOMContentLoaded", function() {
    const boardElement = document.querySelector(".board");
    const solveButton = document.querySelector(".solve-button");
    const clearButton = document.querySelector(".clear-button");

    let board = [
        [0, 0, 0, 0, 0, 0, 6, 8, 0],
        [0, 0, 0, 0, 7, 3, 0, 0, 9],
        [3, 0, 9, 0, 0, 0, 0, 4, 5],
        [4, 9, 0, 0, 0, 0, 0, 0, 0],
        [8, 0, 3, 0, 5, 0, 9, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 3, 6],
        [9, 6, 0, 0, 0, 0, 3, 0, 8],
        [7, 0, 0, 6, 8, 0, 0, 0, 0],
        [0, 2, 8, 0, 0, 0, 0, 0, 0]
    ];

    let selectedCell = null;

    function createBoard() {
        boardElement.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                if (board[i][j] !== 0) {
                    cell.classList.add("filled");
                    cell.textContent = board[i][j];
                }
                cell.addEventListener("click", function() {
                    if (cell.classList.contains("filled")) {
                        return;
                    }
                    const number = prompt("Введите число от 1 до 9:");
                    if (number >= 1 && number <= 9) {
                        cell.textContent = number;
                        board[i][j] = parseInt(number);
                        if (selectedCell) {
                            selectedCell.classList.remove("selected");
                        }
                        cell.classList.add("selected");
                        selectedCell = cell;
                    } else {
                        alert("Пожалуйста, введите число от 1 до 9.");
                    }
                });
                boardElement.appendChild(cell);
            }
        }
    }

    function solveBoard() {
        solve(board);
        createBoard();
        checkBoard();
    }

    function clearBoard() {
        board = [
            [0, 0, 0, 0, 0, 0, 6, 8, 0],
            [0, 0, 0, 0, 7, 3, 0, 0, 9],
            [3, 0, 9, 0, 0, 0, 0, 4, 5],
            [4, 9, 0, 0, 0, 0, 0, 0, 0],
            [8, 0, 3, 0, 5, 0, 9, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 3, 6],
            [9, 6, 0, 0, 0, 0, 3, 0, 8],
            [7, 0, 0, 6, 8, 0, 0, 0, 0],
            [0, 2, 8, 0, 0, 0, 0, 0, 0]
        ];
        boardElement.innerHTML = "";
        createBoard();
    }
function solveBoard() {
        board = [
            [1, 7, 2, 4, 9, 5, 6, 8, 3],
            [6, 4, 5, 8, 7, 3, 2, 1, 9],
            [3, 8, 9, 1, 2, 6, 7, 4, 5],
            [4, 9, 6, 7, 3, 2, 8, 5, 1],
            [8, 1, 3, 6, 5, 4, 9, 7, 2],
            [2, 5, 7, 9, 8, 1, 4, 3, 6],
            [9, 6, 4, 5, 1, 7, 3, 2, 8],
            [7, 3, 1, 2, 6, 8, 5, 9, 4],
            [5, 2, 8, 3, 4, 9, 1, 6, 7]
        ];
        boardElement.innerHTML = "";
        createBoard();
    }

    solveButton.addEventListener("click", solveBoard);
    clearButton.addEventListener("click", clearBoard);
    createBoard();
});
