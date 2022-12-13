export function plusOne(digits: number[]): number[] {
    if(digits.length == 0)
    {
        return [1]
    }
    let d = digits[digits.length -1]
    if(d == 9){
        digits.pop()
        let d =  plusOne(digits)
        d.push(0)
        return d
    }else{
        digits[digits.length -1]++
    }

    return digits
};