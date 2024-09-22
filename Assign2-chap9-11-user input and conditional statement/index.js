// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like
// this: “Welcome to city of lights”
var city = prompt("Enter the name of the City of Lights");
if(city === "karachi"){
    alert("Welcome to the city of lights");
};


// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your Gender");
if(gender === "female"){
    alert("Good Morning Ma'am");
}else if(gender === "male"){
    alert("Good Morning Sir");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message.
var signalColour = prompt("What's the color of traffic signal?");
if(signalColour === "Red"){
    alert("Must Stop!");
}else if(signalColour === "Yellow"){
    alert("Ready to Move!");
}
else if(signalColour === "green"){
    alert("Move Now!");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less 
//than 0.25litres, show the message “Please refill the fuel in your car”
var reminingFuel = +prompt("How many litres fuel do You have in your Car?");
if(reminingFuel < 0.25){
    alert("Please refill the fuel in your Car");
}else{
    alert("You can start your journey!");
}


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if(c++ === 13){
alert("condition 1 is true");
}if(c === 13){
alert("condition 2 is true");
}if(++c < 14){
alert("condition 3 is true");
}if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}if (true){
alert("True");
}if (false){
 alert("False");
}if("car" < "cat"){
    alert("car is smaller than cat");
    }

//     6. Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade
let marks0fsub_1 = +prompt("Please Enter the Marks of Subject One:");
let marks0fsub_2 = +prompt("Please Enter the Marks of Subject Two:");
let marks0fsub_3 = +prompt("Please Enter the Marks of Subject Three:");
let totalMarks = 300;
let obtainedMarks = marks0fsub_1 + marks0fsub_2 + marks0fsub_3;
let percentage = obtainedMarks/totalMarks*100;
document.write(`<b> MARKSHEET <b> <br>
    Total Marks: ${totalMarks} <br>
    Obtained Marks: ${obtainedMarks} <br> 
    Percentage: ${percentage} <br>`
);
if(percentage >= 80){
    document.write("Grade: A-One <br> Remarks: Excellent <br>");
}if(percentage >= 70){
    document.write("Grade: A <br> Remarks: Good <br>");
}if(percentage >= 60){
    document.write("Grade: B <br> Remarks: You Need to Improve <br>");
}if(percentage < 60){
    document.write("Fail <br> Remarks: Sorry <br>");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
let secretNumber = 4;
let userGuess = +prompt("Guess the Secret Number");
if(secretNumber === userGuess){
    alert(" “Bingo! Correct answer” ");
}else if(userGuess+1 === secretNumber){
    alert(" “Close enough to the correct answer” ");
}else{
    alert("Try Again!");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the
 //number is divisible by 3.
 let userInput = +prompt("Enter Any Number:");
 if(userInput%3 === 0){
    alert("Your Number is divisible by 3");
 }else{
    alert("Your Number is not divisible by 3");
 }

//  9. Write a program that checks whether the given input is an even number or an odd number.
let num = +prompt("Enter the Number:");
if(num%2 === 0){
    alert(`${num} is an Even Number`);
}else{
    alert(`${num} is an Odd Number`);
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
let temperature = +prompt("What's the Temperature?");
if(temperature > 40){
alert("It is too hot Outside");
}else if(temperature > 30){
    alert("The Weather today is Normal.");
}else if(temperature > 20){
    alert("Today’s Weather is cool.");
}else if(temperature > 10){
alert("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second numberb
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
let num1 = +prompt("Enter First number:");
let num2 = +prompt("Enter Second number:");
let operator = prompt("Enter the Operator you want to perform the equation:");
if(operator === "+"){
    alert(`${num1} + ${num2} = ${num1 + num2}`);
}else if(operator === "-"){
    alert(`${num1} - ${num2} = ${num1 - num2}`)
}else if(operator === "*"){
    alert(`${num1} * ${num2} = ${num1 * num2}`);
}else if(operator === "/"){
    alert(`${num1} / ${num2} = ${num1 / num2}`);
}else if(operator === "%"){
    alert(`${num1} % ${num2} = ${num1 % num2}`);
}
