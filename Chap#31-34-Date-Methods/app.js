/*1. Write a program that displays current date and time in
your browser.*/

var todayDate=new Date();
console.log(todayDate);

/*2. Write a program that alerts the current month in words.
For example December. */

var months=["jan","feb","march","april","may","june","july","Aug","sep","oct","nov","dec"];
var currentMonth=todayDate.getMonth();
console.log("Current month : " + months[currentMonth]);

/*3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */

var arrayDays=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday","Sunday"];
var todayIndexNum=todayDate.getDay();
var todayDayName=arrayDays[todayIndexNum];
var shortFormOfDay=todayDayName.slice(0,3);
console.log("Today is " + shortFormOfDay);

/*4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */
var day=todayDate.getDay();
if(day===0 || day===6){
    console.log("It's fun day");
}

/*5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */
var todayDate=new Date();
if(todayDate.getDate() < 16){
    console.log("First Fifteen Days of the month");
}
else{
    console.log("Last days of the month");
}

/*6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

var today=new Date();
var millisec=today.getTime();
var mins=millisec/(1000*60*60);
console.log("Current Date : " + today);
console.log("Elapsed millisecond since 1 jan 1970 : " + millisec);
console.log("Elapsed minutes since 1 jan 1970 : " + mins);

/*7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

var now = new Date();
var hours = now.getHours();
    if (hours < 12) {
        console.log("It's AM");
    } else {
        console.log("It's PM");
    }

/*8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

var laterDate=new Date("12 31 2020");
console.log("Later date : " + laterDate);

/*9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */

var firstRamadan=new Date("3 10 2024");
var today=new Date();
var daysPast=Math.floor((today.getTime()-firstRamadan.getTime())/(1000*60*60*24));
console.log(daysPast + " days have passed since 1st Ramadan 2024 ");

/* 10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.*/

var referenceDate=new Date("12 5 2015");
var beginningDate=new Date("1 1 2015");
var ellapsedSeconds=Math.round((referenceDate.getTime()-beginningDate.getTime())/(1000*60));
console.log("On reference date " + referenceDate + " , " + ellapsedSeconds + " has been passed since beginning of 2015");

/*11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
console.log("Current Date: " + currentDate);
console.log("1 hour ago it was : " + new Date())

/* 12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back?*/

var currentDate = new Date();
console.log("Current date : " + currentDate)
currentDate.setFullYear(currentDate.getFullYear() - 100);
console.log("100 years back it was: " + currentDate);

/*13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */

var age = +prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
console.log("your age is : " + age);
var birthYear = currentYear - age;
console.log("Your Birth year is " + birthYear);

/*14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,

Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

var customerName=prompt("Enter Customer Name : ");
var currentmonth=prompt("Enter Current month : ");
var numberOfUnits=+prompt("Enter Number of units : ");
var ChargePerUnits=+prompt("Enter Charge per unit : ");
var netAmountPayable=numberOfUnits*ChargePerUnits;
var latePaymentsurcharge=+prompt("Enter Late payment surcharge : ");
var grossAmountPayable=netAmountPayable+latePaymentsurcharge;
console.log("K-Electric bill");
console.log("Customer name : " + customerName);
console.log("Month : " + currentmonth);
console.log("Number of Units : " + numberOfUnits);
console.log("Charges per unit : " + ChargePerUnits);
console.log("Net amount payable (within due date) : " + netAmountPayable);
console.log("Late payment surcharge : " +latePaymentsurcharge)
console.log("Gross amount payable (after due date) " + grossAmountPayable);