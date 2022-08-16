/*
  Arrays
   - Create Arrays[Two Methods]new Array()+[]
   - Access Arrays Elements
   - Nested Arrays
   - Change Arrays Elements
   - Check For Array Array.isArray(arr);
*/

/* let myFriends = ["Ahmed", "Mohamed", "Sayed"];
console.log(`Hello ${myFriends[0]}`);
console.log(`Hello  ${myFriends[2]}`);
console.log(`Hello  ${myFriends[1][2]}`); */

//   - Nested Arrays
/* let myFriends2 = ["Ahmed", "Mohamed", "Sayed", ["Mrwan", "Ali"]];
console.log(`Hello ${myFriends2[3][0]}`);
console.log(`Hello ${myFriends2[3][1][0]}`);
 */
//   - Change Arrays Elements
/* let myFriends2 = ["Ahmed", "Mohamed", "Sayed", ["Mrwan", "Ali"]];

console.log(myFriends2);
myFriends2[1] = "Gamal";
console.log(myFriends2);
myFriends2[3] = ["Samed", "Amir"];
console.log(myFriends2); */

//   - Check For Array Array.isArray(arr);

/* let myFriends2 = ["Ahmed", "Mohamed", "Sayed", ["Mrwan", "Ali"]];

console.log(Array.isArray(myFriends2)) */

/////////////////////////////////////////////////////////////////////

/*  Arrays Methods
    - Length
*/
/* let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "osama"];
myFriends[myFriends.length  - 1] = "Tamer";

myFriends.length = 3

console.log(myFriends); */

/////////////////////////////////////////////////////////////////////
/*
  Arrays Methods[Adding And Removing]
  - unshift("","")Add Element To The First
  - push("","")Add Element To The End
  - shift()Remove First Element From Array
  - pop()Remove Last Element From Array
*/
/* let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends);

myFriends.unshift("osama", "ali");

console.log(myFriends);

myFriends.push("fatma", "nada");

console.log(myFriends);

var first = [myFriends.shift()];
console.log(first);
console.log(myFriends);

console.log(myFriends);

var Last = [myFriends.pop()];
console.log(Last);
console.log(myFriends);
 */

//////////////////////////////////////////////////////////////

/*
  Arrays Methods[Search]
  - indexOf(Search Element,From Index[Opt])
. -.lastIndexOf(Search Element,From Index[Opt])
  - includes(valueToFind,from Index[Opt])[ES7]
*/
/* let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", " Ola", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed", 5));

console.log(myFriends.includes("Ahmed"));

if (myFriends.lastIndexOf("Osama") === -1) {
  document.write("Not found");
}
 */

/////////////////////////////////////////////////////////////////////

/*
  Arrays Methods[Slicing]
 - slice(Start[Opt],End[Opt]Not Including-End)
 --- slice()=>All Array
 --- If Start Is Undefined=>0
 --- Negative Count From End
 --- If End Is Undefined ||>Indexes=>Slice To The End Array.length
 ---  Return New Array
 - splice(Start[Mand],DeleteCount[Opt][0No Remove],The Items To Add[Opt])
 --- If Negative=>Start From The End
    */
/* let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(2, -1));
console.log(myFriends);

myFriends.splice(1, 2, "abod", "fatma");

console.log(myFriends);
 */

///////////////////////////////////////////////////////

/*
  Arrays Methods[Joining]
  - concat(array,array)=>ReturnANew Array
  - join(Separator)
*/
/* let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFrinds = myFriends.concat(myNewFriends , schoolFriends)

console.log(allFrinds);

console.log(allFrinds.join(" | ")) */

///////////////////////////////////////////////////////////

//- Array Challenge

/* let zero=0;

let counter=3;

let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

// Write Code Here
console.log(my.reverse().slice(--counter));//["Osama","Elham","Mazero","Ahmed"]


console.log(my.slice(++counter , true+ ++ counter));//["Elham","Mazero"]

my.splice(0 , 0 , "Elzero");
console.log(my[0])//-"Elzero"

console.log(my[zero].slice(counter ,++counter)+my[zero].slice(counter).toUpperCase());//"rO" */

///////////////////////////////////////////////////////////////////////////////
//Assignments

//Assignment1
/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

let zero = myFriends.indexOf("Ahmed");
let one = myFriends.indexOf("Elham");
// Method 1
console.log(myFriends.slice(zero, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.reverse();
console.log(myFriends.slice(one).reverse()); // ["Ahmed", "Elham", "Osama"];
 */

//Assignment2

/* let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"] */

//Assignment3

/* let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrTwo.slice(2).concat(arrOne.reverse()).concat(arrTwo.slice(0, 2).reverse());
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"] */

////////////////////////////////////////////////////////

//Assignment4
/* let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
for (let i = 0; i <= haystack.length; i++) {
  if (needle === haystack[i]) {
    console.log("Found");
    break;
  }
}

let found = haystack.includes(needle);

if (found) {
  console.log("Found");
}

let found2 = haystack.filter((element) => {
  if (element.includes(needle)) {
    console.log("Found");
  }
}); */

//////////////////////////////////////////////////////
//Assignment5
/* let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let two = arr2.indexOf("F");
let three = arr2.indexOf("Y");
allArrs =arr2[two].toLowerCase() + arr1[two].toLowerCase() + arr2[three].toLowerCase();
console.log(allArrs); // fxy */
