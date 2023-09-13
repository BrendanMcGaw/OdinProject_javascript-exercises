const reverseString = function(words) {
    const wordArray = [];
    for (let i in words) {
        // We're  creating an array from the arguments of the function, that will place each piece in the normal position for each character in the words.
        // Splice allows us to add multiple elements to an array.
        // words.length parameter, the position that each element will take, following the length means they'll all be in the same position as when the words  were written.\
        // 0 parameter is the amount of items  to be removed
        // word[i] parameter are just the elements to be added, iterating through i from our for loop.
        wordArray.splice(words.length, 0, words[i]);
        console.log(wordArray);
    }
    // Reverses the order of the letters in the array and joins them all together using "nospaces" Join also treats white space as a character.
    reversedWordArray  = wordArray.reverse().join("");
    console.log(reversedWordArray);
    return reversedWordArray;
};

// Do not edit below this line
module.exports = reverseString;
