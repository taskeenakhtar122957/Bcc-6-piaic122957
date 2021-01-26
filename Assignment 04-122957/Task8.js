var n = prompt("enter a number");
var m = n.split(" ");
console.log(m);
var int = [0,1,2,3,4,5,6,7,8,9];
var ones =["one","two","three","four","five","six","seven","eight","nine"];
var tens =["ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
var nxt =["hundred","thousand"];
if(m.length===1){//if input will be one digit the if loop should run
    for(var i = 0; i<int.length; i++){//ten times
         if(m[0]===int[i]){//checking input against every element of int array
console.log(ones[i]);
         }
    }
}else{
    console.log("not found");
}