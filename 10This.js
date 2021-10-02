// this gives the access to the global context
//A property of an execution context (global, function or eval) that,
// in non–strict mode, is always a reference to an object and in strict mode can be any value.
console.log(this);

function sayname(){
    var name = "thakare"
    console.log(this);
}
sayname();