const leapYears = function(year) {
    // If year is divisible by 100 and 400. Return true.
    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }
    // If year is divisible by 4 and 100 but NOT by 400. Return false.
    if (year % 4 == 0 && year % 100 == 0 && year % 400 !== 0) {
        return false;
    }
    // If year is divisible by 4 (set after checking the other information) return true;
    if (year % 4 == 0) {
        return true;
    }
    // Any other  circumstance should return false.
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
