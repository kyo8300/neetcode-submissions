class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const ans = new Array(nums.length).fill(1);
        let cur = nums[0];
        for(let i = 1; i < nums.length; i++) {
            ans[i] = cur;
            cur *= nums[i];
        }

        cur = nums[nums.length - 1];
        for(let i = nums.length - 2; i >= 0; i--) {
            ans[i] *= cur;
            cur *= nums[i];
        }

        return ans;
    }
}