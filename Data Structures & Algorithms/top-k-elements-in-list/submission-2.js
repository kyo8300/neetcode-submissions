class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(const num of nums) {
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1);
            }
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for(const [key, count] of map) {
            bucket[count].push(key);
        }

        let ans = []
        for(let i = nums.length; i >= 0; i--) {
            for(const freq of bucket[i]) {
                ans.push(freq);
                if(ans.length === k) return ans;
            }
        }
    }
}
