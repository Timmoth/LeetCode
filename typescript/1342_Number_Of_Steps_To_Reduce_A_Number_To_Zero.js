function numberOfSteps(num) {
    var turns = 0;
    while (num != 0) {
        if (num % 2 != 0) {
            if (num == 1) {
                return turns + 1;
            }
            num--;
            turns++;
        }
        num /= 2;
        turns++;
    }
    return turns;
}
;
module.exports = numberOfSteps;
