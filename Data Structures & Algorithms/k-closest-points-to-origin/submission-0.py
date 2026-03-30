class Solution:
    from heapq import heappop, heappush
    import math
    def get_distance(self,x,y):
        return math.sqrt(x**2+y**2)

    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        min_heap = []
        n = len(points)
        for i in range(n):
            x = points[i][0]
            y = points[i][1]
            self.heappush(min_heap,(self.get_distance(x,y),points[i]))
        result = []
        for i in range(k):
            result.append(self.heappop(min_heap)[1])
        return result


        