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
            let pivot = this.euclideandistance(points[r][0], points[r][1])
            let i = l;
            for(let j = i; j < r; j++) {
                const point = points[j]
                if(this.euclideandistance(point[0], point[1]) <= pivot) {
                    [points[i], points[j]] = [points[j], points[i]]
                    i++;
                }
            }

            [points[i], points[r]] = [points[r], points[i]];

            return i;
        }

        while(l < r) {
            const i = partition(l, r)
            if(i === k - 1) {
                break
            } else if (i < k - 1) {
                l = i + 1;
            } else {
                r = i - 1;
            }
        }

        return points.slice(0, k);
    }

    euclideandistance(x, y) {
        return x * x + y * y
    }
}