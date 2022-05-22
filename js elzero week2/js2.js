/* 
...Data types intro
......String
......Number
......Array => Object
......Object => Object
......boolean
......undefined
*/

/* console.log("abdo")
//String
console.log(typeof ("abdo"))
//Number
console.log(typeof 5000)
//Array => Object
console.log(typeof [15 , 7, 25])
//Object => Object
console.log(typeof ["ab" , "cd" , "ef"]) 
//boolean
console.log(typeof true)
console.log(typeof false)
//undefined
console.log(typeof undefined) */

////////////////////////////////////////////////////////////////

/*
  ..Variables Intro
  ....what is the cariable ? 
  ....why we use variable ?
  ....declare a variable and use
  ....synatax (.keyword.variable name.assignment operator.value)
  ....variable without var
  ....multiple variable in the sane line
  ....id and global variable
  ....loosely typed vs strongly typed
*/

/* var user = "abdo";
var age = "19";
console.log(user);
console.log(age);
console.log(hello);
hello.innerHTML = "hi"; */

////////////////////////////////////////////////////////////////

/*
...idntifiers
.....name coventions and rules
.....reserved words
*/
/* var user = "abdo"

console.log(user) */

////////////////////////////////////////////////////////////////

/*
...Var
.....Redeclare(yes)
.....Acess Befor Declare(undefined)
.....Variable Scope Deama[Added to window] ()
.....Block or function scope


...Let
.....Redeclare(yes)
.....Acess Befor Declare(Error)
.....Variable Scope Deama[Added to window] ()
.....Block or function scope


...Const
.....Redeclare(yes)
.....Acess Befor Declare(Error)
.....Variable Scope Deama[Added to window] ()
.....Block or function scope

*/

////////////////////////////////////////////////////////////////

/* var a = 3;
var b = 7;
console.log(a * b); */

/* var a = 1;
var a = 2;
console.log(a); */

//Not avalabe Declare
/* let b = 1;
let b = 2;
console.log(b); */

//Not avalabe Declare
/* const c = 1;
const c = 2;
console.log(c); */
/*
---------------------------
  ----------------------
*/
////////////////////////////////////////////////////////////////

/*
..String suntax + Character Escape sequences
  \Escape + line continue
  \n
  */
/* 
console.log('"\\abdo"');
console.log("abdo  \
web  \
  school");
console.log("abdo \nweb \nschool");
 */

////////////////////////////////////////////////////////////////
/*
..Concatenation سلسلة
*/

/* let a = "we love";
let b = "women";
document.write(a + " " + b);
console.log(a, b); */

////////////////////////////////////////////////////////////////
/*
..Template literals(Template String)
*/
/* let a = "we love Alahly";
let b = "we love Elzmalk";
let c = "we love Barcelona";
let d = "we love Chelsea";
console.log(a + "\n" + '"' + b + '"' + "\n" + c + "\n" + d); */
//using E6 in concatienation
//all this codes are give the same result but E6 is modern and easy
/* console.log(`"${a}"
${b} 
${c}
${d}`); */
//Ex Concatenation in E6
//challenge
/* const title = "Abdo";
const p = "study computer Science ";
const date = '24/12'
const site = `
//<div class='card'>
//<div>
//<h1>${title}</h1>
//<p>${p}</p>
//<span>the date is ${date}</sapn>
//</div>
//</div>`;
//document.write(site.repeat(4)) */

/*
Assignments
*/
//1
let number1 = 10;
let number2 = 20;
console.log(number1 + "" + number2);
console.log(typeof (number1 + "" + number2));
console.log(`${number1}${number2}`);
console.log(typeof `${number1}${number2}`);
console.log(number1 + "\n" + number2);
console.log(`${number1}
${number2}`);
//////////////////
//second in HTML file.
//////////////////
//3
console.log(
  '\'I`In \n\
\\\\\n\
Love \\\\ """ \'\'\'\n\
++ With ++\n\
\\"""\\"""\n\
""JavaScript""``'
);
// or
console.log(` \`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""\`\`\``);
// 4
let a = 10;
let b = 20;
console.log(`_${a + 11}_${b}${b + 1}_${b}${b + 1}_${b}${b + 1}_${b}_`);

////////////////////////////////////////////////////////////////

