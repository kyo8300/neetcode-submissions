class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = [];
        function backtracking(set) {
            if(set.size === nums.length) {
                ans.push([...set]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(set.has(nums[i])) continue;
                set.add(nums[i]);
                backtracking(set)
                set.delete(nums[i]);
            }
        }

        backtracking(new Set())
        return ans;
    }
}
