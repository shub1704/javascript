//creating object
var user = {
    fname:"shubham",
    lname:"thakare",
    role:"student",
    logcount:32,
    fb:true
};

//call
console.log(user.fname);
console.log(user["lname"]);

//changing 
console.log(user.logcount);
user.logcount = 44;
console.log(user.logcount);

//show all
console.log(user);

//show table
console.table(user);