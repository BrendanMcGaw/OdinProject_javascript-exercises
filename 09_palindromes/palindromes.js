const palindromes = function (input) {
    const searchFor = /[a-zA-Z]/g
    const newArray = input.split(searchFor); // [input, ","]
    // splits the input string into individual elements and assigns them an index value in an array.
    console.log(newArray);
    // reversed the index values of the array
    let reverseArray = newArray.reverse();
    console.log(reverseArray);
    // Joins the elements of the array together back into a string. "" allows it to remove the commas between each element in the string.
    let reversedInput = reverseArray.join("");
    console.log(reversedInput);
    // Checks to see if the reversed version of the original input is a true palindrome.
    if (input == reversedInput) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
