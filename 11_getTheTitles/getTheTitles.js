

const getTheTitles = function() {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
    const bookTitles = [];
    for (let i = 0; i < books.length; i++) {
        bookTitles.push(books[i].title);
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
