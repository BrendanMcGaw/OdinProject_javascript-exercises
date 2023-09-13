const reverseString = function(words) {
    const wordArray = [];
    for (let i in words) {
        // We're  creating an array from the arguments of the function, that will place each piece in the normal position for each character in the words.
        wordArray.splice(words.length, 0, words[i]);
        console.log(wordArray);
    }
    // Reverses the order of the letters in the array and joins them all together using "nospaces"
    reversedWordArray  = wordArray.reverse().join("");
    console.log(reversedWordArray);
    return reversedWordArray;
};

// Do not edit below this line
module.exports = reverseString;
