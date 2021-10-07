//classical way of writing an js

function init(){
    var fname= "shubh";
    function sayfname(){
        console.log(fname);
    }
    sayfname();
}
//here fname is just in init scope

init();
//console.log(fname);.....here we get error as irt is not in scope