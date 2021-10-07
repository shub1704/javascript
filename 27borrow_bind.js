//same as closure but it can have many values 
//sum(1)(2)(3)(4) 
//this is known as curring
//bind is used to acces the methods of other objects by any other object

const user = {
    fname:"shubham",
    lname:"thakare",
    role:"student",
    logcount:32,
    //methods here
    getinfo : function(){
        console.log(`
        first name is ${this.fname}
        lastname is ${this.lname}
        role is ${this.role}
        `);
    },
};
//user.getinfo();
//every object have many functions and the methods getinfo has many funbctions too
//bind 

//....................................................................
const user2 = {
    fname:"yash",
    lname:"nag",
    role:"student",
};

//we can access getinfo method from outside object
user.getinfo.bind(user2);   //this gives the refrence
user.getinfo.bind(user2)(); //calling refrence using ()()
//or
var calluser2 = user.getinfo.bind(user2); //storing refrence in calluser2
calluser2(); //calling that refrence



//such that CALL is used to call another object in one objects method
user.getinfo.call(user2); //getinfo calls user2 directly  
