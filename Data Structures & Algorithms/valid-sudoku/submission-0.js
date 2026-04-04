class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for(let i = 0; i < 9; i++) {
            const rowSet = new Set();
            const colSet = new Set();
            const subSet = new Set();
            for(let j = 0; j < 9; j++){
                const rowGrid = board[i][j];
                if(rowGrid !== '.') {
                    if(rowSet.has(rowGrid)) {
                        return false;
                    }
                    rowSet.add(rowGrid);
                }

                const colGrid = board[j][i];
                if(colGrid !== '.') {
                    if(colSet.has(colGrid)) {
                        return false;
                    }
                    colSet.add(colGrid);
                }

                const subI = Math.floor(j / 3) + 3 * Math.floor(i / 3);
                const subJ = 3 * (i % 3) + j % 3;
                const subGrid = board[subI][subJ];
                if(subGrid !== '.') {
                    if(subSet.has(subGrid)) {
                        return false;
                    }
                    subSet.add(subGrid);
                }
            }
        }

        return true;
    }
}

// 4 7
// 4 % 3 = 1
// 7 % 3 = 1

// 1 2 0

// 1 2 3 4 5 6 7 8 9 
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
