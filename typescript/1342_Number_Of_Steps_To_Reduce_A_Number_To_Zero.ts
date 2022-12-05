export function numberOfSteps(num: number): number {
    let turns = 0;
    while(num != 0){
        if(num % 2 != 0){
            if(num == 1){
                return turns + 1;
            }
            num--;
            turns++;
        }

        num /= 2;
        turns++;
    }
    return turns;
};