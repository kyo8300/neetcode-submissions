class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }
        const wordCount = new Map();
        for(const char of s1){
            wordCount.set(char, (wordCount.get(char) || 0) + 1)
        }
        let left = 0;
        for(let right = 0; right < s2.length; right++) {
            const char = s2[right];
            if(wordCount.has(char)) {
                wordCount.set(char, wordCount.get(char) - 1)
                while(wordCount.get(char) < 0) {
                    const leftChar = s2[left];
                    if(wordCount.has(leftChar)){
                        wordCount.set(leftChar, wordCount.get(leftChar) + 1)
                    }
                    left++;
                }
            } else {
                while(left !== right + 1) {
                    const leftChar = s2[left];
                    if(wordCount.has(leftChar)){
                        wordCount.set(leftChar, wordCount.get(leftChar) + 1)
                    }
                    left++;
                }
            }

            if(right - left + 1 === s1.length) {
                return true;
            }
        }

        return false;
    }
}
