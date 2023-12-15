export function climbStairs(n: number): number {
  var cache: number[] = []
  for (let i = 0; i <= n; i++) {
    cache.push(-1)
  }

  return climbStairsWithCache(n, cache)
}

function climbStairsWithCache(n: number, cache: number[]): number {
  if (n <= 2) {
    return n
  }

  let answer = cache[n]

  if (answer != -1) {
    return answer
  }
  answer = cache[n] =
    climbStairsWithCache(n - 1, cache) + climbStairsWithCache(n - 2, cache)
  return answer
}
