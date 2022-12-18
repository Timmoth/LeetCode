export function majorityElement(nums: number[]): number {
    let numbers = new Map<number, number>()

    for(let i = 0; i < nums.length; i++){
        let val = numbers.has(nums[i]) ? numbers.get(nums[i])! + 1 : 1
        if(val >= nums.length / 2){
            return nums[i]
        }
        numbers.set(nums[i], val)
    }

    return 0
}