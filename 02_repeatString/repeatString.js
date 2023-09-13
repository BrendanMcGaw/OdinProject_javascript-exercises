const repeatString = function(string, num) {
    let theResult = string;
    if (num < 0) {
        theResult = "ERROR";
    }
    if (num == 0) {
        theResult =  "";
        return theResult;
    }
    for (let i = 1; i < num; i++) {
        if (num > 0) {
            theResult += string;
        }
    }
    return theResult;
}

// Do not edit below this line
module.exports = repeatString;
