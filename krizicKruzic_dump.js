function printBoard(board) {
    console.log(board.map(row => row.join(" | ")).join("\n---------\n"));
}

function checkWinner(board, player) {
    return (
        board.some(row => row.every(cell => cell === player)) ||
        [0, 1, 2].some(i => board.every(row => row[i] === player)) ||
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    );
}

function playGame() {
    let board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    let currentPlayer = "X", moves = 0;

    while (moves < 9) {
        printBoard(board);
        let choice = parseInt(prompt(`Player ${currentPlayer}, choose your move (1-9):`)) - 1;
        if (isNaN(choice) || choice < 0 || choice > 8) continue;
        
        let row = Math.floor(choice / 3), col = choice % 3;
        if (board[row][col] === "X" || board[row][col] === "O") continue;

        board[row][col] = currentPlayer;
        moves++;
        if (checkWinner(board, currentPlayer)) {
            printBoard(board);
            console.log(`Player ${currentPlayer} wins!`);
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    
    printBoard(board);
    console.log("It's a tie!");
}

playGame();
