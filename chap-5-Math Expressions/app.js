// //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var num1 = +prompt("Enter your First number:");
// var num2 = +prompt("Enter your Second Number:");
// var addition = num1 + num2;
// document.write(`Sum of ${num1} and ${num2} is ${addition}`);



// //2. Repeat task1 for subtraction, multiplication, division & modulus.

//Subtraction
// var num3 = +prompt("Enter your First number for Subtraction:");
// var num4 = +prompt("Enter your Second Number:");
// var subtraction = num3 - num4;
// document.write(`<br> Sub of ${num3} and ${num4} is ${subtraction}`);

// //Multiplication
// var num5 = +prompt("Enter your First number for Multiplication:");
// var num6 = +prompt("Enter your Second Number:");
// var multiplication = num5 * num6;
// document.write(`<br> Product of ${num5} and ${num6} is ${multiplication}`);

// //Division
// var num7 = +prompt("Enter your First number for Division:");
// var num8 = +prompt("Enter your Second Number:");
// var division = num5 / num6;
// document.write(`<br> Division of ${num5} and ${num6} is ${division}`);


//3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
document.write("<b>Mathematic Expressions Program: </b>")
var value_ ;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write(`<br> Value after variable declaration is: ${value_}`);
// c. Initialize the variable with some number.
value_ = 5;
// d. Show the value of variable in your browser like “Initial value: 5”.
document.write(`<br> Initial value: ${value_}`);
// e. Increment the variable.
value_++ ;
// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write(`<br> Value after increment is: ${value_}`);
// g. Add 7 to the variable.
let newvalue = value_ + 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write(`<br> Value after addition is ${newvalue}`);
// i. Decrement the variable.
newvalue-- ;
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write(`<br> Value after decrement is ${newvalue}`);
// k. Show the remainder after dividing the variable’s value by 3.
let remValue = newvalue % 3;
// l. Output : “The remainder is : 0”.
document.write(`<br> The Reminder is ${remValue} <br> <br>`);



//4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
let ticketPrice = 600;
document.write(`Price of Single Ticket is ${ticketPrice} <br>`);
let fiveTicketsCost = ticketPrice*5;
document.write(`Cost of 5 tickets is ${fiveTicketsCost} <br> <br>`)



// 5. Write a script to display multiplication table of any number in your browser.
var number = 8;
document.write(`<b> Table of ${number} </b> <br>`);
document.write(`${number} x 1 = ${number*1} <br>`);
document.write(`${number} x 2 = ${number*2} <br>`);
document.write(`${number} x 3 = ${number*3} <br>`);
document.write(`${number} x 4 = ${number*4} <br>`);
document.write(`${number} x 5 = ${number*5} <br>`);
document.write(`${number} x 6 = ${number*6} <br>`);
document.write(`${number} x 7 = ${number*7} <br>`);
document.write(`${number} x 8 = ${number*8} <br>`);
document.write(`${number} x 9 = ${number*9} <br>`);
document.write(`${number} x 10 = ${number*10} <br> <br> <br>`);



// 6.6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
document.write("<b> The Temperature Converter: </b> <br>");
let celsius = 60 ;
let fahrenheit = 150;
document.write(`${celsius}°C is ${celsius*9/5+32}F<br>`);
document.write(`${fahrenheit}F  is ${fahrenheit-32*5/9}°C <br> <br> <br>`);



//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store 
// the following in variables:
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

let priceOfItem_1 = 250;
let orderQuantityOfItem_1 = 2;
let totalCostOfItem_1 = priceOfItem_1*orderQuantityOfItem_1;
let priceOfItem_2 = 345;
let orderQuantityOfItem_2 = 3;
let totalCostOfItem_2 = priceOfItem_1*orderQuantityOfItem_2;  
let shippingCharges = 200;

document.write("<b> SHOPPING CART </b> <br>");
document.write(`Price of Item 1 is ${priceOfItem_1}<br>`);
document.write(`Quantity of Item 1 is ${orderQuantityOfItem_1}<br>`);
document.write(`Total Cost of Item 1 is ${totalCostOfItem_1}<br>`);
document.write(`Price of Item 2 is ${priceOfItem_2}<br>`);
document.write(`Quantity of Item 2 is ${orderQuantityOfItem_2}<br>`);
document.write(`Total Cost of Item 2 is ${totalCostOfItem_2}<br>`);
document.write(`Shipping charges is ${shippingCharges} <br>`);
document.write(`Total Cost of your Order is ${totalCostOfItem_1+totalCostOfItem_2+shippingCharges} <br> <br> <br>`);



// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in
// your browser

document.write("<b> MARKS SHEET </b> <br>");
let totalMarks = 1000;
let obtainedMarks = 752;
document.write(`Total Marks: ${totalMarks}<br>`);
document.write(`Obtained Marks: ${obtainedMarks}<br>`);
document.write(`Percentage: ${obtainedMarks/totalMarks*100} <br> <br> <br>`);



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<b> Currency in PKR </b> <br>");
let usDollar = 10;
let saudiRiyal = 28;
var totalCurrencyInPKR = (usDollar*104.80 + saudiRiyal*25);
document.write(`Total Currency in PKR is ${totalCurrencyInPKR} <br> <br> <br>`);




// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write("<b>Arithematic Operation Program </b> <br>");
let num1 = 25;
let value = (num1 + 5);
let result = (value * 10);
document.write(`${result / 2} <br> <br> <br>`);



// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

document.write("<b> Age Calculator </b> <br>");
let currentYear = 2024;
let birthYear = 1997;
document.write(`Current Year is ${currentYear} <br>`);
document.write(`Birth Year is ${birthYear}<br>`);
document.write(`Your Age is ${currentYear-birthYear} <br> <br> <br>`);



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<b> The Geometrizer </b> <br>");
let radius = 20;
let circumference = (2*3.142*radius);
let area = (3.142*radius**2);
document.write(`Radius of a Circle is ${radius} <br> Circumference of a Circle is ${circumference} <br> Total Area of a Circle is ${area} <br> <br> <br>`);





// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

let snack = "Kurleez";
let age = 26;
let maxAge = 50;
let takingDays = 3;
var total = (maxAge*takingDays - takingDays*age) ;
 document.write(` <h1>The Lifetime Supply Calculator </h1> Favourite snack: ${snack} <br> Current Age: ${age} <br> Estimated Maximum Age: ${maxAge} <br> Amount of snacks per day: ${takingDays} <br> You will need ${total} 
${snack} to last you until the ripe old age of ${maxAge}.`);