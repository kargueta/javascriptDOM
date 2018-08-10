/*
LESSON 5
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// This method querySelectorAll returns all the hits
// unlike querySelector which only returns the first hit
var books = document.querySelectorAll('#book-list li .name');


Array.from(books).forEach(function(book){
	book.textContent += '(book title)';
});


const bookList = document.querySelector('#book-list');
 bookList.innerHTML += '<p>This is how you add html</p>'
 */

 /*
 LESON 6
 const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner node has child nodes?:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
*/

/*LESSON 7*/

const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode);

console.log('the parent element is:', bookList.parentElement);


//The output looks the same in both cases ^^^

console.log('the parent element is:', bookList.parentElement.parentElement);

//We can traverse up the DOM by going up each level

console.log(bookList.children);

//By calling bookList.children instead of bookList.childNodes we avoid counting the text content