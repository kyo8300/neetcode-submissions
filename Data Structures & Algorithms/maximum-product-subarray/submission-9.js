class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let ans = -Infinity;
        let cur = 1;
        for(let i = 0; i < nums.length; i++) {
            const val = nums[i];
            if(val === 0) {
                ans = Math.max(ans, 0);
                cur = 1;
                continue;
            } else {
                cur *= val
            }

            ans = Math.max(ans, cur);
        }

        cur = 1
        for(let i = nums.length - 1; i >= 0; i--) {
            const val = nums[i];
            if(val === 0) {
                ans = Math.max(ans, 0);
                cur = 1;
                continue;
            } else {
                cur *= val
            }

            ans = Math.max(ans, cur);
        }

        return ans;
    }
}


