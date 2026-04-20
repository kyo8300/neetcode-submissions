class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const ans = [];
        const sumArr = []
        function backtracking(idx, sum) {
            if(sum < 0) {
                return;
            }
            if(sum === 0) {
                ans.push([...sumArr]);
                return;
            }

            for(let i = idx; i < nums.length; i++) {
                const num = nums[i];
                sumArr.push(num);
                backtracking(i, sum - num)
                sumArr.pop();
            }
        }
        backtracking(0, target)
        return ans;
    }
}
