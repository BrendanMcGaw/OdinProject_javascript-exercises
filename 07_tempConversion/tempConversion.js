// Converts Fahrenheit to Celsius
const convertToCelsius = function(temperature) {
  let celsius;
  // Makes  sure that the input was a number.
  if (typeof temperature  == 'number') {
    // Takes the mathematical formula to convert to Celsius and fixes the decimal place to 1.
    celsius = ((temperature - 32) * (5/9)).toFixed(1);
    console.log(celsius);
    // parseFloat allows the string created by toFixed, to become a float.
    return parseFloat(celsius);
  }
};
// Converts Celsius to Fahrenheit.
const convertToFahrenheit = function(temperature) {
  let fahrenheit;
  // Makes surre that the input was a number.
  if (typeof temperature == "number") {
    // Does the mathematical conversion and sets it to a fixed decimal place of 1.
    fahrenheit = ((temperature * (9/5)) + 32).toFixed(1);
    console.log(fahrenheit);
    // parseFloat allows us to convert our result to a float, from a string.
    return parseFloat(fahrenheit);
  };
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Conversion Maths from Celsius to Fahrenheit is::
// (Celsius * 9/5) + 32 = Fahrenheit.
