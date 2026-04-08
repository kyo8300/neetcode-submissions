class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const s1Map = new Array(26).fill(0)
        const s2Map = new Array(26).fill(0)
        for(let i = 0; i < s1.length; i++) {
            s1Map[s1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
            s2Map[s2[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }

        let matches = s1Map.filter((v, i) => v === s2Map[i]).length;
        if(matches === 26) return true;

        for(let right = s1.length; right < s2.length; right++) {
            if(matches === 26) return true;
            const add = s2[right].charCodeAt(0) - "a".charCodeAt(0);
            s2Map[add]++;
            if(s2Map[add] === s1Map[add]) matches++;
            else if(s2Map[add] - 1 === s1Map[add]) matches--; 

            const remove = s2[right - s1.length].charCodeAt(0) - "a".charCodeAt(0);
            s2Map[remove]--;
            if(s2Map[remove] === s1Map[remove]) matches++;
            else if(s2Map[remove] + 1 === s1Map[remove]) matches--; 
        }
        return matches === 26
    }
}
