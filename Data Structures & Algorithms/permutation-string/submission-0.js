class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
checkInclusion(s1, s2) {
    const map = new Map()
    for (const char of s1) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        const val = s2[right];

        if (map.has(val)) {
            map.set(val, map.get(val) - 1);

            // count が 0 未満 → 重複してる → left を縮める
            while (map.get(val) < 0) {
                map.set(s2[left], map.get(s2[left]) + 1);
                left++;
            }
        } else {
            // s1 に存在しない文字 → 窓をリセット
            for (let i = left; i < right; i++) {
                if (map.has(s2[i])) {
                    map.set(s2[i], map.get(s2[i]) + 1);
                }
            }
            left = right + 1;
        }

        if (right - left + 1 === s1.length) return true;
    }

    return false;
}
}

// abac
// abaacabee