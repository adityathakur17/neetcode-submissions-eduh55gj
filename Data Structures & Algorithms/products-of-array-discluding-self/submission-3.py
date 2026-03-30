class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = []

        for i in range(n):
            mul = 1
            for j in range(n):
                if j != i:
                    mul*= nums[j]
            res.append(mul)
        return res
                    