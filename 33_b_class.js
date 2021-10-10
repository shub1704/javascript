
 //import user  from "./33class_module.js";
const user = require('./33class_module.js'); //importing module

 const  abc = new user("asd","asd@gmail") //creating object

 console.log(abc.getinfo()); //calling 

 //enter courses
 abc.enrollcourse("python");
 abc.enrollcourse("c++");
 console.log(abc.getcourse()); //we will get array

 //take one by one value
 let cr = abc.getcourse();
 cr.forEach(x => console.log(x));