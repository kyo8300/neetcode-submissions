class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let ans = -Infinity;
        let curMax = 1;
        let curMin = 1;
        for(const val of nums) {
            if(val === 0) {
                ans = Math.max(0, ans);
                curMax = 1;
                curMin = 1;
                continue;
            }
            const temp = val * curMax
            curMax = Math.max(val * curMax, val * curMin, val);
            curMin = Math.min(temp, val * curMin, val);
            ans = Math.max(curMax, ans);
        }

        return ans;
    }
}


