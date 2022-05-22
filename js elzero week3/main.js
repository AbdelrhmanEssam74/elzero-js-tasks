/*
..Arithmetic Operators
..+.Addition
..-.Sebtraction
..-.Multiplication
../.Division
..**.Exponotiation. (ES7)
..%.Moduluss 
..++.Increment [pre/post]
..--.Decrement [pre/post]
*/
/* let p = "hi";
console.log(10 + 20);
console.log(10 + "abdo"); //this will give us a string not number

console.log(10 - 30);
console.log(10 - "abdo"); //this wil give us a NaN value

console.log(10 * 20);

console.log(10 / 20);

console.log(2 ** 4);

console.log(10 % 2);
console.log(101 % 4); */

////////////////////////////////////////////////////////////////

/*
..+.Unary Plus [Return Number If Its Not Number]
..-.Unary Negation [Return Number If Its Not Number + negates it]
..Tests
..Normal Number
..String Number
..String Negation Number
..Float
..Hexandecimal Number Systen => 0xff
..null
..false
..true
*/
//let p = "hi";
/*console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"abdo");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true); */

////////////////////////////////////////////////////////////////

/*
..Type Coercion (Type Casting)
..+
..-
.."" - 2 
..false - true
*/
/* let a = "10";
let b = 20;
let c = true;

console.log(a + b);
console.log(+a + b);
console.log(b + c);
console.log(a + b + c);
console.log(+a + b + c); */

////////////////////////////////////////////////////////////////

/*
Assignment Operators
*/
/* let a = 10;
a += 20; //a = 10 + 20
a -= 50; //a = 30 - 50
console.log(a); */

////////////////////////////////////////////////////////////////

/*
challenge1
*/
/* let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + a - b + +c++ - a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/* 
..[++a]
..value:11
..Explain:the preincrement increase the value 1 and print it
..[+]
..Explain:this a normal add operator

..[+b++]
..value:20 //as a number
..Explain:the unary plus wil return the value as a number not string and the postincrement will increave the value 1 but not print the new value of variable b

..[+c++]
..value:81
..Explain:the unary plus is useless here becouse the value is oredy number , the postincrement will add 1 to the value and print the new value
*/

/*
challenge2
*/
/* let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d*+e); // 2000
console.log(-d + ++g * ++e + ++f); // 173 */
/////////////////////////////////////////////////////////////////////////////////////////

/*
Assignments:form 18 to 22
*/
//1
// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400);// 0

//2
let num1 = 3;
console.log(++num1 + true + true); //6
console.log(num1 + --num1 - true );   //6
console.log(num1++ + --num1);  //6
console.log(num1 + num1);  //6
console.log(num1++ + num1 - true  );  //6
console.log(--num1 + ++num1 - true); //6
//3
let num2 = "10";
 console.log(+num2 + +num2 );//20
console.log(+num2*+num2 / +num2 + +num2);//20
console.log(+num2++ + +--num2);//20
console.log(+num2 - -num2);//20
