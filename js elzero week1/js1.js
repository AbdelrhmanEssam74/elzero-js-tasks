//تغيير style عنصر
//document.querySelector("h1").style.color = "red";
//عرض رسالة للمستخدم
//window.alert("hello my friend");
// كتابة عنصر داخل الصفحه
//document.write("<h1>fuck people</h1>")
//directive %c
//عرض رسالة في قائمة log
//console.log("loge")
//console.error("error")
//console.table(["abdo" , "essam", "roshdy"])
//console.log("hello %cmy %cfriend", "color: blue; font-size:30px;", "color: red; font-size:40px;")
// API= aplecation programming interface
/* 
..EC6 = EcmaScript
js Assignment 2 challenge 2
*/
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";

console.log(
  " %cElzero %cWeb %cSchool",
  "color: red; font-size:40px;",
  "color: green; font-size:40px; font-weight:bold; ",
  "background-color:blue ; font-size:40px; color:white"
);

console.group("Group1");
console.log("message one");
console.log("message two");
console.group("Child Group");
console.log("message one");
console.log("message two");
console.group("Grand Child Group");
console.log("message one");
console.log("message two");
console.groupEnd("");
console.groupEnd("");
console.groupEnd("");
console.group("Group2");
console.log("message one");
console.log("message two");

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

/* console.log("Iam In Console");
document.write("Iam In Page") */
//https://codepen.io/collection/dbPoMv
