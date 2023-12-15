export function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length
  }

  var last = nums[nums.length - 1]
  for (let i = nums.length - 2; i >= 0; i--) {
    if (last == nums[i]) {
      nums.splice(i, 1)
    }

    last = nums[i]
  }

  return nums.length
}
