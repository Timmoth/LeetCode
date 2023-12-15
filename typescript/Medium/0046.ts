export function permute(nums: number[]): number[][] {
  if (nums.length <= 1) {
    return [nums]
  }

  let num = nums[0]

  // Create all permutations of smaller array
  let permutationsOfSmallerArray = permute(nums.slice(1))
  let permutations: number[][] = []

  for (let i = 0; i < permutationsOfSmallerArray.length; i++) {
    let permutation = permutationsOfSmallerArray[i]

    // Insert the current number at each position for each permutation
    for (let j = 0; j < permutation.length; j++) {
      let newPermutation = new Array<number>()
      for (let k = 0; k < permutation.length; k++) {
        if (j == k) {
          newPermutation.push(num)
        }
        newPermutation.push(permutation[k])
      }
      permutations.push(newPermutation)
    }

    let newPermutation = new Array<number>()
    for (let k = 0; k < permutation.length; k++) {
      newPermutation.push(permutation[k])
    }
    newPermutation.push(num)
    permutations.push(newPermutation)
  }

  return permutations
}
