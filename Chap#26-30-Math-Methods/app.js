/*1. Write a program that takes a positive integer from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/

var posInteger=+prompt("Enter any positive integer : ");
console.log("number : " + posInteger);
console.log("round off value  : " + Math.round(posInteger));
console.log("floor value : " + Math.floor(posInteger));
console.log("ceil value : " + Math.ceil(posInteger));

/*2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/


var negFloatNum=+prompt("Enter any negative float number : ");
console.log("number : " + negFloatNum );
console.log("round off value  : " + Math.round(negFloatNum));
console.log("floor value : " + Math.floor(negFloatNum));
console.log("ceil value : " + Math.ceil(negFloatNum));

/*3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5*/

var absoluteNumber=+prompt("Enter any number it will return absolute value  : ");
console.log("Absolute value of " + absoluteNumber + " is " + Math.abs(absoluteNumber));

/*4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.:*/

var diceRoll=Math.random()*6;
console.log(Math.round(`Random dice value is :  ${diceRoll}`));

/*5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser*/

var head=2;
var tail=1;
var toss=Math.random()*2;
var tossResult=Math.ceil(toss);
console.log(tossResult)
if(tossResult===tail){
    console.log(" Random coins value : Tails");
}
else if(tossResult===head){
    console.log(" Random coins value : Heads");
}

/* 6. Write a program that shows a random number between 1
and 100 in your browser.*/ 
 
var randomNumber=Math.floor(Math.random()*100) + 1;
console.log("Random number between 1 to 100 is " + randomNumber);

/*7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */

var userweight=prompt("Enter your weight : ");
console.log("The weight of user is " + parseFloat(userweight) + " kilograms");

/* 8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.    */
//Number guessing game
var userInput=+prompt("Enter any Number between 1 to 10 ");
var secretNumber=Math.floor(Math.random() * 10) + 1;
if(userInput===secretNumber){
    console.log("Congratulations you guess the write number ");
}
else{
    console.log("Try Again");
}