class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = new Array(m)
        for(let i = 0; i < m; i++){
            memo[i] = new Array(n).fill(0);
        }
        memo[0][0] = 1;
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++) {
                if(0 <= j - 1) {
                    memo[i][j] += memo[i][j - 1];
                }
                if(0 <= i - 1) {
                    memo[i][j] += memo[i - 1][j];
                }
            }
        }

        return memo[m - 1][n - 1];
    }
}

// as long as i can reach bottom right, it would be counted as path.
// i need to find unique path.

// input: 1 <= m,n <= 100.
// output: unique paths.


// 1 1 1 1 1 1
// 1 2 3 4 5 6
// 1 3 6 10 15 21

// O(m * n)
// O(m * n)