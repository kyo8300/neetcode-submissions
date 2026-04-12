class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let ans = 0;
        for(const num of nums) {
            if(!numSet.has(num - 1)) {
                let curNum = num;
                let count = 1;
                while(numSet.has(curNum + 1)){
                    curNum += 1;
                    count++;
                }

                ans = Math.max(count, ans);
            }
            
        }

        return ans;
    }
}
