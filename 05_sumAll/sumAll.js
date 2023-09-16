const sumAll = function(firstNumber, lastNumber) {
    let result = 0;
    let i = firstNumber;
    // Whilever the first argument is larger then the second argument, it will do this while loop to add all the numbers.
    // typeof operator allows me to check if what data type is being used.
    if ((firstNumber || lastNumber) < 0 || typeof firstNumber !== 'number' || typeof lastNumber !== 'number') {
        return "ERROR";
    };
    // If firstnumber is larger then last number, it will  iterate down by 1 per time.
    if (firstNumber > lastNumber) {
        while(i >= lastNumber) {
            result = result + i;
            i--;
        };
    return result;
    };

    // Whilever the first argument is smaller then the second argument, it will loop through each number adding them all in summary.
    if (firstNumber < lastNumber) {
        while(i <= lastNumber) {
            result = result + i;
            i++;
        };
    return result;
    };
};

// Do not edit below this line
module.exports = sumAll;
