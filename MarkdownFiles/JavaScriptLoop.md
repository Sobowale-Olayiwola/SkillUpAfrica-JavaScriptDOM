# Explain Infinite Loop with Examples

Infinite loop occurs in most programming languages, whereby the initial condition met that started the loop isn't 

contradicted to make the condition become false which makes the loop run continously or it can be said to be a 

sequence of instructions in a computer program  which loops endlessly, either due to the loop having no terminating 

condition, having one that can never be met, or one that causes the loop to start over.

```js
// code example of inifinite loop

let isSunny = true;
while(isSunny){
    console.log('This weather would help make our cloth dry quickly');
}
```

# Explain For loops with Example

for loop consists of three parts:

* the initialisation statement

* the conditional statement 

* and the incremental expression or operation.
 
 ```js
 const family = [ 'Father','Mother','Son','Daughter','Sister','Brother' ];
 for( index = 0; index < family.length; index += index ) {
     console.log(family[index]); // logs out each element in the array
 }
 ```
# Explain ForEach loop with Example

The forEach method passes a callback function for each element of an array together with the following parameters:

* Current Value (required) - The value of the current array element

* Index (optional) - The current element's index number

* Array (optional) - The array object to which the current element belongs

```js
const numbers = [ 23, 34,  17 , 29 ]
numbers.forEach(function(number) {
    console.log(number); // logs out each element in the array
});
```

 ```js

 const drinks = [ 'coke','fanta','miranda','pepsi','sprite' ]
 drinks.forEach(element => {
            console.log(element);
        });

 ```

# Explain For of loops with example

```js
let handDrivenTools = [ 'screw driver', 'spanner', 'plier', 'hammer' ];
let tool;

for (tool of handDrivenTools) {
  console.log(tool);
}

```

# Use the ForEach loop to loop through an array of objects and log the second property of each object to the console
```js
const cinema = {
    cafetaria: ['Chicken Republic','Domino' ,'Mega Chicken','Sweet Sensation'],
    recreationalCentre: ['Skate Park', 'Tennis Court', 'Mini Golf'],
    carPark:['park A', 'park B', 'park C']
}
cinema.recreationalCentre.forEach(element =>{
    console.log(element);
});

```



