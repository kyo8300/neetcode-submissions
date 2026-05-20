class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length < s1.length) return false;
        const wordCnt = new Map();
        for(const s of s1) {
            wordCnt.set(s, (wordCnt.get(s) || 0) + 1)
        }
        let l = 0;
        for(let r = 0; r < s2.length; r++) {
            const word = s2[r];
            if(wordCnt.has(word)) {
                wordCnt.set(word, (wordCnt.get(word) || 0) - 1);
                while(wordCnt.get(word) < 0) {
                    const lWord = s2[l];
                    if(wordCnt.has(lWord)) {
                        wordCnt.set(lWord, (wordCnt.get(lWord) || 0) + 1)
                    }
                    l++;
                }
            } else {
                while(l !== r + 1) {
                    const lWord = s2[l];
                    if(wordCnt.has(lWord)) {
                        wordCnt.set(lWord, (wordCnt.get(lWord) || 0) + 1)
                    }
                    l++;
                }
            }

            if(r - l + 1 === s1.length) {
                return true;
            }
        }

        return false
    }
}
