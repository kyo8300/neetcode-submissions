class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let ans = 0;
        let left = 0;
        const wordCount = new Map();
        for(let right = 0; right < s.length; right++) {
            const word = s[right];
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
            while(right - left + 1 - Math.max(...wordCount.values()) > k) {
                const leftWord = s[left];
                wordCount.set(leftWord, wordCount.get(leftWord) - 1);
                left++;
            }

            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}
