//Task1:Create an array of numbers from 1 to 5 and log the array to the console.
// let arr= [1,212,3,551,4];
// console.log(arr);

//2:Access the first and last elements of the array and log them to the console.
const ar = [1, 212, 3, 551, 4];
// console.log(ar[0]);
// console.log(ar[ar.length -1]);
// ar.push(111);
// console.log(ar);
// ar.pop();
// console.log(ar);
// for(let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }

//using for each loop
// ar.forEach((number) =>{
//     console.log(number);
// })

//3:Use the push method to add a new number to the end of the array and log the updated array.
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
// Above
// task 5:Use the shift method to remove the first element from the array and log the updated array.

// const arr=[1,88,72,70,24]
// arr.shift();
// console.log(arr);

//task 6:Use the unshift method to add a new number to the beginning of the array and log the updated array.
// const arr=[1,88,72,70,24]
// arr.unshift(0);
// console.log(arr);

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Task 13: Access and log a specific element from the two-dimensional array.

// const mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(mat);
// const specificElement = mat[0][2];// zero based indexing
// console.log(specificElement);

//Imp
// Use the map method to create a new array where each number is doubled and log the new array.

const num = [1, 8, 70, 9, 11];
const doubleNum = num.map((num) => num * 2);
console.log(doubleNum);

// Use the filter method to create a new array with only even numbers and log the new array.

const filNum = num.filter((num) =>{
    return num% 2 === 0;
})

console.log(filNum);

//Use the reduce method to calculate the sum of all numbers in the array and log the result. 

const sum = num.reduce((accumulator, currentValue)=>{
    
    return accumulator +currentValue ;
})

console.log(sum);