import heapq


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        if len(nums) == k:
            return nums

        counts = {}

        for num in nums:
            if num in counts:
                counts[num] +=1
            else:
                counts[num] = 1

        result = heapq.nlargest(k,counts.keys(),key=counts.get)

        return result
        