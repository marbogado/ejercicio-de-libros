$('form #save').click(function() {
    axios.post('/api/books', {
        isbn: $('form #isbn').val()
    })
    .then(function (){
        alert('Está todo bien')
    })
});