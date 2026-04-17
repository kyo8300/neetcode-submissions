class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const subset = Array.from({length: 9}, () => new Set())
        for(let i = 0; i < 9; i++) {
            const rowSet = new Set();
            const colSet = new Set();
            for(let j = 0; j < 9; j++) {
                const rowVal = board[i][j]
                if(rowVal !== ".") {
                    if(rowSet.has(rowVal)){
                        return false
                    } else {
                        rowSet.add(rowVal)
                    }
                }

                if(rowVal !== ".") {
                    const subsetIdx = (3 * Math.floor(i/3)) + Math.floor(j/3);
                    if(subset[subsetIdx].has(rowVal)) {
                        return false
                    } else {
                        subset[subsetIdx].add(rowVal)
                    }
                }

                const colVal = board[j][i]
                if(colVal !== "."){
                    if(colSet.has(colVal)){
                        return false
                    } else {
                      colSet.add(colVal)
                    }
                }

            }
        }

        return true;
    }
}
