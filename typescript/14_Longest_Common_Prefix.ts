export function longestCommonPrefix(strs: string[]): string {
    let firstWord = strs[0]
    let commonPrefix = ''
    for(let i = 0; i < firstWord.length; i++){
        let character = firstWord[i]
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] != character){
                return commonPrefix
            }
        }
        commonPrefix += character
    }
    
    return commonPrefix
};