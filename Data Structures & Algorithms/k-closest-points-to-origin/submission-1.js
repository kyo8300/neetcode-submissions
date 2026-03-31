class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let ans = [];
        const minHeap = new MinPriorityQueue(([x, y]) =>x * x + y * y);
        for(const xy of points) {
            minHeap.enqueue(xy)
        }


        while(k > 0) {
            ans.push(minHeap.dequeue())
            k--;
        }

        return ans;
    }

}

