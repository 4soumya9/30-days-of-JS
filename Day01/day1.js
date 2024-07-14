var number = 42;
console.log(number);

let myString = "hello world";
console.log(myString);

const isTrue = true;
console.log(isTrue);

// Create variables of different data types (number, string, boolean, object, array) and
//  log each variable's type using the typeof operator

//Number
let age = 18;
console.log(typeof age);

//String 

let name ="Alicce";
console.log(typeof name);

//Boolean

let isStudent = true;
console.log(typeof isStudent);

//object 
let person ={
    firstName: "joy",
    lastName:"Roy"
};

console.log(typeof person)// return as a object

//Array
let colors = ["red", "green", "blue"];
console.log(typeof colors);


//Reassigning Variables

let myVar =  "First value";

console.log("Initial Value", myVar)

myVar = "Last Value";

console.log("New Value", myVar);


//Understanding const

const myConst = "Initial Value";

console.log("Initial Value:", myConst);

myConst="New Value";

console.log("New Value:", myConst);// this will give error


// Use var for function-scoped variables, though it's generally recommended to avoid using var in modern JavaScript due to potential scoping issues.
// Use let for block-scoped variables that may need to be reassigned.
// Use const for block-scoped variables that should not be reassigned.

