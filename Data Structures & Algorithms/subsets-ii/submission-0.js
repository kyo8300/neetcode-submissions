class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const ans = [];
        const path = [];
        nums.sort((a,b) => a-b);
        function backtracking(idx) {
            ans.push([...path])
            if(path.length === nums.length) return;

            for(let i = idx; i < nums.length; i++) {
                if(i > idx && nums[i] === nums[i - 1]) continue;
                path.push(nums[i])
                backtracking(i + 1)
                path.pop();
            }
        }

        backtracking(0)
        return ans;
    }
}
