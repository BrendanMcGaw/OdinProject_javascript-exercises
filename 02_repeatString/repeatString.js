const repeatString = function(string, num) {
    string = "";
    if (num < 0) {
        string += "ERROR"
    }
    for (let i = 0; i < num; i++) {
        if (num > 0) {
            string += "hey";
        }
        else if (num === 0) {
            break;
        }
    }
    return string;
}

// Do not edit below this line
module.exports = repeatString;
