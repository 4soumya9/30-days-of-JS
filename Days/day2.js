// let num1= 4;
// let num2 = 5;

// let sum = num1+num2;

// let diff= num1- num2;

// let product = num1*num2;

// let div = num1/num2;

// let reminder = num1%num2;

// console.log(reminder);

// console.log(product);//20
// console.log(div);
// console.log(sum);
//  console.log(diff);-1

// let num =10;

// // num += 5;

// num -=5;

// console.log(num);

// loose equality and strict equality

let num1 = 5;
let num2 = "5";

// Compare the numbers using the == operator (loose equality)
// let looseEquality = num1 == num2;

// console.log(looseEquality); // true because it only compares the value

// // Compare the numbers using the === operator (strict equality)
// let strictEquality = num1 === num2;

// console.log(strictEquality); // false because it will compare value and type , here type is different

let age = 25;
let hasID = false;

// Use the && operator to combine two conditions
// let canEnter = (age >= 18) && hasID;

let canEnter = age >= 18 || hasID;

// Log the result to the console
console.log("Can enter:", canEnter);

// ! -> It is a logical not operator.

let isLoggedIn = true;

let acessedDenied = !isLoggedIn;

console.log("Access Denied :", acessedDenied);

//Ternary Operator (? :): This operator is used as a shortcut for an if-else statement. It takes three operands:
// A condition to evaluate.
// The value to return if the condition is true.
// The value to return if the condition is false.

let number = -5;

let result = number >= 0 ? "Positive" : "Negative";

console.log(`the number  ${number} is ${result}.`);
