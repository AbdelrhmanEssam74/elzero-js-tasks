/*
..Number 
..Double Precisition
..Syntactic Sugar "_"
..e
..**
..With Decimal
..Number + BigInt
..Number Min Value
..Number Max Value
*/
/* console.log(1000000);
console.log(1e6); //this will prist the number befor e and print 0 equal the number aftr e
console.log(10 ** 6);//this mean 10 * 10 *10 *10 *10 *10  */

/* console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1354132156); */

///////////////////////////////////////////////////////////////////////////////////
/*
Number Methods
  - Two Dots to call a method
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger()[ES6]
  - isNaN()[ES6]
*/
/* console.log((100).toString());
console.log((100..toString()));
console.log((100.10.toString()));

console.log(101.55455.toFixed(4));

console.log(parseInt('100 abdo'));
console.log(parseInt('abdo 100 abdo'));
console.log(parseInt(' 100 '));

console.log(parseFloat('100.50 abdo'));

console.log(Number.isInteger('100'));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN('abdo'/20));//chick its is NaN or not */

///////////////////////////////////////////////////////////////////////////////////
/*
Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - pow()
  - random()
  - trunc()[ES6]
*/

/* console.log(Math.round(99.2));//99
console.log(Math.round(99.5));//100

console.log(Math.ceil(99.2));//100

console.log(Math.floor(99.9));//99

console.log(Math.min(10,26,10,4,84,98,14,19));//4
console.log(Math.max(10,26,10,450,804,98,14,19));//804

console.log(Math.pow(2,4));//4*4
console.log(Math.pow(3,6));//6*6*6

console.log(Math.random());//return a random value

console.log(Math.trunc(99.5));//return true value */

///////////////////////////////////////////////////////////////////////////////////
/*
  Number Challenge
*/
/* let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
console.log(parseInt(Math.min(1_00, 2_00.5, 1e2, 2.4)));

console.log((Math.pow(a,parseInt(d))));

console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));

console.log((parseInt(b)/Math.ceil(d)).toFixed(2));//66.67

console.log((parseInt(b)/Math.ceil(d)).toFixed(0));//67 */

///////////////////////////////////////////////////////////////////////////////////

//23 to 26
/*
Assignments
*/
//1
console.log(1e5);
console.log(Math.pow(10, 5));
console.log(Math.ceil(99999.9));
console.log(Math.floor(100000.9));
console.log(Math.trunc(100000.9));
console.log(+(100000).toFixed());
console.log(10 * 10 * 10 * 10 * 10);
console.log(10 ** 5);
console.log(parseInt(100000.1));
console.log(Math.max(100000, 25, 65, 48, 79));
console.log(Math.min(100000, 100005, 100006, 100008, 100009));

//2
console.log(Number.MAX_SAFE_INTEGER);

//3
console.log(Number.MAX_SAFE_INTEGER.toString().length);

//4
let myVar = "100.56789 Views";
console.log(+parseInt(myVar));//100
console.log(+parseFloat(myVar).toFixed(2));//100.57

//5
let num = 10;
console.log(Number.isInteger(num)+ +true);//2

//6
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10

//7
console.log(Math.floor(Math.random() * (4 - 0 + 1) + 0)); // Output => 0 || 1 || 2 || 3 || 
/*
    The Main Equation
    Math.floor(Math.random() * (max - min + 1) + min)
    -- Min and Max will be included
*/

///////////////////////////////////////////////////////////////////////////////////
/*
  String Methods Part 1
  - Access With Index
  - Access With charAt()
  - lenght()
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/
/*
 let theName = "  Abdo  ";
console.log(theName);//Ahmed
console.log(theName[2]);//A

console.log(theName.charAt(3));//b

console.log(theName.length);

console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
console.log(theName.trim().charAt(2).toUpperCase());
let theList = [1, 2, 3, 4, 5]; */

///////////////////////////////////////////////////////////////////////////////////
/*
  String Methods Part 2
  - indexOf(Value [Mand, Start [Opt] 0])
  - lastIndexof(Value [Mand], Start [Opt] length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times [ES6])
  split(separator [opt], limit [opt])
*/

/* let a = "Abdelrhman Web Developer";
console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 12));

console.log(a.lastIndexOf("Web"));

console.log(a.indexOf("e")); //3
console.log(a.lastIndexOf("e")); //22

console.log(a.slice(7, 10)); //man , not include the end
console.log(a.slice(3, 10)); //elrhman
console.log(a.slice(0, 1));

console.log(a.slice(-9, -3)); //Develo

console.log(a.split()); //return as array
console.log(a.split("")); //Returns each character individually as an array include the space
console.log(a.split(" ")); //Return each word invidually as an array beccouse split(" ") will cut the space between each ward and another
console.log(a.split("", 10)); // the 10 is a limet to cut and it is index of an array
let b = a.split("", 10);
console.log(b[0]); //A

let c = "01028492181";
let userNum =c.split("")
console.log(userNum.slice(1,3));
 */
///////////////////////////////////////////////////////////////////////////////////

/*
  String Methods Part 3
  - substring(start [mand], end [opt] not including end)
  --- start > end will swap
  --- start < 0 it start from 0
  --- use length to get last characters
  - substr(start [Mand],characters to extract)
  --- start >= lenght =""
  --- negative start form end
  - includes(value [mand],start [opt], default 0)[ES6]
  - endswith(value [mand],length [opt] default full length)[ES6]
*/

/* let a = "Abdo Web Develorper";

console.log(a.length);

console.log(a.substring(4, 8)); //cut a part of the value
console.log(a.substring(8, 4)); //(8,4) will swap to (4,8)
console.log(a.substring(-10, 4)); //0 - 4
console.log(a.substring(18)); //r
console.log(a.substring(a.length - 1)); //r
console.log(a.substring(a.length - 3, a.length - 7)); //elor

console.log(a.substr(0, 4)); //Abdo
console.log(a.substr(19)); //""
console.log(a.substr(-10)); //Develorper
console.log(a.substr(-9, 3)); //eve
console.log(a.substr(-14, 3)); //web

console.log(a.includes("Web")); //ask if the word include this..if yes it will return true else return false
console.log(a.includes("Web")); //true
console.log(a.includes("Web")); //true
console.log(a.includes("Wb")); //false

console.log(a.startsWith("A")); //true
console.log(a.startsWith("a")); //false
console.log(a.startsWith("A", 2)); //false
console.log(a.startsWith("d", 2)); //true

//length not index
console.log(a.endsWith("do", 4)); //true */

/*
  String Challenge
  all Solutions Must Be In One Chain
  You Can Use Concatenate
*/

/* let a = "Elzero Web School";

//Includee this methods in your in your solution [slice , charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); //HHHHHHHH

console.log(a.split(" ", 1)); //array Elzero

console.log(a.substr(0, 6) + " " + a.substr(11)); //Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`); //Elzero School

console.log(
  `${a.charAt(0).toLowerCase()}${a.substr(1, 15).toUpperCase()}${a
    .charAt(16)
    .toLowerCase()}`
); //eLZERO WEB SCHOOl
console.log(
  `${a.charAt(0).toLowerCase()}${a.slice(1 , -1).toUpperCase()}${a
    .charAt(a.length - 1)
    .toLowerCase()}`
); //eLZERO WEB SCHOOl */

/*
Assignments
*/
//27 to 30
//1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee

//2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith(`${letterE.toUpperCase()}`)); // True
console.log(word.endsWith(`${letterO.toLowerCase()}`)); // True
