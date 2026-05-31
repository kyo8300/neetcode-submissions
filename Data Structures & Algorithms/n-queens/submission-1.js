class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const ans = [];
        const board = Array.from({length: n}, () => new Array(n).fill('.'));
        const colSet = new Set();
        const diagonalSet = new Set();
        const antiDiagonalSet = new Set();
        function backtracking(row) {
            if(row === n) {
                ans.push(board.map(row => row.join('')))
                return;
            }

            for(let col = 0; col < n; col++) {
                if(colSet.has(col) || diagonalSet.has(row + col) || antiDiagonalSet.has(row - col)) {
                    continue;
                }
                colSet.add(col)
                diagonalSet.add(row + col)
                antiDiagonalSet.add(row - col)
                board[row][col] = "Q";
                backtracking(row + 1);
                board[row][col] = ".";
                colSet.delete(col)
                diagonalSet.delete(row + col)
                antiDiagonalSet.delete(row - col)
            }
        }

        backtracking(0);
        return ans;
    }
}
