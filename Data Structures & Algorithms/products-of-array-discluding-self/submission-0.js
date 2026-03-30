class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let leftPosition = 1
        let rightPosition = 1
        let output = new Array(n)

        for(let i =0;i<n;i++){
            output[i] = leftPosition;
            leftPosition *= nums[i];
        }

        for(let i= n-1;i>=0;i--){
            output[i] *= rightPosition;
            rightPosition *= nums[i]
        }
        return output

    }
}
