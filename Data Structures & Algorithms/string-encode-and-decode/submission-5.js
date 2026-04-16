class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for(const str of strs) {
            encodedStr += `${str.length}#${str}`
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedArray = []
        let pointer = 0;
        while(pointer < str.length) {
            let i = pointer;
            let strLen = "";
            while(str[i] !== "#") {
               strLen += str[i];
               i++;
            }
            const len = parseInt(strLen);
            const word = str.slice(i + 1, i + 1 + len);
            decodedArray.push(word);
            pointer = i + 1 + len;
        }

        return decodedArray
    }
}
