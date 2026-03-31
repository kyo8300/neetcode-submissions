class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length;
        const m = grid[0].length;
        const seen = new Array(n);
        for(let i = 0; i < n; i++) {
            seen[i] = new Array(m).fill(0);
        }

        let ans = 0;

        const neighbor = [[0,1], [1,0], [-1,0], [0,-1]]

        const dfs = (row, col) => {
            for(const [r, c] of neighbor) {
                const newRow = row + r;
                const newCol = col + c;

                if(0 <= newRow && newRow < n && 0 <= newCol && newCol < m && grid[newRow][newCol] === '1') {
                    if(seen[newRow][newCol] === 0) {
                        seen[newRow][newCol] = 1;
                        dfs(newRow, newCol);
                    }
                }
            }
        }

        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(seen[i][j] === 0) {
                    seen[i][j] = 1;
                    if(grid[i][j] === '1') {
                        dfs(i, j);
                        ans++;
                    }
                }
            }
        }

        return ans;
    }
}
