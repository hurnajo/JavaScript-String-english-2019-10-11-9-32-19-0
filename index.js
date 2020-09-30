// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = "hello";
var nameCaps = name.toUpperCase();
console.log(nameCaps);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'Wow afternoon, mr mike.';
function titleCase(sentence) {
    var splitStr = sentence.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 console.log(titleCase(sentence));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var extracted = money.substring(1);
console.log(extracted);
