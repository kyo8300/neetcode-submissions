class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = [];
        let path = [];
        function backtracking(idx) {
            ans.push([...path])
            for(let i = idx; i < nums.length; i++) {
                path.push(nums[i]);
                backtracking(i + 1)
                path.pop();
            }
        }

        backtracking(0);
        return ans;
    }
}
