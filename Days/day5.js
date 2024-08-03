//task1:Write a function to check if a number is even
//or odd and log the result to the console

function check(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
check(90);

//task2: Write a function to calculate the square of a number and return the result.

// function square(num){
//     return num*num;

// }

// let num=4;

// let sq = square(num);
// console.log(sq);

// Task: 3  Write a function expression to find
//the maximum of two numbers and log the result to the console.

const findMax = function (a, b) {
  const max = a > b ? a : b;
  console.log(`${max}`);
  return max;
};

findMax(10, 20);

// Task: 4

const concatinate = function (str1, str2) {
  const res = str1 + str2;
  console.log(`${res}`);
  // return res;
};

concatinate("ab", "bf");

//task: 5

const sum = (a, b) => {
  const res = a + b;
  console.log(res);
};

sum(5, 7);

//task: 6  Write an arrow function to check
//if a string contains a specific character and return a boolean value.

const containsChar = (str, char) => str.includes(char);

const result1 = containsChar("hello world", "l");
console.log(result1);

// task 7:Write a function that takes two parameters and returns their product.
//  Provide a default value for the second parameter.

// function mul(a,b=1){
//     return a*b;
// }
// const result = mul(58);
// console.log(result);

// task 8:Write a function that takes a person's name and age
// and returns a greeting message. Provide a default value for the age.

// function greet(name,age=50){
//     const msg= "Hi ";
//     const res= `${msg} ${name}`
//     console.log(res);
//     return res;

// }

// greet("anil");
// console.log(ress);

//task 9:Write a higher-order function that takes a function and a number,
//  and calls the function that many times.

// function reptFun(func, times){
//   for(let i=0;i<times;i++){
//     func();
//   }
// }
// const sayHello = ()=>{
//   console.log("Hello!")
// }

// reptFun(sayHello,3);

//task10:Write a higher-order function that takes two functions and a value,
//applies the first function to the value,
//and then applies the second function to the result.

function compFunc(func1, func2, value) {
  return func2(func1(value));
}

const add5 = (num) => {
  num + 5;
};

const mul = (num) => num * 3;

const res = compFunc(add5, mul, 2);

console.log(res);
