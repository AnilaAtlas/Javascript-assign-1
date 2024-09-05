// 1. Declare an empty array using JS literal notation to store student names in future.
let students = ``;

// 2. Declare an empty array using JS object notation to store student names in future.
let obj = {};

//3. Declare and initialize a strings array.
let str = ["naina", "laptop", "juices"];

//4. Declare and initialize a numbers array.
let num = [1, 2, 3, 4, 5];

//5. Declare and initialize a boolean array.
let boolean_Array = [true, false];

//6. Declare and initialize a mixed array.
let mixed_Array = ["Anila", 1, true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.
let edu_qualifications = [
  `<b> Qualifications: </b> <br> <br> 1)SSC <br> 2)HSC <br> 3)BCS <br> 4)BS <br> 5)B.Com <br> 6)MS <br> 7)M.Phil. <br> 8) Phd <br> <br>`,
];
document.write(edu_qualifications);

//  8. Write a program to store 3 student names in an array.Takeanother array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students.
var student = ["Sadaf", "Anila", "Iqra"];
var score = [400, 450, 430];
var totalMarks = 500;
document.write(
  "Score of <b> ",
  student[0],
  "</b> is <b>",
  score[0],
  "</b> and percentage is <b>",
  (score[0] / totalMarks) * 100,
  "% </b><br>"
);
document.write(
  "Score of <b> ",
  student[1],
  "</b> is <b>",
  score[1],
  "</b> and percentage is <b>",
  (score[1] / totalMarks) * 100,
  "% </b><br>"
);
document.write(
  "Score of <b> ",
  student[2],
  "</b> is <b>",
  score[2],
  "</b> and percentage is <b>",
  (score[2] / totalMarks) * 100,
  "% </b><br><br>"
);

//9.
//a.
let colour = ["Black", "Green", "Blue", "Red", "Pink", "White "];
let user = prompt("What color do You want to add in the Beginning?");
colour.unshift(user);
document.write(`${colour} <br>`);

//b.
let user_value = prompt("What color do You want to add in the end?");
colour.push(user_value);
document.write(`${colour} <br>`);

//c.
colour.push("Purple", "Orange");
document.write(`${colour} <br>`);

//d.
colour.shift(0);
document.write(`${colour} <br>`);

//e.
colour.pop();
document.write(`${colour} <br>`);

//f.
let user_color = +prompt("At which index do you want to add a colour?");
let colour_Name = prompt("Which colour do you want to add?");
colour.splice(user_color, 0, colour_Name);
document.write(`${colour} <br>`);

//g.
let del_Colour = +prompt("In which index do you wants to delete a color?");
let del_Number = +prompt("How many colors do you want to delete?");
colour.splice(del_Colour, del_Number);
document.write(`${colour} <br> <br> <br>`);

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort
//method.
let stud_scores = ["320", "220", "480", "180"];
document.write(`Student Scores:<b> ${stud_scores} </b> <br>`);
stud_scores.sort();
document.write(
  `Ordered Scores of Students: <b> ${stud_scores} </b> <br><br><br>`
);

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
let cities = [
  "karachi",
  "islamabad",
  "lahore",
  "peshawar",
  "quetta",
  "hyderabad",
];
document.write(`Cities: <b> ${cities} </b> <br>`);

let selectedCities = cities.splice(3, 5);
document.write(`Selected cities: <b> ${selectedCities} </b> <br><br><br>`);

//12.
let arr = ["This", "is", "my", "cat"];
document.write(`<b> Array: </b><br> ${arr} <br>`);
let _str = arr.join(" ");
document.write(`<b> String:</b><br> ${_str} <br><br><br>`);

//13.
let fifo = ["keyboard", "mouse", "printer", "monitor"];
let devices = fifo.slice();
document.write(`<b>Devices:</b> <br> ${devices} <br><br>`);

//14
let lifo = ["keyboard", "mouse", "printer", "monitor"];
let returns = lifo.reverse();
document.write(`<b>Devices:</b> <br> ${returns} <br><br>`);

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your browser using document.write() method:
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`<label> Phone Manufacturers: </label>
    <select> 
    <option> ${manufacturers[0]} </option>
    <option> ${manufacturers[1]} </option>
    <option> ${manufacturers[2]} </option>
    <option> ${manufacturers[3]} </option>
    <option> ${manufacturers[4]} </option>
    <option> ${manufacturers[5]} </option>
    </select>`);
