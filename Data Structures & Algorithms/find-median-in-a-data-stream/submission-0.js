class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.large = new MinPriorityQueue();

    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.large.front() < num || this.large.isEmpty()) {
            this.large.enqueue(num)
        } else {
            this.small.enqueue(num)
        }

        if(this.small.size() - this.large.size() > 1) {
            this.large.enqueue(this.small.dequeue())
        } else if(this.large.size() - this.small.size() > 1) {
            this.small.enqueue(this.large.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.small.size() === this.large.size()) {
            return (this.large.front() + this.small.front()) / 2
        } else if(this.small.size() - this.large.size() >= 1) {
            return this.small.front()
        } else {
            return this.large.front()
        }
    }
}
