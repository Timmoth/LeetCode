export function addBinary(a: string, b: string): string {
    let big = a
    let small = b
    let output = ''
    if(b.length > a.length){
        big = b
        small = a
    }

    let carry = 0
    for(let i = 0; i < big.length; i++)
    {
        let da: number = big.charCodeAt(big.length - 1 - i) - 48
        let db: number = 0

        if(i < small.length){
            db = small.charCodeAt(small.length - 1 - i) - 48
        }

        let sum = da + db + carry
        if(sum == 0){
            carry = 0
            output = '0' + output
        }else if(sum == 1){
            carry = 0
            output = '1' + output
        }else if(sum == 2){
            carry = 1
            output = '0' + output
        }else if(sum == 3){
            carry = 1
            output = '1' + output
        }
    }

    if(carry > 0){
        return '1' + output
    }
    return output
};