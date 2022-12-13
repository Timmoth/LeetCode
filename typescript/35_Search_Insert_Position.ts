export function searchInsert(nums: number[], target: number): number {
    let high = nums.length - 1
    let low = 0
    while(high >= low){
        let midIndex = Math.floor((high + low) / 2)
        let midElement = nums[midIndex]
        if(target == midElement){
            return midIndex
        }else if(target < midElement){
            high = midIndex - 1
        }else{
            low = midIndex + 1
        }
    }

    return low
};