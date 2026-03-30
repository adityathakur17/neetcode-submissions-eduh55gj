class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length
        if(n === 0) return 0;


        let leftArray = new Array(n)
        let rightArray = new Array(n)

        leftArray[0] = height[0];
        rightArray[n-1] = height[n-1];

        for(let i=1;i<n;i++){
            leftArray[i] = Math.max(leftArray[i-1],height[i])
        }

        for(let i=n-2;i>=0;i--){
            rightArray[i] = Math.max(rightArray[i+1],height[i])
        }


        let waterTrapped = 0;
        for(let i=0;i<n;i++){
            waterTrapped += Math.min(leftArray[i],rightArray[i])-height[i]
        }

        return waterTrapped;
    }
}
