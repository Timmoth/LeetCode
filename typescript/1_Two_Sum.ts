export function twoSum(nums: number[], target: number): number[] {
    let compliments = new Map<number, number>()

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let compliment = target - num
        let val = compliments.get(compliment)
        if(val != undefined){
            return [val, i]
        }
        compliments.set(num, i)
    }

    return []
};