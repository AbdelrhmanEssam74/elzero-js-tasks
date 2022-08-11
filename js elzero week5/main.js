/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than or Equal

  - < Smaller Than
  - <= Samaller Than or Equal
*/

/* console.log(10 == "10"); //compare value only
console.log(10 != "10"); //compare value only

console.log(10 === "10"); //compare value and data type
console.log(10 !== "10"); //compare value and data type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log("ABCD" === "DCBA"); //false
console.log(typeof "ABCD" === typeof "DCBA"); //true */
//////////////////////////////////////////////////////////////

/*
  Logical Operator
  - ! Not
  - && And
  - || Or
*/
/* console.log(true);
console.log(!true);

console.log(20 == "20" && 15 > 20); //false
console.log(20 == "20" || 15 > 20); //true */

/*
Assignments
[from 31 to 32]
*/
//1
//Put the appropriate mark from the Operators you learned instead of the question mark so that the result is True

//2
//You have two variables with two different numbers, and you need to use the Operators you learned with the variables to show the result True
/*


3
You have three variables with different numbers, and you need to use the Operators you learned instead of the question mark to show the result True



//////////////////////////////////////////////////////////////

/*
  Control Flow
  - if
  - else if
  - else

  if (condition){
    Code
  }
*/

/* let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";

if (discount) {
  price -= discountAmount;
} else if (country === "Egypt") {
  price -= 40;
} else {
  price -= 10;
}

console.log(price); */

//////////////////////////////////////////////////////////////

/*
  Nested if
*/
/* let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount) {
  price -= discountAmount;
} else if (country === "Egypt") {
  price -= discountAmount + 10;
  if (student) {
    price -= discountAmount + 300;
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price); */

//////////////////////////////////////////////////////////////

/*
  conditional (ternary) Operator
*/

/* let theName = "Mona";
let theGender = "Famale";
let theAge = 50;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}
//  Condition ? if ture : if False

let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result);

document.write(`Hello ${result}: ${theName}`);

theAge < 20
  ? console.log("Not Acsses")
  : theAge > 20 && theAge < 60
  ? console.log("Acsses")
  : console.log("go die"); */

//////////////////////////////////////////////////////////////

/*
   Logical or ||
   -- Null + Undefined + Any Falsy Value
   Nullish Coalescing Operator ??
    -- Null + Undefined
  */

/*console.log(Boolean(50));
console.log(Boolean(-50));
console.log(Boolean(null));
console.log(Boolean(""));

let price = 0;
console.log(`the price = ${price || 100}`);
//nullish
console.log(`the price = ${price ?? 100}`);*/

//////////////////////////////////////////////////////////////

//Challenge 1
/* let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unkhown");
} */

//onditional (ternary) Operator

/* a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unkhown"); */

//Challenge 2
/* let st = "Elzero Web School";

if (typeof st === typeof "34") {
  console.log("Good");
}

if (st.charAt(st.search("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if ( typeof(st) === typeof("number")) {
  console.log("Good");
}


if ( st.slice(0 , 6)+st.slice(0,6) === "ElzeroElzero") {
  console.log("Good");
} */

//////////////////////////////////////////////////////////////

/*
  switch statment
  switch(expression){
    case 1:
      code block
      break;
    case 2:
      code block
      break;
    defult:
      code block
  }

   - Defult Ordering
   - Multiple Match
   - ===



*/

/* var i ;
for (i = 0 ; i <= 6 ; i++) {
switch(i){
case 0:
  console.log("Sat")
  break;
case 1:
  console.log("Sun")
  break;
case 2:
  console.log("Mon")
  break;
case 3:
  console.log("tue")
  break;
case 4:
  console.log("We")
  break;
case 5:
  console.log("Th")
  break;
case 6:
  console.log("Fri")
  break;
default:
  console.log("Unknown day")


}
  
} */

//////////////////////////////////////////////////////////////

// Switch And If Condition Challenge
/* let job = "Manager";
let salary = 0; */
/* if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
} */

/* switch (job) {
  case "Developer":
    salary = 8000;
    console.log(salary);
    break;
  case "IT" || "Support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer" || "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
} */

//////////////////////////////////////////////////////////////
//Assignments

//From 31 To 32
//Assignment 1
/* console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 == 100 || 10 != 20); // true
console.log(-10 == "-10"); // true
console.log( -50 != +"-40"); // true
console.log(- 10 <= -"-40"); // true
console.log(- "10" <= 10); // true
console.log(! (20 == false)); // true */

//Assignment 2
/* let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(typeof num1 == typeof num2); // true
console.log(num2 != num1); // true
console.log(-num2 < num1); // true
console.log(!(num1 == num2)); // true
console.log(num1.toString == num2.toString); // true */

//Assignment 3
/* let a = 20;
let b = 30;
let c = 10;

console.log(a <= b && a >= c || a == b); // true
console.log(a != b > a > c); // true
console.log(!(a == b) && !(a > b) && !(a < c) && !(a == c)); // true */

//////////////////////////////////////////////////////////////
//Assignments

//From 33  To 37
//Assignment 1

// Test Case 1
//let num = 9; // "009"

// Test Case 2
//let num = 20; // "020"

// Test Case 3
//let num = 110; // "110"

/* num < 10
  ? console.log(`00${num}`)
  : 100 > num && num > 10
  ? console.log(`0${num}`)
  : console.log(`${num}`); */

//Assignment 2

/* let num1 = 10;
let str = "10";
let str2 = "20";
if (num1 == str) {
  console.log(`{num1} Is The Same Value As {str}`);
}

if (num1 !== str) {
  console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
}

if (num1 != str2) {
  console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`);
}
if (str !== str2 ) {
  console.log(`{str} Is The Same Type As {str2} But Not The Same Value`)
} */

//Assignment 3

/* let num1 = 10;
let num2 = 30;
let num3 = "30";
if (num3 >= num1 && num3 !== num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
} else if (num3 >= num1 && num3 == num2) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} else if (num3 !== num1 && typeof num3 != typeof num2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
} */

//Assignment 4

// Edit What You Want Here

/* let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33; */

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

/*if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

 if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
} */

//////////////////////////////////////////////////////////////
//Assignments

//From 37  To 39
//Assignment 1

/* let day = "   saturday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case ("Monday", "Thursday"):
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
} */



