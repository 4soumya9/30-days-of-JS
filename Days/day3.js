//Task1:Write a program to check if a number is positive, negative, or zero, and log the result to the console.

// let number =10;

// let result;

// if(number > 0){
//     result='Positive';
// }else if(number < 0){
//     result ='Negative';
// }else{
//     result='zero';
// }

// console.log(`result is ${result}`)

// //Task2
// let age = 40;
// let result;
// if (age >= 18) {
//   result = "eligible";
// } else {
//   result = "NA";
// }
// console.log(result);

// Task 3

// let a = 55;
// let b = 55;
// let c = 6;
// let result;
// // if (a > b && a > c) {
// //   result = "a is larger";
// // } else if (b > a && b > c) {
// //   result = "b is larger";
// // } else if (c > a && c > b) {
// //   result = "c is larger";
// // }

// // console.log(result);
// let largest;
// if (a >= b) {
//   if (a >= c) {
//     largest = a;
//   } else {
//     largest = c;
//   }
// } else {
//   if (b >= c) {
//     if (b >= a) {
//       largest = b;
//     } else {
//       largest = a;
//     }
//   }
// }

// // check equality

// if (a == b && b == c) {
//   console.log("largest:", a, b, c);
// } else if (a == b && a > c) {
//   console.log("largest:", a, b);
// } else if (a == c && c > b) {
//   console.log("largest:", a, c);
// } else if (c == b && c > a) {
//   console.log("largest:", b, c);
// } else {
//   console.log(`largest: ${largest}`);
// }

// // console.log(largest);

// function dateName(dayNumber) {
//   let dayName;
//   switch (dayNumber) {
//     case 1:
//       dayName = "Mon";
//       break;
//     case 2:
//       dayName = "Tues";
//       break;
//     case 3:
//       dayName = "Wed";
//       break;
//     case 4:
//       dayName = "Thurs";
//       break;
//     case 5:
//       dayName = "Fri";
//       break;
//     case 6:
//       dayName = "Sat";
//       break;
//     case 7:
//       dayName = "Sun";
//       break;
//     default:
//       dateName = "Invalid day Number";
//   }

//   console.log(dayName);
// }

// dateName(1);

// //Grading System

// function getGrade(number) {
//   let grade;
//   switch (true) {
//     case number <= 100 && number >= 80:
//       grade = "A";
//       break;
//     case number >= 60 && number < 80:
//       grade = "B";
//       break;
//     case number >= 40 && number < 60:
//       grade = "C";
//       break;
//     default:
//       grade = "D";
//       break;
//   }
//   console.log(grade);
// }

// getGrade(15);
// getGrade(100);

//Ternary Operator

function check(number) {
  const result = number % 2 === 0 ? "Even" : "Odd";
  console.log(result);
}

check(411);

//Task7

function leapYear(year) {
  // const result =
  //   (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
  //   (year % 100 === 0 && year % 400 === 0)
  //     ? "Leap Year"
  //     : "Not leap";

  const result =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? "Leap"
      : "Not Leap";
  console.log(result);
}

leapYear(1996);
leapYear(1700);
leapYear(2000);
