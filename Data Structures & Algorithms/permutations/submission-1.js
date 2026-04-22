class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = [];
        const used = new Array(nums.length).fill(false)
        const path = []
        function backtracking() {
            if(path.length === nums.length) {
                ans.push([...path]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(used[i]) continue;
                used[i] = true;
                path.push(nums[i]);
                backtracking()
                path.pop();
                used[i] = false;
            }
        }

        backtracking()
        return ans;
    }
}
