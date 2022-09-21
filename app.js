// Changing case
// 1. Write a program that takes user input. Convert and show the input
// in capital letters.

// var a = prompt("Enter a phrase :");
// a=a.toUpperCase();
// alert(a);

// 2. Write a program that takes user input. Convert and show the
// input in title case.

// var a = prompt("Enter a phrase :");
// var b = a.charAt(0).toUpperCase() + a.slice(1);
// alert(b);

// Strings measuring length and extracting parts
// 1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.

// var a =  prompt("enter a phrase :");
// alert(a.length);

// 2. Write a program to display the last character of a user input.

// var a =  prompt("enter a phrase :");
// var b  = a.slice(-1);
// alert(b); 

// Strings finding segments
// 1. Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.

// var a  = "pakistani";
// alert(a.indexOf("n"));


// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.

// var text = prompt("Enter a phrase  :");
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!" || text.charAt(i) === "@") {
//       alert("The user to enter a valid username");
//     }
// }

// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string

// var text = prompt("The quick brown fox jumps over the lazy dog");
// for (var i = 0; i < text.length; i=3) {
//     if (text.charAt(i) === "the") {
//       alert("1");
//     }
// }

// Strings: finding a character at a location
// 1. Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.

// var a= "pakistani";
// alert(a.charAt(3));

// Strings: replacing characters
// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.

// var a = "Hyderabad";
// a=a.slice(5,9);
// alert("Islam"+(a));

// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var a = "Ali and Sami are best friends. They play cricket and football together.";
// for (var i = 0; i < a.length; i=3) {
//       if (text.charAt(i) === "and") {
//         text=text.replace("and","&");
//       }
//       alert(a);
//     }


// Rounding numbers
// 1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a= Number(prompt("Enter a positive integer :"));
// b=Math.round(a);
// alert(b);
// c=Math.floor(a);
// alert(c);
// d=Math.ceil(a);
// alert(d);

// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a= Number(prompt("Enter a negitive integer :"));
// b=Math.round(a);
// alert(b);
// c=Math.floor(a);
// alert(c);
// d=Math.ceil(a);
// alert(d);

// Generating random numbers
// 1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

// var dice = Math.floor(Math.random()*6+1);
// alert(dice);

// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails

// var toss = Math.round(Math.random());
// if (toss==0){
//     alert("heads");
// }else{
//     alert("tails");
// }

// 3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.

// var a = Math.floor(Math.random()*10+1);
// var b = parseInt(prompt("Enter a integer value in range of 1-10 :"));
// if (a===b){
//     alert("congratulate");
// }else{
//     alert("try again");
// }

// Converting strings to integers and decimals
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var a = Number(prompt("enter your weight :"));
// var b = prompt("Enter the unit");
// alert((a)+(b));

// Converting strings to numbers, numbers to strings
// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())

// var a = "472";
// var b = parseInt(a);
// alert(typeof(b));

// 2. Write a program that converts the variable num to string.

// var num = 35.36 ;
// var chr = String(num);
// alert(chr.indexOf("."));
// var b = chr.replace(".","");
// alert(b);

// Remove the dot to display “3536” display in your browser.

// Controlling the length of decimals
// 1. Write a program to control the length of decimals to 2.

// var percentage = 30 / 45 * 100; 
// var decimal = percentage.toFixed(2);
// alert(decimal);

// DATE METHODS
// 1. Write a program that displays current date and time in 
// your browser.

// var toDaydate = new Date();
// // alert(toDaydate);
// var b = toDaydate.getMonth();
// alert(b);

// 2. Write a program that alerts the current month in words. 
// For example December

// var toDaydate = new Date();
// var b = toDaydate.getMonth();
// alert(b);
// if (b==0){
//     alert("january");
// }else if (b==1){
//     alert("febuary");
// }else if (b==2){
//     alert("march");
// }else if (b==3){
//     alert("april");
// }else if (b==4){
//     alert("May");
// }else if (b==5){
//     alert("June");
// }else if (b==6){
//     alert("july");
// }else if (b==7){
//     alert("August");
// }else if (b==8){
//     alert("september");
// }else if (b==9){
//     alert("october");
// }else if (b==10){
//     alert("november");
// }else if (b==1){
//     alert("December");
// }

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

// var toDaydate = new Date();
// var b = toDaydate.getDay();
// alert(b);
// if (b==0){
//     alert("sun");
// }else if (b==1){
//     alert("mon");
// }else if (b==2){
//     alert("tue");
// }else if (b==3){
//     alert("wed");
// }else if (b==4){
//     alert("thur");
// }else if (b==5){
//     alert("fri");
// }else if (b==6){
//     alert("sat");
// }

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var toDaydate = new Date();
// var b = toDaydate.getDay();
// alert(b);
// if (b==0 && b==6){
//     alert("Its Fun day");
// }else{
//     alert("nothing");
// }

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var toDaydate = new Date();
// var b = toDaydate.getDay();
// alert(b);
// if (b<=15){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month");
// }

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var d = new Date();
// var millsSince = d.getTime();
// alert(millsSince);
// var a = parseInt(millsSince/60000);
// alert((a)+" minutes");

// Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”

