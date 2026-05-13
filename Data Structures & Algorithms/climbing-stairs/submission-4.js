class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Array(n + 1).fill(-1);
        function dfs(i) {
            if(i === n) return 1;
            if(i > n) return 0;
            if(memo[i] !== -1) {
                return memo[i]
            }

            memo[i] = dfs(i + 1) + dfs(i + 2);
            return memo[i];
        }        
        return dfs(0)
    }
}