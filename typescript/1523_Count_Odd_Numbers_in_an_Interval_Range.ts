export function countOdds(low: number, high: number): number {
    if(low % 2 == 0 && high % 2 == 0){
        return Math.floor((high - low) / 2)
    }

    return Math.floor((high - low) / 2) + 1
};