class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = new Array(cost.length + 1).fill(-1);
        function dp(i) {
            if(i >= cost.length) {
                return 0;
            }
            if(memo[i] !== -1) {
                return memo[i];
            }

            memo[i] = cost[i] + Math.min(dp(i + 1), dp(i + 2));
            return memo[i]
        }

        return Math.min(dp(0), dp(1))
    }
}


