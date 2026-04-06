class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let ans = 0;
        let mostF = 0
        const map = new Map();
        for(let r = 0; r < s.length; r++){
            const cur = s[r]
            map.set(cur, (map.get(cur) || 0) + 1);

            while((r - l + 1) - Math.max(...map.values()) > k) {
                const word = s[l];
                map.set(word, map.get(word) - 1);
                l++;
            }

            ans = Math.max(ans, r - l + 1)

        }

        return ans;
    }
}