class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxPriorityQueue(([x,y]) => x * x + y * y);
        for(const point of points) {
            maxHeap.enqueue(point);
            if(maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        const res = []
        while(k > 0) {
            res.push(maxHeap.dequeue())
            k--;
        }

        return res;
    }
}
