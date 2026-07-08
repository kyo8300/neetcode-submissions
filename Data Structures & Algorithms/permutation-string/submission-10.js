class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        const wordCnt = new Map();
        for(const char of s1) {
            wordCnt.set(char, (wordCnt.get(char) || 0) + 1)
        }

        let left = 0;
        for(let right = 0; right < s2.length; right++) {
            const char = s2[right];
            if(!wordCnt.has(char)) {
                while(left < right) {
                    if(wordCnt.has(s2[left])) {
                        wordCnt.set(s2[left], (wordCnt.get(s2[left]) || 0) + 1)
                    }
                    left++;
                }
                left = Math.min(s2.length - 1, right + 1);
                continue;
            }
            wordCnt.set(char, wordCnt.get(char) - 1);
            while(wordCnt.get(char) < 0) {
                if(wordCnt.has(s2[left])) {
                    wordCnt.set(s2[left], (wordCnt.get(s2[left]) || 0) + 1)
                }
                left++;
            }

            if(right - left + 1 === s1.length) {
                return true;
            }
        }

        return false;
    }
}
