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

const power = function(number, exponent) {
  // Raise a number to its exponent.
  return number**exponent;
};

const factorial = function(number) {
	// Computes the factorial of an input. A factorial is every numbers between the one provided and 0, 
  // multiplied by one another.
  // Factorial of 0 = 1, something about positive numbers.
  let result = number;
  let i = number-1;
  // We set i = number-1 because we need i to start at 1 number lower then the original.
  // This if statements simply returns 1 if the number input is 0, as per factorial rules.
  if (number == 0){
    return  result = 1;
  }
  // our while loop will break off i hits 0 because a multiple of 0 would result in a 0 product answer.
  while (i > 0) {   
    if (i == 0){
      return result;
    }
    // Example. Result = 5 * i-- (4 because of our i = number-1) and then takes 1  away, makeing it 3
    // for the next go round.
    result *= i--;
  }

  return result;
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
