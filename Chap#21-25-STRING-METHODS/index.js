// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
let firstName = prompt("Enter your First Name:");
let lastName = prompt("Enter your Last Name:");
let fullName = `${firstName} ${lastName}`;
document.write(`Hello ${fullName}, Welcome to our Website.<br><br>`);

//  2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
//  input in your browser
let userInput = prompt("What's your favourite mobile model?");
document.write(`Your Favourite Mobile Model is: ${userInput} <br>`);
document.write(`Length of your input is: ${userInput.length}. <br><br>`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
let letter = "Pakistani";
document.write(letter, "<br>");
document.write(`Index of 'n' in Word Pakistani is: ${letter.indexOf("n")}.<br><br>`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
let value = "Hello World";
document.write(value,"<br>");
document.write('index of last l is :',value.lastIndexOf("l"),"<br><br>");

 // 5. Write a program to find the character at 3rd index in the
 // word “Pakistani” and display the result in your browser.
let word ="Pakistani";
document.write(word,"<br>");
document.write(`Character at in the 3rd index of word Pakistani is: ${word.charAt(3)} <br><br>`);

//6. Repeat Q1 using string concat() method.
let first_Name = prompt("Enter your First Name:");
let last_Name = prompt("Enter your Last Name:");
let full_Name = first_Name.concat(" ", last_Name);
document.write(`Hello ${full_Name}, Welcome to our Website.<br><br>`);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
let city = "Hyderabad";
document.write(`City: ${city}`);
let replace_name = city.replace("Hyderabad", "Islamabad");
document.write("<br>");
document.write(`After replacement: ${replace_name} <br><br>`);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
 var message = "Ali and Sami are best friends. They play cricket and football together.";
 replacing = message.replace(/and/g, "&");
 document.write(replacing, "<br> <br>");

//  9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
let string = "472";
let type = typeof(string);
document.write(`Value: ${string} <br> Type: ${type} <br>`);
let num = 472;
let type_of_num = typeof(num);
document.write(`Value: ${num} <br> Type:${type_of_num}<br><br>`);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
let user_input = prompt("which Word do you want to convert into capital letters?");
document.write(`User Input: ${user_input} <br>`);
let converted_word = user_input.toUpperCase()
document.write(`Upper Case: ${converted_word}<br><br>`);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
let user_prompt = prompt("which word do you want to convert into title case?");
document.write(`User Input: ${user_prompt}<br>`);
let firstLetter = user_prompt.slice(0,1).toUpperCase();
let remaining = user_prompt.slice(1).toLowerCase();
let title_case =`${firstLetter}${remaining}`;
document.write(`Title case: ${title_case}<br><br>`);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var number = 35.36;
document.write(`NUMBER: ${number}<br>`);
var string__ = number.toString();
var dotRemove = string__.replace("."," ");
document.write(`Result: ${dotRemove}<br>`);

//13. Write a program to take user input and store username in a variable. 
// If the username contains any special symbolamong [@ . , !], 
// prompt the user to enter a valid username.For character codes of [@ .
//Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var username=prompt("Enter your name : ");
for(i=0;i<username.length;i++){
    charValue = username[i].charCodeAt();
        if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
            alert("Please enter a valid username");
        }
    } 

 //14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in anarray. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var inputItem=prompt("Welcome to ABC bakery what do you want sir/maam ?");
inputItem=inputItem.toLowerCase();
var global=false;
for(i=0;i<A.length;i++){
    if(A[i] === inputItem){
        global=true;
        alert(`${inputItem} is available at index ${i} in our bakery.`);
    }
}
if(global===false){
        alert(`We are sorry, ${inputItem} is not available available in our bakery.`);
}

//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9.

var password = prompt("Enter password: ");
document.write("Entered password: " + password + "</br>");

var hasAlphabet = false;
var hasNumber = false;
var passwordLength = true;
var passwordStart = true;

// // Check for alphabets and numbers in the password
for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        hasAlphabet = true;
    }
    if (charCode >= 48 && charCode <= 57) {
        hasNumber = true;
    }
}

// // Check if password contains both alphabets and numbers
if (!hasAlphabet || !hasNumber) {
    document.write("Password must contain both alphabets and numbers." + "</br>");
}

// // Check if password starts with a number
if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    document.write("Password must not start with a number." + "</br>");
    passwordStart = false;
}

// // Check if password is at least 6 characters long
if (password.length < 6) {
    document.write("Password must be at least 6 characters long." + "</br>");
    passwordLength = false;
}

// Check if password meets all criteria
if (hasAlphabet && hasNumber && passwordLength && passwordStart) {
    document.write("Password Approved");
} else {
    document.write("Please enter a valid Password");
}

/*16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */

var university = "University of Karachi";
 var universityArray = university.split(" ");
        for (var i = 0; i < universityArray.length; i++) {
            document.write(universityArray[i] + "<br>");
        }
   

