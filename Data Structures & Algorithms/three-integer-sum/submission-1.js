class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        let res = []
        for(let i=0;i<nums.length;i++){
            if(i>0 && nums[i]===nums[i-1]) continue;
            let low =i+1;
            let high =nums.length-1;
            while(low<high){
                let currSum = nums[i]+nums[low]+ nums[high]
                if(currSum>0){
                    high--;
                }
                else if(currSum<0){
                    low++;
                }
                else if(currSum === 0){
                    res.push([nums[i], nums[low], nums[high]])
                    low++;
                    while(nums[low]==nums[low-1]&& low<high){
                        low++
                    }
                }
            }

        }
        return res;
    }
}
