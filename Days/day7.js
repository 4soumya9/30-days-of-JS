// // Task 1:Create an object representing a book with properties like title, author, and year, and log the object to the console.
// // Task 2:Access and log the title and author properties of the book object.
// // Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// // Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// const book = {
//   title: "To kill",
//   author: "Lee",
//   year: 7852,

//   //Method
//   getTitleAndAuthor: function () {
//     return `${this.title} by ${this.author}`;
//   },
//   // method to update the year property
//   updateYear: function (newYear) {
//     this.year = newYear;
//   },
// };

// // const titleAndAuth = book.getTitleAndAuthor();
// // console.log(titleAndAuth);

// // book.updateYear(2580);
// // console.log(book);

// // Use a for...in loop to iterate over the properties of the book object and log each property and its value.
// // for (const prop in book) {
// //   console.log(`${prop}: ${book[prop]} `);
// // }


// // Use Object.keys and Object.values methods to log all the keys and values of the book object.
// const keys = Object.keys(book);

// const values = Object.values(book);

// console.log('keys:', keys);
// console.log('Values:', values);

// // const ti = book.title;
// // const au =book.author;
// // console.log(ti);
// // console.log(au);
// // console.log(book);

// // Task: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.


const book1 = {
    title: "To kill",
    author: "Lee",
    year: 7852
};
const book2 = {
    title: " kill",
    author: "Ree",
    year: 7802
};
const book3 = {
    title: "2007",
    author: "Kee",
    year: 7852
};

const library = {
    name: "City Library",
    books:[book1, book2, book3]
};

const libName = library.name;
console.log(`${libName}`);

const bookTitles = library.books.map((book) => book.title);
console.log('titles:');
bookTitles.forEach(title => console.log(title));
