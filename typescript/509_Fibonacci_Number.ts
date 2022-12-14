export function fib(n: number): number {
    if(n <= 1){
        return n
    }

    let nMinusOne = 0
    let nMinusTwo = 1
    let current = 0
    for(let i = 1; i < n; i++){
        current = nMinusOne + nMinusTwo
        nMinusOne = nMinusTwo
        nMinusTwo = current
    }

    return current
};