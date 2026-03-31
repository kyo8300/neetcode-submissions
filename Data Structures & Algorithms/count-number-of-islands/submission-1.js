class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length;
        const m = grid[0].length;
        const seen = new Array(n);
        const neighbors = [[1,0], [0, 1], [-1, 0], [0, -1]];
        for(let i = 0; i < n; i++) {
            seen[i] = new Array(m).fill(0);
        }

        const bfs = (row, col) => {
            let queue = [[row, col]];
            while(queue.length) {
                const nextQueue = [];
                const len = queue.length;
                for(let i = 0; i < len; i++) {
                    const [r,c] = queue[i];
                    for(const [rd, cd] of neighbors){
                        const newRow = r + rd;
                        const newCol = c + cd;
                        if(0 <= newRow && newRow < n && 0 <= newCol && newCol < m && grid[newRow][newCol] === '1') {
                            if(seen[newRow][newCol] === 0) {
                                seen[newRow][newCol] = 1;
                                nextQueue.push([newRow, newCol]);
                            }
                        }
                    }
                }
                queue = nextQueue;
            }
        }

        let ans = 0;
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(grid[i][j] === '1' && seen[i][j] === 0) {
                    seen[i][j] = 1;
                    ans++;
                    bfs(i, j)
                }
            }
        }


        return ans;
    }
}
