export function mySqrt(x: number): number {
    let left = 1
    let right = Math.floor(x / 2) + 1
    let pivot
  
    while (left <= right) {
        pivot = Math.floor((left + right) / 2)
  
      if (pivot * pivot > x) {
        right = pivot - 1
      } else if (pivot * pivot < x) {
        left = pivot + 1
      } else {
        return pivot
      }
    }
  
    return right
}