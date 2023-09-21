const fibonacci = function(sequenceInSeries) {
// We want this function to take an input (sequenceInSeries) and add the previous two numbers in the series, to find the next one in the series.
// So 1, 1, 2, 3, 5, 8, 13 etc...
    if (sequenceInSeries < 0) {
        return "OOPS";
    }
    let sum = [1, 1];
    // Presets the sum array at 1, 1. Making it start with 2 elements.
    for (let i = 2; i < sequenceInSeries; i++) {
        // Since we're starting with 2 numerical values and we want to count our array from 1 instead of 0, we allow our iterator to start at 2, for 2 elements in the array.
        sum.push(sum[i-2] + sum[i-1]);
        // This takes the position of the elements in the array and adds them together to give us our next sum. Allowing the previous 2 numbers to add together to make the next 
        // element in the array.
        console.log(sum);
    }
    console.log(sum);
    // answer gives us a numerical value to assosciate with the index position of the final element in the array to call in our return.
    let answer = sum.length-1;
    console.log(answer);    
    return sum[answer];
};

// Do not edit below this line
module.exports = fibonacci;
