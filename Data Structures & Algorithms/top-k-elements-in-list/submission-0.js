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

        const ans = []
        const maxHeap = new MaxPriorityQueue((num) => map.get(num));
        for(const key of map.keys()){
            maxHeap.enqueue(key)
        }

        while(k > 0) {
            ans.push(maxHeap.dequeue())
            k--;
        }

        return ans;
    }
}

// [1, 2, 3, 3, 2, 3] k = 2

// {
//     1: 1,
//     2: 2,
//     3: 3
// }




// [1, 2, ]