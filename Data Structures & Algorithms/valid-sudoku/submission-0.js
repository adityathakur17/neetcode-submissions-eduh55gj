class Solution {

    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();
        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                const num=board[r][c]
                if(num==='.')continue;
                const rowCheck = `${num} in row${r}`
                const colCheck = `${num} in col${c}`
                const boxCheck = `${num} in box${Math.floor(r/3)}-${Math.floor(c/3)}`
                if(seen.has(rowCheck)|| seen.has(colCheck)|| seen.has(boxCheck)){
                    return false;
                }
                seen.add(rowCheck)
                seen.add(colCheck)
                seen.add(boxCheck)
            }
        }
        return true;
    }
}
