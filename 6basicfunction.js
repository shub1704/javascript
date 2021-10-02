function sayhello(){
    console.log("heeellooooo");
}
sayhello();
sayhello();

//--------------------------------------
function sayname(name){
    console.log("my name is "+ name);
    console.log(`
    my name is ${name}, how r u!
    `);
}
sayname("shubham");
//-------------------------------------------
function addition(a,b){
    return(a+b);
}
var result;
result = addition(2,3);
console.log(result);