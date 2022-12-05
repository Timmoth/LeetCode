function maximumWealth(accounts) {
    var maximumWealth = 0;
    for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];
        var accountWealth = 0;
        for (var j = 0; j < account.length; j++) {
            accountWealth += account[j];
        }
        if (maximumWealth < accountWealth) {
            maximumWealth = accountWealth;
        }
    }
    return maximumWealth;
}
;
module.exports = maximumWealth;
