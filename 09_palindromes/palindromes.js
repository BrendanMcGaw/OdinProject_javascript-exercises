const palindromes = function (input) {
    const searchFor = /[\w]/gi 
    // Sets pattern to search for any global character between a-z, 0-9,
    // allows pattern to be case insensitive.

    // Modifies the input to remove all non-alphanumeric characters into an array and then rejoins them into a string.
    input = input.match(searchFor).join("");
    console.log(input); // Makes a crazy character free version of the input.

    // Could write a loop, that iterates through the array created. Finds all the indexOf the characters that aren't alphanumeric. Stores each of their locations in a 
    // seperate variable. When the array has been reversed, place the stored variables back into their original indexs after the fact. THEN rejoin as a string.

    // Sets a pattern to find anything that isn't a common character.
    const newArray = input.match(searchFor); 
    const originalArray = input.split("");
    console.log(originalArray);

    // Matches anything in the input, based on the pattern.
    // Places each character in an array.
    console.log(newArray);
    // reversed the index values of the array
    let reverseArray = newArray.reverse();
    console.log(reverseArray);

    // Joins the elements of the array together back into a string. "" allows it to remove the commas between each element in the string.
    let reversedInput = reverseArray.join("");

    // Checks to see if the reversed version of the original input is a true palindrome.
    if (input.toLowerCase() === reversedInput.toLowerCase()) {
        console.log("true!");
        console.log("The original input was " + input.toLowerCase() + " the reversed version is " + reversedInput.toLowerCase());
        return true;
    }
    
    else {
        console.log("False!");
        console.log("The original input was " + input.toLowerCase() + " the reversed version is " + reversedInput.toLowerCase());
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
