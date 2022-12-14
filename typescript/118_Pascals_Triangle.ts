export function generate(numRows: number): number[][] {
    if(numRows == 0){
        return [[]]
    }
    if(numRows == 1){
        return [[1]]
    }

    let elements: number[][] = [[1], [1,1]]

    for(let i = 1; i < numRows; i++){
        let row = elements[i] = new Array
        row.push(1)
        for(let j = 1; j < i; j++){
            row.push(elements[i-1][j] + elements[i-1][j-1])
        }
        row.push(1)
    }

    return elements
};