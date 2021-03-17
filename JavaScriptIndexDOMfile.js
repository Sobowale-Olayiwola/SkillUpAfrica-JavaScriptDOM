
// Create a div

let newDiv = document.createElement('div'); // creates a new div element

//Add class
newDiv.className = 'hello'; // gives it a class named hello

// Add id

newDiv.id = 'hello1'; // gives it an id named hello1

// Add attribute

newDiv.setAttribute('title', 'Hello Div'); // sets an attribute of title

// Create text node

let newDivText = document.createTextNode('Welcome to Olayiwola\'s page'); // creates a textNode with content 'Hello World'

// Add text to div

newDiv.appendChild(newDivText); // add newDivText as child element

// insert newDIv into a container

let container = document.querySelector('header .container');

let h1 = document.querySelector('header h1');

console.log(newDIv);

//Changing the fontSize

newDiv.style.fontSize = '30px';

container.insertBefore(newDIv, h1);
