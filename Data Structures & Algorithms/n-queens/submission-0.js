class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const row = n;
        const col = n;
        const board = new Array(row);
        for(let i = 0; i < row; i++) {
            board[i] = new Array(col).fill('.');
        }
        const colSet = new Set();
        const diagonalset = new Set(); // r + c
        const antiDiagonalset = new Set(); // r - c

        const ans = [];
        function backtracking(r) {
            if(r === row) {
                ans.push(board.map((row) => row.join('')));
                return;
            }


            for(let c = 0; c < col; c++) {
                if(colSet.has(c) || diagonalset.has(r + c) || antiDiagonalset.has(r - c)) {
                    continue;
                }
                board[r][c] = 'Q';
                colSet.add(c)
                diagonalset.add(r + c)
                antiDiagonalset.add(r - c)
                backtracking(r + 1);
                board[r][c] = '.';
                colSet.delete(c)
                diagonalset.delete(r + c)
                antiDiagonalset.delete(r - c)
            }

   
        }

        backtracking(0)
        return ans;
    }
}
