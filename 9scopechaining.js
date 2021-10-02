//a>b>c
//b can take something from a but not c
//can ony ask to big not to small

var name ="shubbbb"
console.log("line no 6 ",name);
//-----------------------------------------
function sayname(){
    var name = "thakare"
    console.log("line no 10 ",name);

    sayname2();
    function sayname2(){
        var name = "thakare"
        console.log("line no 15 ",name);
    }
}

sayname();
// always ask to the bigger one
// above function will take value from above