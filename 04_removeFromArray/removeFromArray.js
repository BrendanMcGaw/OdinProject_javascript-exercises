const removeFromArray = function(array) {
    // Is finding the index number of the element in the second argument 
    // of the function in argument[0]
    // Since arguments[0] = array
    // arguments[1] = item to be excluded.
    let itemsToRemove = arguments[0].indexOf(arguments[1]);
    array.splice(itemsToRemove, 1)
    return array;
    // // When  logging  arguments, you can see the placement of each argument,
    // // Therefore we can say rather definitively that anything inside an array
    // // As an argument would be considered 1 argument.
    // // Each , after represents another argument.
    // console.log(array)
};
// Do not edit below this line
module.exports = removeFromArray;
