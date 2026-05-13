class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let l = 0;
        let r = points.length - 1;
        while(l < r) {
            let idx = l;
            for(let i = l; i < r; i++) {
                if(this.dist(points[i]) <= this.dist(points[r])) {
                    [points[i], points[idx]] = [points[idx], points[i]]
                    idx++;
                }
            }
            [points[r], points[idx]] = [points[idx], points[r]];
            if(idx === k - 1) {
                break;
            } else if(idx > k - 1) {
                r = idx - 1;
            } else {
                l = idx + 1;
            }
        }

        return points.slice(0, k)
    }

    dist(p) {
        return p[0] * p[0] + p[1] * p[1]
    }
}
