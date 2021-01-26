var str = "The quick brown fox jumps over the lazy dog";
var word = str.split(" ");
var count = 0;
for(var a = 0;a<word.length;a++){
     if ((word[a]==="The") ||
 (word[a]==="the")){
count = 1 + count;
 }
}
document.write("Text: "+ str+"<br>"+"Number of occurrence of word 'the'is :" +count);