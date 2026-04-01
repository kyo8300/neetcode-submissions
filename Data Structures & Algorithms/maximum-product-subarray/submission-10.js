class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let ans = -Infinity;

        let cur = 1;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 0) {
                cur = 1;
                ans = Math.max(0, ans); 
                continue;
            }
            cur *= nums[i];
            ans = Math.max(cur, ans);
        }

         cur = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            if(nums[i] === 0) {
                cur = 1;
                ans = Math.max(0, ans); 
                continue;
            }
            cur *= nums[i];
            ans = Math.max(cur, ans);
        }

        return ans

    }
}

