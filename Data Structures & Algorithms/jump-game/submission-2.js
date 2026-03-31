class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length === 1) return true
        const dfs = (left, right) => {
            if(left > right) return false;
            if(right >= nums.length - 1) return true;

            for(let i = left; i <= right; i++) {
               if(dfs(i + 1, i + nums[i])) return true
            }

            return false
        }


        if(dfs(1, nums[0])){
            return true;
        } else {
            return false;
        }
    }
}

