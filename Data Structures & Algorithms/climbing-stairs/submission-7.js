class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n <= 2) return n;
        const memo = new Array(n + 1).fill(-1);
        memo[0] = 1;
        memo[1] = 1;
        function dfs(i) {
            if(i === 0) return 1;
            if(i < 0) return 0;
            if(memo[i] !== -1) {
                return memo[i];
            }

            memo[i] = dfs(i - 1) + dfs(i - 2);
            return memo[i]
        }

        return dfs(n)
    }
}