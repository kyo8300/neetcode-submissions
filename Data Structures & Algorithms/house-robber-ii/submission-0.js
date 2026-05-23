class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        function dfs(list) {
            let rob1 = 0;
            let rob2 = 0;
            for(const num of list) {
                let temp = Math.max(num + rob1, rob2);
                rob1 = rob2;
                rob2 = temp;
            }
            return rob2;
        }

        return Math.max(dfs(nums.slice(1)), dfs(nums.slice(0, -1)))
    }
}
