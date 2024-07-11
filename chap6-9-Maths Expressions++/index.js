// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
 
document.write("<b> Question:1 </b> <br> <br>");
 let num = +prompt("Enter any number:");
 document.write(`<b> Result: </b> <br> The value of a is:  ${num} <br> ...................................... <br>`);
 document.write(`The value of  ++a  is:  ${++num} <br> Now The value of a is:  ${num} <br> <br>  <br>`);
 document.write(`The value of a++  is:  ${num++} <br> Now The value of a is:  ${num} <br> <br> <br>`);
 document.write(`The value of  --a is:  ${--num} <br> Now The value of a is:  ${num} <br> <br> <br>`);
 document.write(`The value of a--  is:  ${num--} <br> Now The value of a is:  ${num} <br> <br> <br>`);



//  2. What will be the output in variables a, b & result after
//  execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
//  Explain the output at each stage:
//  --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--;

document.write("<b> Question:2 </b> <br><br>");
var a = 2; 
var b = 1;
var result = --a - --b + ++b + b--;
var result = --a;
var result= --a - --b;
var result= --a - --b + ++b;
var result=--a - --b + ++b + b--;
document.write(`a is: ${a} <br>`);
document.write(`b is: ${b} <br>`);
document.write(`<b> Result is: ${result} </b> <br> <br> <br>`);



// 3. Write a program that takes input a name from user & greet the user.

document.write("<b> Question:3 </b> <br><br>");
let userName = prompt("Enter Your Name:");
document.write(`Hi ${userName}, Welcome to Our Website! <br> <br> <br>`);


// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

document.write("<b> Question:5 </b> <br><br>");
let table = +prompt("Enter a Multiplicaton table number, You want to print:" ,5);
let increment =1;
document.write(`<b> Table of ${table} </b> <br> <br>
    ${table} x ${increment} = ${table*1} <br>
    ${table} x ${++increment} = ${table*2} <br>
    ${table} x ${++increment} = ${table*3} <br>
    ${table} x ${++increment} = ${table*4} <br>
    ${table} x ${++increment} = ${table*5} <br>
    ${table} x ${++increment} = ${table*6} <br>
    ${table} x ${++increment} = ${table*7} <br>
    ${table} x ${++increment} = ${table*8} <br>
    ${table} x ${++increment} = ${table*9} <br>
    ${table} x ${++increment} = ${table*10} <br> <br> <br>
    `);


// 5. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

document.write("<b> Question:6 </b> <br><br>");
let sub_1 = prompt("Enter your First Subject:");
let sub_2 = prompt(" Enter your Second Subject:");
let sub_3 = prompt(" Enter your Third Subject:");
let sub_1_marks = +prompt(`Enter your marks of ${sub_1}:`);
let sub_2_marks = +prompt(`Enter your marks of ${sub_2}:`);
let sub_3_marks = +prompt(`Enter your marks of ${sub_3}:`);
let totalMarks = 100;
let all_Sub_Total_marks = totalMarks*3;
let obtained_marks = sub_1_marks + sub_2_marks + sub_3_marks;
let percentageOfSub_1 = sub_1_marks/totalMarks*100;
let percentageOfSub_2 = sub_2_marks/totalMarks*100;
let percentageOfSub_3 = sub_3_marks/totalMarks*100;
let total_percentage = obtained_marks/all_Sub_Total_marks*100;
document.write(` <table border = '1px' >
    <th> Subject </th>
    <th> Total Marks </th>
    <th> Obtained Marks </th>
    <th> Percentage </th>
    <tr>
    <td> ${sub_1} </td>
    <td> ${totalMarks} </td>
    <td> ${sub_1_marks} </td>
    <td> ${percentageOfSub_1} % </td>
    </tr>
    <tr>
    <td> ${sub_2} </td>
    <td> ${totalMarks} </td>
    <td> ${sub_2_marks} </td>
    <td> ${percentageOfSub_2} % </td>
    </tr>
    <tr>
    <td> ${sub_3} </td>
     <td> ${totalMarks} </td>
    <td> ${sub_3_marks} </td>
    <td> ${percentageOfSub_3} % </td>
    </tr>
    <tr>
    <td> </td>
    <td> <b> ${all_Sub_Total_marks} </b> </td>
    <td> <b> ${obtained_marks} </b> </td>
    <td> <b> ${total_percentage} % </b> </td>
     </tr>
     </table>
    `)

