var a = parseFloat(prompt("Enter a number"));
var b = parseInt(prompt("how many decimal places you want to round"));
var res =a.toFixed(b);
document.write("number before rounding off: "+a+"<br>");
document.write("number after rounding off: "+ res);