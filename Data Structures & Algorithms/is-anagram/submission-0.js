class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        for(const char of s) {
            if(!map.has(char)) {
                map.set(char, 1);
            } else {
                map.set(char, map.get(char) + 1);
            }
        }

        for(const char of t) {
            if(!map.has(char)) {
                false;
            }

            map.set(char, map.get(char) - 1);
        }

        for(const [key, val] of map) {
            if(val !== 0) return false
        }

        return true;
    }
}
