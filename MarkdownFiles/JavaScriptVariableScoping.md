# Explain variable scoping with/in objects, conditionals and functions

Variable scoping sometimes called Lexical Scoping, determines how a variable is accessible after declaration.

```js

// testing variable scope with conditionals

// cookie jar having number of cookies displayed

let numberOfCookies = 30; //global variable
 getNumberOfCookiesLeft = (cookiesTaken) => {
    if ( cookiesTaken <= 30 ) {
        numberOfCookies = numberOfCookies - cookiesTaken 
        numberOfCookiesLeft = numberOfCookies
        if ( numberOfCookiesLeft > 0 ){
            if ( numberOfCookiesLeft >= 15 && numberOfCookiesLeft <=29 ) {
            console.log(`I still have ${numberOfCookiesLeft} cookies to share with my all of my friends`);
            } else if ( numberOfCookiesLeft < 15 && numberOfCookiesLeft >=10 ) {
            console.log(`I have ${numberOfCookiesLeft} cookies left for only me and my best friends`);
            } else {
            console.log(`${numberOfCookiesLeft} Cookies left is for my friend and I`);
            }
        } else {
            console.log('No more cookies in the jar')
        }
    } else {
        console.log('Don\'t be too greedy you can\'t take more than the maximum amount of cookies')
        }
}
getNumberOfCookiesLeft(50); // Don't be too greedy you can't take more than the maximum amount of cookies
getNumberOfCookiesLeft(7); // I still have 23 cookies to share with my all of my friends
console.log(numberOfCookies); // 23 : global variable is updated
getNumberOfCookiesLeft(10); // I have 13 cookies left for only me and my best friends
console.log(cookiesTaken); // undefined ; Out of scope

```

```js
let car = {
    name: 'Ford',
    numberOfDoors: 2,
    driving: () => {
        console.log('The car is moving');
    }

};
car.numberOfDoors // 2
car.driving //The  car is moving

```

```js
    
    // testing variable scope in function
     increaseAgeByOne = (age) => {
        let result = age + 1;
        console.log(result);
    }
increaseAgeByOne(2); // 3
result; // Uncaught ReferenceError: result is not defined; meaning out of scope

```


