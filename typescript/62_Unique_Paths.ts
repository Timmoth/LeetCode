export function uniquePaths(m: number, n: number): number {
    let cache: number[][] = []

    for(var i: number = 0; i <= m; i++) {
        let c = cache[i] = [n]
        for(var j: number = 0; j<= n; j++) {
            c[j] = 0
        }
    }

    return uniquePathsWithCache(m,n,cache)
};

function uniquePathsWithCache(m: number, n: number, cache: number[][]): number {
    if(m == 0 && n == 0){
        return 0
    }

    if(m == 1 || n == 1){
        return 1
    }

    let val = cache[m][n]
    if(val != 0){
        return val
    }
    
    val = cache[m][n] = uniquePathsWithCache(m - 1, n, cache) + uniquePathsWithCache(m, n - 1, cache)

    return val
};