// var toDaydate = new Date();
// var b = toDaydate.getHours();
// alert(b);
// if (b<=12){
//     alert("its AM");
// }else{
//     alert("its PM");
// }

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var laterDatey = new Date("December 31, 2020");
// alert(laterDatey)

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var laterDatey = new Date("june 18, 2022");
// var newDate = new Date();
// var a = laterDatey.getMinutes();
// var b = newDate.getMinutes();
// var c = b-a;
// alert(c);

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var laterDatey = new Date("june 18, 2022");
// var newDate = new Date();
// var a = laterDatey.getSeconds();
// var b = newDate.getSeconds();
// var c = b-a;
// alert("seconds that elapsed between the reference date and the beginning of 2015 is "+c);

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var todayDate = new Date();
// var specDate = new Date (prompt("enter your date of birth : "));
// console.log(todayDate);
// console.log(specDate);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var todayDate = new Date();
// var specDate = new Date (prompt("enter your date of birth : "));
// var num = currentTime - specDateTime;
// console.log(num);
// var year = parseInt (num/(1000*60*60*24*365))
// console.log(year);
// console.log("your age is "+(year));

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerNumber = "ABC CUSTOMER"
// var currentMonth = "Febrary"
// var noUnit = 410;
// var chargeUnit=16;
// var latePaymentSurcharge=55;
// var amountPayable= noUnit*chargeUnit;
// var grossAmountPayable=amountPayable+latePaymentSurcharge;
// console.log(customerNumber); 
// console.log(currentMonth); 
// console.log(noUnit); 
// console.log(chargeUnit);
// console.log("Net amount payable(within the due date): "+amountPayable);
// console.log(latePaymentSurcharge);
// console.log("Gross Amount Payable (after Due Date): "+grossAmountPayable);

// FUNCTION
// 1. Write a function that displays current date & time in your 
// browser.

// function date(){
// var a = new Date();
// alert(a);
// }
// date()

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// function greeting(){
// var a = prompt("Enter your first name :");
// var b = prompt("Enter your last name :");
// alert((a)+" "+(b)+" welcome to our website")
// }
// greeting()

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// function sum(){
// var a = Number(prompt("Enter your first numnber :"));
// var b = Number(prompt("Enter your last number :"));
// var c = a+b;
// alert("Sum of two numbers are "+c);
// }
// sum()

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function cal(num1,num2,operator){
//     if(operator=="+"){
//      var a = parseInt(num1+num2)
//      alert("The sum of " +(num1)+" and "+(num2)+ " is"+ (a) );
//     }else if(operator=="-"){
//         var a = parseInt(num1-num2)
//         alert("The subtraction of " +(num1)+" and "+(num2)+ " is"+ (a) );
//        }else if(operator=="*"){
//         var a = parseInt(num1*num2)
//         alert("The multiple of " +(num1)+" and "+(num2)+ " is"+ (a) );
//        }else if(operator=="/"){
//         var a = parseInt(num1/num2)
//         alert("The division of " +(num1)+" and "+(num2)+ " is"+ (a) );
//        }
// }
// var num1 = Number(prompt("Enter an integer :"))
// var num2 = Number(prompt("Enter an integer :"))
// var operator = (prompt("Enter an operator +,-,*,/ :"))
// cal(num1,num2,operator)

// 5. Write a function that squares its argument.

// function sqr(num1){
// var c = parseInt(num1*num1);
// alert(c)
// }
// var num1=parseInt(prompt("Enter an integer :"));
// sqr(num1)

// 6. Write a function that computes factorial of a number.

// function factorial(a){
// if (a < 0) {
//     alert('Error! Factorial for negative number does not exist.');
// }else if (a === 0) {
//     alert("The factorial of "+(a)+" is "+ "1.");
// }else {
//     var b = 1;
//     for (i = 1; i <= a; i++) {
//         b *= i;
//     }
//     alert("The factorial of "+(a)+" is "+(b)+" .");
// }
// }
// var a = parseInt(prompt('Enter a positive integer: '));
// factorial(a)


// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

// function counting(a,b){
// for (let i = a; i < b; i++) {
//     console.log(i);
// }
//   }
//   var a = Number(prompt("Enter a integer: "));
// var b = Number(prompt("Enter a integer: "));
// counting(a,b)

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// var c , d 
// function hypotenuse(){
// function square(a,b){
//     var c = a*a;
//     var d = d*d;
// }
// var a = Number(prompt("Enter a base : "));
// var b = Number(prompt("Enter a perpendicular : "));
// square(a,b)

// var x= c+d;
// alert(x)
// }
// hypotenuse()

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(width,height){
//     var a = width*height;
//     alert("The area of rectangle is "+a)
// }
// var width = Number(prompt("Enter the width :"))
// var height = Number(prompt("Enter the height :"))
// area(width,height)

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

// function check_palindrome(string){
//   var a = string.length -1;
//   for( var i = 0 ; i < a/2 ;i++){
//     var x = string[i] ;//forward character
//     var y = string[a-i];//backward character
//     if( x != y){
//       alert("passed string is not palindrome ");
//     }else{
//       alert("passed string is not palindrome ");
//   }
// }
// }
// var string = prompt("enter a string:")
// check_palindrome(string)


// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function uppercase(str){
// var a = str.split(' ');
// var b = [];
//    for(var i = 0; i < a.length; i++){
//     b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
// }
// return b.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){ 
//       longestWord = strSplit[i].length; 
//        }
//     }
//     return longestWord;
//   }
//   console.log(longestWord)
//   findLongestWord("The quick brown fox jumped over the lazy dog");

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// function charCount(a, b) {
//  var c = 0;
//  for (var i = 0; i < a.length; i++) {
//     if (a.charAt(i) == b){
//       c += 1;
//       }
//   }
//   return c;
// }
// console.log(charCount('w3resource.com', 'o'));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
