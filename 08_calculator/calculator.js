const add = function(addNum1, addNum2) {
	let sum = addNum1 + addNum2;
  return sum;
};

const subtract = function(subNum1, subNum2) {
  // assigns the result of the two variables subtracted from one another, then returns the answer.
	let result = subNum1 - subNum2;
  return result;
};

const sum = function(numbersToSum) {
  let arraySum = 0;
	// We want this to sum all the numbers in an array.
  for (let i = 0; i < numbersToSum.length; i++) {
    arraySum += numbersToSum[i]
  }
  return arraySum;
};

const multiply = function(multiplyArray) {
  // Want to be able to multiply as many numbers (arguments) as desired.
  let result = multiplyArray[0];
  // Started i = 1 because position 0 was already assigned to the result.
  // We  went through the array of numbers and multiplied them all together get the result.
  for (let i = 1; i < multiplyArray.length; i++) {
    result *= multiplyArray[i]
  }
  return result;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
