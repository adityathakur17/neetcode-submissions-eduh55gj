class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = {}

        for(let num of nums){
            frequency[num] = (frequency[num]||0)+1
        }

        const sorted = Object.keys(frequency).sort((a,b)=>frequency[b]-frequency[a])
        return sorted.slice(0,k).map(Number)
    }
    
}
