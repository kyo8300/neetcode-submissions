class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];

        function rob(houses) {
            const dp = new Array(houses.length).fill(0);
            dp[0] = houses[0];
            dp[1] = Math.max(houses[0], houses[1]);
            for(let i = 2; i < houses.length; i++) {
                dp[i] = Math.max(dp[i - 2] + houses[i], dp[i - 1]);
            }

            return dp[houses.length - 1]
        }

        return Math.max(rob(nums.slice(0, -1)), rob(nums.slice(1)))

    }
}
