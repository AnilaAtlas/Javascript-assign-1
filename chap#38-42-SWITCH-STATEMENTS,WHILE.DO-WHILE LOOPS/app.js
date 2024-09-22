/*1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */
function calcPower() {
  var base = +prompt("Enter Base");
  var exponent = +prompt("Enter Exponent");
  var power = 1;
  if (exponent === 0) {
    return 1;
  }
  for (i = 1; i <= exponent; i++) {
    power *= base;
  }
  return (
    "The power of base " + base + " with exponent " + exponent + " is " + power
  );
}
console.log(calcPower());

/*Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020, ... */

// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.

function isLeapYear() {
  var year = +prompt("Enter Year:");
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("This year is a leap year!");
  } else {
    alert("This year is not a leap year");
  }
}
console.log(isLeapYear());

/*3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */
function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

// Function to calculate the area of the triangle
function calculateArea(a, b, c) {
  var S = calculateSemiPerimeter(a, b, c);
  return "The Area of a Triangle is " + S * (S - a) * (S - b) * (S - c);
}

var sideA = +prompt("Enter Side A"); //3;
var sideB = +prompt("Enter Side B"); //6;
var sideC = +prompt("Enter Side C"); //7;
console.log(calculateArea(sideA, sideB, sideC));

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function to calculate average
var subj1 = +prompt("Enter marks of subject 1 : ");
var subj2 = +prompt("Enter marks of subject 2 :");
var subj3 = +prompt("Enter marks of subject 3 :");
function calculateAverage(a, b, c) {
  return ((a, b, c) / 3).toFixed(2);
}

// function to calculate percentage
function calculatePercentage(a, b, c) {
  return (((a + b + c) / 300) * 100).toFixed(2);
}

// main function
function mainFunction(a, b, c) {
  var average = calculateAverage(a, b, c);
  var percentage = calculatePercentage(a, b, c);
  console.log("Average of 3 subjects is " + average);
  console.log("Percentage of 3 subjects is " + percentage);
}
console.log(mainFunction(subj1, subj2, subj3));

/* 5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now.*/
var str = prompt("Enter string :");
var ltr = prompt("Enter letter :");
function customIndexOf(str, ltr) {
  for (i = 0; i < str.length; i++) {
    if (str[i] === ltr) {
      return "The Index of a letter  " + ltr + " from the given string is " + i;
    }
  }
  return -1;
}
alert(customIndexOf(str, ltr));

/*6. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */
var str = prompt("enter string");
function deleteVowels(str) {
  var vowels = "aeiouAEIOU";
  var result = " ";
  for (i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}
alert(deleteVowels(str));

/*7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence
“Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui. */
function countVowelPairs(text) {
  var count = 0;
  var i = 0;
  while (i < text.length - 1) {
    var char1 = text[i].toLowerCase();
    var char2 = text[i + 1].toLowerCase();
    var vowelPairs = [];

    switch (true) {
      case char1 === "a" &&
        (char2 === "a" ||
          char2 === "e" ||
          char2 === "i" ||
          char2 === "o" ||
          char2 === "u"):
      case char1 === "e" &&
        (char2 === "a" ||
          char2 === "e" ||
          char2 === "i" ||
          char2 === "o" ||
          char2 === "u"):
      case char1 === "i" &&
        (char2 === "a" ||
          char2 === "e" ||
          char2 === "i" ||
          char2 === "o" ||
          char2 === "u"):
      case char1 === "o" &&
        (char2 === "a" ||
          char2 === "e" ||
          char2 === "i" ||
          char2 === "o" ||
          char2 === "u"):
      case char1 === "u" &&
        (char2 === "a" ||
          char2 === "e" ||
          char2 === "i" ||
          char2 === "o" ||
          char2 === "u"):
        count++;
        vowelPairs.push(char1 + char2);
        console.log(vowelPairs);
        break;
    }
    i++;
  }
  return count;
}
alert(countVowelPairs("Please read this application and give me gratuity"));

/*8. The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters. */
function kmIntoMeters(distance) {
  return (
    "The distance " +
    distance +
    "km" +
    " into meter is " +
    distance * 1000 +
    "m"
  );
}
function kmIntoFeet(distance) {
  return (
    "The distance " +
    distance +
    "km" +
    " into feet is " +
    (distance * 3280.84).toFixed(2) +
    "feet"
  );
}
function kmIntoInches(distance) {
  return (
    "The distance " +
    distance +
    "km" +
    " into inches is " +
    (distance * 39370.1).toFixed(2) +
    "inches"
  );
}
function kmIntoCentimeter(distance) {
  return (
    "The distance " +
    distance +
    "km" +
    " into centimeter is " +
    distance * 100000 +
    "cm"
  );
}
var distance = +prompt("Enter Distance in Kilometer : ");
alert(kmIntoMeters(distance));
alert(kmIntoFeet(distance));
alert(kmIntoInches(distance));
alert(kmIntoCentimeter(distance));

/*9. Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour. */
function calculateOvertimePay(hoursWorked) {
  var regularHours = 40;
  var overtimeRate = 12.0;
  var overtimePay = 0;
  if (hoursWorked > regularHours) {
    var overtimeHours = hoursWorked - regularHours;
    overtimePay = overtimeHours * overtimeRate;
  }
  return overtimePay;
}
var hoursWorked = 45;
var overtimePay = calculateOvertimePay(hoursWorked);
console.log(
  "Overtime pay for " +
    hoursWorked +
    " hours  worked is Rs. " +
    overtimePay.toFixed(2)
);

/*10. A cashier has currency notes of denominations 10, 50 and
    100. If the amount to be withdrawn is input through the
    keyboard in hundreds, find the total number of currency notes
    of each denomination the cashier will have to give to the
    withdrawer. */
function currencyNoteCalculator(amount) {
  var note100 = Math.floor(amount / 100);
  var remainingAmount = amount % 100;
  var note50 = Math.floor(remainingAmount / 50);
  remainingAmount = remainingAmount % 50;
  var note10 = Math.floor(remainingAmount / 10);
  return [note100, note50, note10];
}
var am = prompt("Enter your amount:");
var result = currencyNoteCalculator(am);
console.log("Note 100: " + result[0]);
console.log("Note 50: " + result[1]);
console.log("Note 10: " + result[2]);
