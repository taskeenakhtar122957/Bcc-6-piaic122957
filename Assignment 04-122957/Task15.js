var age = prompt("enter your age");
console.log("your age is: "+ age);
var today = new Date();
var year = today.getFullYear();
var birthyear = year - age;
console.log("your birthyear is " + birthyear);