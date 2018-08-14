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

/*LESSON 7
	const bookList = document.querySelector('#book-list');

	console.log('the parent node is:', bookList.parentNode);

	console.log('the parent element is:', bookList.parentElement);


	//The output looks the same in both cases ^^^

	console.log('the parent element is:', bookList.parentElement.parentElement);

	//We can traverse up the DOM by going up each level

	console.log(bookList.children);

	//By calling bookList.children instead of bookList.childNodes we avoid counting the text content


*/


/*LESSON 8
	const bookList = document.querySelector('#book-list');



	console.log('book-list next sibling is:', bookList.nextSibling);
	console.log('book-list next element sibling is:', bookList.nextElementSibling);
	//Referencing a sibling vs an element sibling is the difference between including the text in an html
	// as a separate item 

	console.log('book-list previous sibling is:', bookList.previousSibling);
	console.log('book-list next element sibling is:', bookList.previousElementSibling);

	bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for anyone else'
	//right above the div of id book-list is the header
	//specifically querry selector searches within that header for a p tag


*/
	
	/*LESSON 9
		var h2 = document.querySelector('#book-list h2');
		h2.addEventListener('click', function(event){
			console.log(event.target);
			// The target itself has many properties that give information about the click and actions taken
			console.log(event);
		});


		var btns = document.querySelectorAll('#book-list .delete');

		// console.log('working');


		Array.from(btns).forEach(function(btn){
			
			btn.addEventListener('click', function(event){

				// console.log('working');
				//access the list element holding the book names
				const li = event.target.parentElement;

				//The parent of the li is the unordered list and from here we can control the li's ie remove them
				li.parentNode.removeChild(li);
			});
		});

		const link = document.querySelector('#page-banner a');

		link.addEventListener('click',function(e){

			//this method prevents the link from executing normal function of opening link upon 
			// being clicked
			e.preventDefault();
			console.log('navigation to ', e.target.textContent, ' was prevented');
		});

	*/


	/*Lesson 10
	
	//EVENT BUBBLING

	//On a click event the signal bubbles up the DOM element hierarchy tree of parents 
	// this is useful becuase it provides a means to work around the problem of having too many
	// eventlisteners dedicated to each button and instead assign one eventListener to the li's parent (li is parent of button)

	 const list = document.querySelector('#book-list ul');

	 list.addEventListener('click', function(e){

	 	if(e.target.className == 'delete'){
	 		const li = e.target.parentElement;
	 		list.removeChild(li);
	 	}

	 });

	*/

	/*LESSON 11*/

	const list = document.querySelector('#book-list ul');

	 list.addEventListener('click', function(e){

	 	if(e.target.className == 'delete'){
	 		const li = e.target.parentElement;
	 		list.removeChild(li);
	 	}

	 });


	 //add book-list
	 const addForm = document.forms['add-book'];

	 addForm.addEventListener('submit', function(e){
	 	e.preventDefault();
		const value = addForm.querySelector('input[type="text"]').value;
		console.log(value); 
	 });






		
	


