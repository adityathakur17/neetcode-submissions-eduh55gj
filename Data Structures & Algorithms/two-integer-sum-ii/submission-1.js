class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    let low = 0;
    let high = numbers.length-1;

    while(low<high){
        let currSum = numbers[low]+numbers[high]
        if(currSum<target){
            low++;
        }else if(currSum>target){
            high--;
        }
        else{
            return [low+1,high+1];
        }
       
    }
    
    }
}
