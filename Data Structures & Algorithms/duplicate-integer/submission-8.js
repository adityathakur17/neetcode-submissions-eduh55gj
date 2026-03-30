class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}

        for(let i of nums){
            obj[i] = (obj[i]||0)+1;
        if(obj[i]>1){
            return true
        }
        }
    return false
    }
}
