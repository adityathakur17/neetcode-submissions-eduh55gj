class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(let i of strs){
            result += `${i.length}#${i}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i =0;
        while(i<str.length){
            const hashPos = str.indexOf('#',i)
            const len = parseInt(str.slice(i,hashPos))
            i=hashPos+1
            const word = str.slice(i,i+len)
            result.push(word)
            i+= len;
        }
        return result
    }
}
