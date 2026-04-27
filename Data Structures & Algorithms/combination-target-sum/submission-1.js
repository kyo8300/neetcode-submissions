class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const ans = [];
        const path = [];
        function backtracking(idx, remaining) {
            if(remaining < 0) return;
            if(remaining === 0) {
                ans.push([...path])
            }

            for(let i = idx; i < nums.length; i++) {
                path.push(nums[i])
                backtracking(i, remaining - nums[i]);
                path.pop();
            }

        }

        backtracking(0, target)

        return ans;
    }
}
