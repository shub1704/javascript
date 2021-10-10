//we generally use '' for character and "" for string

var x = 'x';
var name = "shubbb";
var name2 = "shub\'s";        //for '
var name3 = `shubham's`;      //no need of back slash
var name4 =   `${name2} is my name`;  //backtext

//methods on string
var fname = "shubham thakare";
console.log(fname);
console.log(fname.charAt(0));  //whatb it contains at 0th position
console.log(fname.endsWith("e")); //ending of a string
console.log(fname.toUpperCase());  //whole to upper case
