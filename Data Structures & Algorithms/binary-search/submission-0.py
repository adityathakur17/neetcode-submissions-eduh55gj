class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        s = 0
        e = n-1

        while s<=e:
            mid = (s+e)//2
            if target == nums[mid]:
                return mid
            elif target > nums[mid]:
                s+=1
            else:
                e-=1
        return -1