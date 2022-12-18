export function isPowerOfTwo(n: number): boolean {
    if(n == 1){
        return true
    }

    var num = 1
    while((num *= 2) < n){
    }

    return num == n
};