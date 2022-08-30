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

    const titles = books.map(book => book.title)
    console.log(titles)
    return titles;
}
// Do not edit below this line
module.exports = getTheTitles;
