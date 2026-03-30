class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashMap = {}

        for word in strs:
            sorted_wrd = "".join(sorted(word))

            if sorted_wrd in hashMap:
                hashMap[sorted_wrd].append(word)
            else:
                hashMap[sorted_wrd] = [word]
        return list(hashMap.values())
