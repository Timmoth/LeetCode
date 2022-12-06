export function average(salary: number[]): number {
    let val = salary[0]
    let min = val
    let max = val
    let sum = val
    let minCount = 1
    let maxCount = 1
    for(let i = 1; i < salary.length; i++){
        val = salary[i]
        sum += val
        if(val < min){
            minCount = 1
            min = val
        }else if(val == min){
            minCount++
        }

        if(val > max){
            maxCount = 1
            max = val
        }else if(val == max){
            maxCount++
        }
    }

    return (sum - (minCount * min + maxCount * max)) / (salary.length - (minCount + maxCount))
};