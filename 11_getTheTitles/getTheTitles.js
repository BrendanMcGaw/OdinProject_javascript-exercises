// Purpose of this exercise is to understand how to utilise maps.
// Have another look at maps and see what you can do with that information.

const getTheTitles = function(books) {
  // Tough one, the books.map is mapping the the array, to our new array.
  // By creating our function inside of the map, we are able to select the book titles of the seperate array and store them in our new one??
  const bookTitles = books.map((book) => book.title);
  console.log(bookTitles);
  return bookTitles;
};

// Do not edit below this line

module.exports = getTheTitles;
