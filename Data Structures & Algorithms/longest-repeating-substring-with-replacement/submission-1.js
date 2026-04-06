class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let ans = 0;
        let baseWord = s[0]
        const map = new Map();
        for(let r = 0; r < s.length; r++){
            const cur = s[r]
            map.set(cur, (map.get(cur) || 0) + 1);
            if(cur !== baseWord && map.get(cur) > map.get(baseWord)) {
                baseWord = cur;
            }

            while((r - l + 1) - map.get(baseWord) > k) {
                const word = s[l];
                map.set(word, map.get(word) - 1);
                let maxValue = 0
                for(const [key, value] of map) {
                    if(value > maxValue) {
                        maxValue = value;
                        baseWord = key
                    }
                }
                l++;
            }

            ans = Math.max(ans, r - l + 1)

        }

        return ans;
    }
}