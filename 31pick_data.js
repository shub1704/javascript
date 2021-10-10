//picking up data is known as destructuring data
//lhs datatype == rhs datatype

const user = ["shubham ",22,"student"]
var name = user[0];
var role = user[2];

 console.log(name);
 console.log(role);

 //or we can do 
 var [name1 ,age,role2 ] = user;
 console.log(name1);
 console.log(role2);

 //on objects
 var myuser = {
    fname2:"shubhammmmmm",
    role3:"student",
    age2  :32,
};

console.log(myuser.age);

const {fname2,role3,age2} = myuser;
//here names must be exactly same 
console.log(fname2);