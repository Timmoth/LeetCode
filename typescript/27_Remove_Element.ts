export function removeElement(nums: number[], val: number): number {

    let skip = 0
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        if(num != val){
            nums[skip++] = num
        }
    }

    return skip
};