var today = new Date();
console.log("Current Date: "+today);
var hrs = today.getHours(); 
var nhrs = today.setHours(--hrs);
console.log("1 hour ago, it was "+ today);