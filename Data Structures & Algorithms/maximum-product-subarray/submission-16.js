class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let ans = -11;
        let cur = 1;
        for(const num of nums) {
            if(num === 0) {
                cur = 1;
                ans = Math.max(ans, 0);
                continue;
            }
            cur *= num;
            ans = Math.max(ans, cur)
        }
        cur = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i];
            if(num === 0) {
                cur = 1;
                ans = Math.max(ans, 0);
                continue;
            }
            cur *= num;
            ans = Math.max(ans, cur)
        }
        return ans;
    }
}

