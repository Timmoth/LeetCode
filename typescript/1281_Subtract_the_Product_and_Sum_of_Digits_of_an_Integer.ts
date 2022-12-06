export function subtractProductAndSum(n: number): number {
    let digits = n.toString().split('')
    let sum = 0
    let product = 1
    for(let i = 0; i < digits.length;i++){
        let d = +digits[i]
        sum += d
        product *= d
    }
    return product - sum
};