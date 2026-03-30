class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap = new Map()
        for(let  word of strs){
              const sortedWord = word.split('').sort().join()
        if(anagramMap.has(sortedWord)){
            anagramMap.get(sortedWord).push(word)
        }else{
            anagramMap.set(sortedWord,[word])
        }
        }
      return Array.from(anagramMap.values())
    }
}
