class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var obj ={}

        for(let i=0; i<nums.length;i++){
            var n= nums[i]

            if(obj[target-n]>=0){
                return [obj[target-n],i]
            }else{
                obj[n]=i;
            }
        }
    }
}
