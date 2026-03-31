class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ''
        for s in strs:
            result += str(len(s)) + '#' + s
        return result

    def decode(self, s: str) -> List[str]:
        result = []
        i = 0
        while i<len(s):
            k=i
            while s[k] != '#':
                k+=1
            num_pos = int(s[i:k])
            i = k+1
            k = i+num_pos
            s_new = s[i:k]
            result.append(s_new)
            i = k
        return result
            

            
