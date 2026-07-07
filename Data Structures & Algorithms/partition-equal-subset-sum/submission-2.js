class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        if(nums.length < 2) return false;
        const sum = nums.reduce((acc, cur) => acc + cur, 0);
        if(sum % 2 !== 0) return false;
        const target = Math.floor(sum / 2)
        const dp = new Array(target + 1).fill(false);
        dp[0] = true;
        for(const num of nums) {
            for(let i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num]
            }
        }
        return dp[target];
    }
}
