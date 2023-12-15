export function singleNumber(nums: number[]): number {
  var sortedNums = nums.sort()

  if (nums.length == 1) {
    return nums[0]
  }

  for (let i = 0; i < sortedNums.length; i += 2) {
    let a = sortedNums[i]
    let b = sortedNums[i + 1]

    if (a != b) {
      return a
    }
  }

  return sortedNums[sortedNums.length - 1]
}
