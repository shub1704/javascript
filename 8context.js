// if we call function and then define still it will call as js refer  global context 
say();

function say(){
    console.log("hellloooo");
}

//---------------------------------
if(2===2){
    console.log("this is true");
}

//-------------------------------------
var myname = "shub"
if (myname===myname) {
    console.log("this is same ");
    
}

//-------------------------------------
//if does not call global context in no0de
// global context is only in console/ browser
// node to have global context but with other name
//if (myname===window.myname) gives error
var myname = "shub"
if (myname===myname) {
    console.log("this is same ");
    
}
//-------------------------------------------------------------
//it will sacn globally and functioins are made available
tip("5");

function tip(a){
    var b =parseInt(a);// parsint convert string to int
    console.log(5+b);
}

//-------------------------------------------------------------
//it will sacn globally but varibles are undefined
// will throw and error so call after declaration

var  tip2 = function(a){
    var b =parseInt(a);// parsint convert string to int
    console.log(20+b);
}
tip2("5");

//---------------------------------------------------------------

console.log(name);
var name ="shubbbb"
// but if will call varible after printing
//will give undefined

function sayname(){
    var name = "thakare in function local"
    console.log(name);
}
sayname();
console.log(`${name} global one`);