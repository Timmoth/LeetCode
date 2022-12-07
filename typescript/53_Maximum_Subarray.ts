
export function maxSubArray(nums: number[]): number {
    
    let max = nums[0]
    let currentSubset = nums[0]

    for(let i = 1; i < nums.length; i++){
        let num = nums[i]
        currentSubset = Math.max(num, currentSubset + num)
        max = Math.max(max, currentSubset)
    }

    return max
}