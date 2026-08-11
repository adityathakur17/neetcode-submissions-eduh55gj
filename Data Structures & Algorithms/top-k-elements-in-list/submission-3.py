import heapq
from collections import Counter

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        if k == len(nums):
            return nums

        counts = Counter(nums)
        # heapq.nlargest(k, things, key_function)
        result = heapq.nlargest(k,counts.keys(),key=counts.get)
        return result
        
            
        