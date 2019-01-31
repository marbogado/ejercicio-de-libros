var express = require('express');
var router = express.Router();
const axios = require('axios');

const books = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/books', function(req, res, next) {
  const newBook = req.body;

  // validar()
  books.push(newBook);
  //
  res.json(books);

  console.log(books);
})

router.get('/books', function(req, res, next) {
  res.json(books);

})
// GET /books
// GET /books:isbn
// http://localhost:3000/books/8478290761
router.get("/books/:isbn", function(req, res, next) {
  const isbn = req.params.isbn;
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn)
    .then(function(elResultado) {
      const data = elResultado.data;

      const book = {
        title: data.items[0].volumeInfo.title || null,
        subtitle: data.items[0].volumeInfo.subtitle || null,
        description: data.items[0].volumeInfo.description || null,
        authors: data.items[0].volumeInfo.authors || null,
        cover: data.items[0].volumeInfo.imageLinks ? data.items[0].volumeInfo.imageLinks.thumbnail : null,
        isbn: isbn
      };

      res.json(book);
    });
});

// POST /books

module.exports = router;
