const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// This method querySelectorAll returns all the hits
// unlike querySelector which only returns the first hit
var books = document.querySelectorAll('#book li .name');


Array.from(books).forEach(function(book){
	console.log(book);
});
