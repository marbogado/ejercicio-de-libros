
//$('ul').append( books.map(book => `<li>${book.isbn}</li>`).join('') )

$.ajax('/api/books')
  .done(function (data) {
    data.forEach(book => {
      $('#booksList').append(`
        <li data-isbn="${book.isbn}">
          <span>${book.isbn}</span>
          <button>Detalle</button>
        </li>
      `);
    });
  })

$(document).on('click', '#booksList li button', function () {
  const isbn = $(this).parent().data('isbn')
  window.location.href = '/detail?isbn=' + isbn
})