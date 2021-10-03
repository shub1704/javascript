//normal function

function iseven(a){
    return(a%2==0); 
}
//console.log(iseven(3));


//arrow function
//return is mandatory or else it will show undefined
var iseven2=(a)=>{
    return(a%2==0); 
}
//console.log(iseven2(4));


//callback function
//it will chck every element in an array
var result = [2,4,6,8].every(iseven);
//console.log(result);


// other method to call
var result2 = [2,4,6,8].every((e) => {
    return e % 2===0;
});
console.log(result2);


// other method to call
var result3 = [2,4,6,8].every((e) =>e % 2===0);
console.log(result3);

// other method to call
var result4 = [2,4,6,8].every((e) => (e%2==0));
console.log(result4);
