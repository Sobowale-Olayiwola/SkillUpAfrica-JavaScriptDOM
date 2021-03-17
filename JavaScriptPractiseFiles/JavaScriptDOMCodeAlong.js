// TRAVERSING THE DOM

let itemList = document.querySelector('#items'); // an id used to get a HTML element

// parentNode

console.log(itemList.parentNode); // logs out the parent of the element
itemList.parentNode.style.backgroundColor = '#f4f4f4' // changes the background of the parentNode
console.log(itemList.parentNode.parentNode.parentNode); // logs the great grandparent of the HTML element

// parentElement

console.log(itemList.parentElement); // logs the parent element
itemList.parentElement.style.backgroundColor = '#f4f4f4' // changes the background of the parent element to light gray
console.log(itemList.parentElement.parentElement.parentElement); // logs the great grandparent of the HTML element

// childNodes

console.log(itemList.childNodes); // returns back a NodeList and includes line breaks and whitespace
console.log(itemList.children); // return back an HTML collection
console.log(itemList.children[1]); // returns back 
itemList.children[1].style.backgroundColor = 'yellow'; // changes the background to yellow


// firstChild

console.log(itemList.firstChild) //includes line breaks and whitespace among the childElement

// firstElementChild

console.log(itemList.firstElementChild); // doesn't include line breaks and whitespace but returns only the elements
itemList.firstElementChild.textContent = 'Hello 1'; // changes content of the firstElement

//lastChild

console.log(itemList.lastChild); // Item4

// firstElementChild

console.log(itemList.lastElementChild); // Item4
itemList.lastElementChild.textContent = 'Hello 4'; // changes Item4 to Hello 4

// nextSibling

console.log(itemList.nextSibling); // returns null because no sibling element 

//nextElementSibling
console.log(itemList.nextElementSibling); // returns null because of no sibling element

// previousSibling

console.log(itemList.previousSibling); // returns null

// previousElementSibling

console.log(itemList.previousElementSibling); // returns header
itemList.previousElementSibling.style.color = 'green'; // changes header to green



// Create a div

let newDiv = document.createElement('div'); // creates a new div element

//Add class
newDiv.className = 'hello'; // gives it a class named hello

// Add id

newDiv.id = 'hello1'; // gives it an id named hello1

// Add attribute

newDiv.setAttribute('title', 'Hello Div'); // sets an attribute of title

// Create text node

let newDivText = document.createTextNode('Hello World'); // creates a textNode with content 'Hello World'

// Add text to div

newDiv.appendChild(newDivText); // add newDivText as child element

// insert newDIv into a container

let container = document.querySelector('header .container');

let h1 = document.querySelector('header h1');

console.log(newDIv);

//Changing the fontSize

newDiv.style.fontSize = '30px';

container.insertBefore(newDIv, h1);


