var today = new Date();
document.write("Current date: "+today+"<br>");
var millisecond = today.getTime("jan 1 1970")
document.write("Elapsed milliseconds since jan 1, 1970: "+millisecond+"<br>");
var minutes = new Date().getMinutes();
var diff = millisecond-minutes;
var diffmint = diff/(1000*60*60);
document.write("Elapsed minutes since jan 1, 1970: "+diffmint);