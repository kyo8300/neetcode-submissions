class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const ans = [];
        const maxHeap = new MaxPriorityQueue(([x, y]) => this.euclideanDistance(x, y));
        for(const point of points) {
            maxHeap.enqueue(point)
            if(maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        return maxHeap.toArray();
    }

    euclideanDistance(x, y) {
        return x * x + y * y
    }
}
