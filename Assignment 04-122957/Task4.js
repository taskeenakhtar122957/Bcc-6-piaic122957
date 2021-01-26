var password = prompt("Enter your password(Character Codes A-Z,a-z,0-9)");
const checkPassword2 = (pass) => {
let listDigit = ["0","1","2","3","4","5","6","7","8","9","0"];
let listAz = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G",
"H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let pass2 = pass.split("");
if (pass2) {
    for(var a=0; a<=pass2.length2; a++){
if (listAz.includes(pass2[a])) {
return true }
else if(listDigit.includes(pass2[a])){
return true }
else{ alert('Password should contains both Alohabets and Digits.');
}
}
}
let firstChar = pass.charAt(0);
if (!listAz.includes(firstChar)){ alert('First character should be Alphabet.'); }
else if (pass.length < 8){ alert('password should be of 8 characters.'); }
else{ return true }}
checkPassword2(password);
Document.write('${password}');