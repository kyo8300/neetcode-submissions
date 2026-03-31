class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let count = 0;
        const directions = [[1,0], [0,1], [-1, 0], [0, -1]]
        const getNeighbor = (row, col) => {
            const res = []
            for(const [x, y] of directions) {
                if(0 <= x + row && x + row < m && 0 <= y + col && y + col < n) {
                    res.push([x + row, y + col]);
                }
            }
            return res;
        }

        const dfs = (row, col) => {
            for(const [nRow, nCol] of getNeighbor(row, col) || []) {
                if(grid[nRow][nCol] === '1') {
                    grid[nRow][nCol] = '0';
                    dfs(nRow, nCol);
                }
            }
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++){
                if(grid[i][j] === '1') {
                    grid[i][j] = '0';
                    dfs(i, j);
                    count++;
                }
            }
        }

        return count;
    }
}
