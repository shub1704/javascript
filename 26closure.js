//classical way of writing an js

// function init(){
//     var fname= "shubh";
//     function sayfname(){
//         console.log(fname);
//     }
//     sayfname();
// }
//here fname is just in init scope

//init();
//console.log(fname);.....here we get error as irt is not in scope

//closure
//if the interneal function is not gone, still in stack the it can access varibles

// function init(){
//     var fname= "shubh";
//     console.log("i am in init");

//     function sayfname(){
//         console.log(fname);
//     }
//     return sayfname;
// }
// var value = init();
// value();

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  console.log(add5(2));  // 7

  //or we can do 
  console.log(makeAdder(8)(8)); //16

  var add10 = makeAdder(10);  
  console.log(add10(2)); // 12