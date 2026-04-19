class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const ans = [];
        const path = [];
        function backtracking(start) {
            ans.push([...path])
            for(let i = start; i < nums.length; i++) {
                const num = nums[i]
                path.push(num);
                backtracking(i + 1);
                path.pop()
            }
        }

        backtracking(0)

        return ans
    }
}
