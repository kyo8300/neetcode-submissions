class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let ans = [];
        const maxHeap = new MaxPriorityQueue(([x, y]) =>x * x + y * y);
        for(const xy of points) {
            maxHeap.enqueue(xy);
            if(maxHeap.size() > k) {
                maxHeap.dequeue()
            }
        }

        while(maxHeap.size()) {
            ans.push(maxHeap.dequeue())
        }

        return ans;
    }

}

