class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramGroups = [];
        const map = new Map();
        for(const str of strs) {
            const arr = new Array(26).fill(0);
            for(const char of str) {
                arr[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const charMapIntStr = arr.join(",")
            if(!map.has(charMapIntStr)) {
                map.set(charMapIntStr, [str])
            } else {
                map.get(charMapIntStr).push(str)
            }
        }

        for(const [key, val] of map) {
            anagramGroups.push(val)
        }

        return anagramGroups
    }
}


