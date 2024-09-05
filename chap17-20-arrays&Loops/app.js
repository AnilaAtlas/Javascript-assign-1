//1. Declare and initialize an empty multidimensional array.(Array of arrays)
let multiArray = [[], [], [[], []]];

//2.Declare and initialize a multidimensional array representing the following matrix:
let multidimensional_array = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 2],
];
for (var i = 0; i < multidimensional_array.length; i++) {
  document.write(`<b>${multidimensional_array[i]}</b> <br>`);
}
document.write("<br><br>");

//3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
  document.write(i, "<br>");
}
document.write("<br><br>");

//4. Write a program to print multiplication table of any number using for loop.
//Table number & length should be taken as an input from user.
let table = +prompt("Enter the multiplication table you want:");
let tableLength = +prompt("Now Enter the length of the table");
document.write(`Multiplication table of ${table} <br>`);
document.write(`Length of the table is ${tableLength} <br>`);

for (var i = 1; i <= tableLength; i++) {
  document.write(`${table} x ${i} = ${table * i} <br>`);
}
document.write("<br><br>");

//5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 1; i < fruits.length; i++) {
  document.write(`${fruits[i]} <br>`);
}
for (let i = 1; i < fruits.length; i++) {
  document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}

document.write("<br><br>");

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b> Counting: </b> <br>");
for (let i = 1; i <= 15; i++) {
  document.write(i, " , ");
}
document.write("<br><br>");

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<b> Reverse Counting: </b> <br>");
for (let i = 10; i >= 1; i--) {
  document.write(i, " , ");
}
document.write("<br><br>");

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<b> Even: </b> <br>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i, " , ");
}
document.write("<br><br>");

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<b> Odd: </b> <br>");
for (let i = 10; i >= 0; i--) {
  document.write(i, " , ");
}
document.write("<br><br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<b> Series: </b> <br>");
for (let i = 2; i <= 20; i += 2) {
  document.write(`${i}k  ,`);
}
document.write("<br><br>");

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching,
// prompt the user whether the given item is found in the list or not.
let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt(
  "Welcome to ABC bakery, What do you want to order sir/ ma'am?"
);
let flag = false;
let search = userSearch.toLowerCase();
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === search) {
    flag = true;
    document.write(
      `${userSearch} is available at index ${i} in our bakery. <br>`
    );
    break;
  }
}
if (flag === false) {
  document.write(`Sorry, ${userSearch} is not available at the moment. <br>`);
}
document.write("<br><br>");

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
let num_array = [24, 53, 78, 91, 12];
let max = num_array[0];
for (let i = 0; i < num_array.length; i++) {
  if (num_array[i] > max) {
    max = num_array[i];
  }
}
document.write(`Array items: ${num_array} <br>`);
document.write(`The largest number is: ${max}`);
document.write("<br><br>");

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
let min = num_array[0];
for (let i = 0; i < num_array.length; i++) {
  if (num_array[i] < min) {
    min = num_array[i];
  }
}
document.write(`Array items: ${num_array} <br>`);
document.write(`The smallest number is: ${min}`);
document.write("<br><br>");

// 10. Write a program to print multiples of 5 ranging 1 to 100.
for (let i = 0; i <= 100; i += 5) {
  document.write(`${i}  ,`);
}
