
let memory = [100]
export function rob(nums: number[]): number {
    memory.fill(-1)
    return robFrom(0, nums)
};

function robFrom(i: number, nums: number[]): number {

    if(i >= nums.length){
        return 0
    }

    // Return cached value.
    if (memory[i] > -1) {
        return memory[i]
    }

    let sum1 = robFrom(i+1, nums)
    let sum2 = nums[i] + robFrom(i+2, nums)

    let val = sum2
    if(sum1 > sum2){
        
        val = sum1
    }

    memory[i] = val
    return val
};