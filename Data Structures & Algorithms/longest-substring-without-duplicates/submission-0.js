class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        const map = new Map();
        let ans = 0;
        for(let right = 0; right < s.length; right++) {
            const char = s[right];
            map.set(char, (map.get(char) || 0) + 1);
            while(map.get(char) > 1) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            ans = Math.max(ans, right - left + 1);
        }

        return ans
    }
}
