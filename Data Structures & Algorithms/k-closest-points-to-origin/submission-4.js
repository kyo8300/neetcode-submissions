class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let l = 0;
        let r = points.length - 1;

        const partition = (l, r) => {
            const pivot = this.euclidean(points[r])

            let i = l;
            for(let j = l; j < r; j++) {
                if(this.euclidean(points[j]) <= pivot) {
                    [points[j], points[i]] = [points[i], points[j]]
                    i++;
                }
            }
            [points[i], points[r]] = [points[r], points[i]]
            return i;
        }

        while(l < r) {
            const p = partition(l, r);
            if(p === k - 1) break;
            else if(p < k - 1) {
                l = p + 1;
            } else {
                r = p - 1;
            }
        }

        return points.slice(0, k)
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    euclidean(point) {
        return point[0] ** 2 + point[1] ** 2;
    }
}
