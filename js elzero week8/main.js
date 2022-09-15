/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

/* let btn = document.querySelector("button")
let input = document.querySelector(".input").value; */

/* function sayHello(input) {
  console.log(`Hello ${input}`);
}

sayHello("ahmed"); */

////////////////////////////////////////////

/*
  Function Advanced Examples
*/

/* function sayHello(input, age) {
  if (age < 20) {
    console.log("App Not For You");
  } else {
    console.log(`Hello ${input} Your age is ${age}`);
  }
}

sayHello("ahmed", 40);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2022 , 2001); */

////////////////////////////////////////////

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

/* function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generateYears(1982, 2022 , 2001); */

////////////////////////////////////////////
/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

/* function sayHello(input, age = " Unkown") {
  //if (age === undefined) {
  //age = "Unknown";
  //}
  //age = age || "Unknown";

  console.log(`Hello ${input} Your age is ${age}`);
}

sayHello("ahmed" , 12); */

////////////////////////////////////////////

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

/* function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return result;
}

console.log(calc(10, 20, 10, 50, 40, 60)); */

////////////////////////////////////////////////
/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

/* function showInfo(uName = "Un", age = "Un", rate = 0, show = "Yes", ...skills) {
  document.write(`<div>`);

  document.write(`<h2>Welcom, ${uName}</h2>`);
  document.write(`<h5>Age: ${age}</h5>`);
  document.write(`<h5>Hour Rate: $${rate}</h5>`);

  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p> Skills:${skills.join(" | ")} </p>`);
    } else {
      document.write(`<p>Skills: No Skills </p>`);
    }
  } else {
    document.write(`<p> Skills is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Ahmed", 45, 20, "no", "HTML", "JS", "CSS", "PHP");
 */

///////////////////////////////////////////////////////////////////////////
//Random Arguments Function Challenge

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

/* function checkStatus(a, b, c) {
  // Your Code Here
  let name, age, status;
  //check the first parameter
  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : typeof a === "boolean"
    ? (status = a)
    : null;
  //check the Second parameter
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : typeof b === "boolean"
    ? (status = b)
    : null;
  //check the Third parameter
  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
    ? (age = c)
    : typeof c === "boolean"
    ? (status = c)
    : null;

  //check status
  status === true
    ? document.write(
        `<h2> Hello ${name}, Your Age Is ${age}, You Are Available For Hire </h2>`
      )
    : document.write(
        `<h2> Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire </h2>`
      );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire" */

///////////////////////////////////////////////////////////////////////////////////

//Assignments

//assignment 1

/* function sayHello(theName, theGender = null) {
  // Your Code Here
  if(theGender === "Male"){
    document.write(`<h2> Hello Mr ${theName} </h2>`)
  }else if(theGender === "Female"){
    document.write(`<h2> Hello Miss ${theName} </h2>`)
  }else{
    document.write(`<h2> Hello ${theName} </h2>`)
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh" */

///////////////////////////////////////////////////////////////////////////////////

//assignment 2

/* function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if(typeof secondNum === "number"){
    switch (operation) {
      case "add":
        console.log(firstNum + secondNum);
        break;
      case "subtract":
        console.log(firstNum - secondNum);
        break;
      case "multiply":
        console.log(firstNum * secondNum);
        break;
      default:
        console.log(firstNum + secondNum);
        break;
    }
    }else{
      console.log("Second Number Not Found")
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600 */

///////////////////////////////////////////////////////////////////////////////////

//assignment 3

/* function ageInTime(theAge) {
  // Your Code Here
  if (theAge < 100 && theAge > 10) {
    let inMo = theAge * 12;
    console.log(inMo);
    let inWe = theAge * 52;
    console.log(inWe);
    let inDa = theAge * 365;
    console.log(inDa);
    let inHou = theAge * 8765;
    console.log(inHou);
    let inSe = theAge * 31556926;
    console.log(inSe);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months */

///////////////////////////////////////////////////////////////////////////////////

//assignment 4

/* function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<div>`);
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value = ${i}>${i}</option>`);
  }
  document.write(`</div>`);
}

createSelectBox(2000, 2050); */

///////////////////////////////////////////////////////////////////////////////////

//assignment 5

/* function multiply(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "string") {
      continue;
    } else {
      result *= Math.floor(nums[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000 */
