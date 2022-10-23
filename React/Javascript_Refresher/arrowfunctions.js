
// Arrow functions are a different syntax for creating Javascript functions

//Normal functions look like the following:

// function myFnc(){
//     ...
// }

// Basic format of an arrow function is as follows:

// const myFnc = () => {
//     ...
// }

// Arrow function syntax benefits us by solving issues we have with the 'this' keyword in Javascript. 
    // The 'this' keyword doesn't always refer to what you expected it to when writing your code.
    // Arrow functions will always keep its context

// Normal function below. What goes inside that first parenthesis is called an 'argument'
function printMyName(name){
    console.log(name)
}
// Now run the function below, passing in the argument for 'name'
printMyName('Jason');

// Now the arrow function equivalent is to store this on a const or let
const printName = (name) => {
    console.log(name)
}
printName('Jason2');