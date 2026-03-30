class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0;
        let r=0
        let dict={};
        let maxCount = 0
        for( r=0;r<s.length;r++){
            dict[s[r]]= dict[s[r]]+1||1;
            maxCount = Math.max(maxCount,dict[s[r]])
            if(r-l+1-maxCount>k){
                dict[s[l]]--;
                l++
            }
        }
        return r-l;
    }
}
