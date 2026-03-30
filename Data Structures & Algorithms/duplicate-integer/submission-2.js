class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newNums = nums.sort()
        for(let i =0;i<nums.length;i++){
            if(nums[i]===nums[i+1]){
                return true;
            }
        }
        return false
    }
}
