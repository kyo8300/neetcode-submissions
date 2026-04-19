class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let longestCount = 0;
        const wordCount = new Map();
        for(let right = 0; right < s.length; right++) {
            const char = s[right];
            wordCount.set(char, (wordCount.get(char) || 0) + 1);
            while(right - left + 1 - Math.max(...wordCount.values()) > k) {
                wordCount.set(s[left], wordCount.get(s[left]) - 1);
                left++;
            }

            longestCount = Math.max(longestCount, right - left + 1);
        }

        return longestCount
    }
}

