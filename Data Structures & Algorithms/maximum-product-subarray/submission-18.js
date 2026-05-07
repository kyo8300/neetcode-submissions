class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = 1;
        let min = 1;
        let ans = -Infinity
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if(num === 0) {
                ans = Math.max(0, ans);
                max = 1;
                min = 1;
                continue;
            }

            let temp = max;
            max = Math.max(num, max * num, min * num);
            min = Math.min(num, temp * num, min * num);
            ans = Math.max(max, ans)
        }

        return ans;
    }
}

// let max = 10
// [2, -3, 0, 10, -6]


