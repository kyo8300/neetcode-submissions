class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const set = new Set();
        for(const num of nums) {
            if(!set.has(num)) {
                set.add(num)
            } else {
                return num
            }
        }
    }
}

// n = 4
// length of nums is n + 1 = 5
// each int in nums is [1, 4]

// [1, 2, 3, 2, 2]

// [1, 1, 4, 3, 1]
