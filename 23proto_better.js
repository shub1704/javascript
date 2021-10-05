var  user = function(fname,coursecount){
    this.fname = fname;
    this.coursecount = coursecount;
    this.getcourse = function(){
        console.log(`course count is ${this.coursecount}`);
    };
};

//by declaring new infront of object it goes inside the class/object not global anymore
var shub =new  user("shubham",4);
console.log(shub);
shub.getcourse();

//if we have to give extra properties to any object then use __proto__
//ie prototype...it allows to  to give new methode to existing
//injecting from outside
user.prototype.getfname = function(){
    console.log(`my name is ${this.fname}`);
};

//shub.getfname();

// this can give u many errors 
// so first check the properties and then do actions
//check using hasproperty function

if(shub.hasOwnProperty("fname"))
{
    shub.getfname();//if true then call
}
//such that many properties are there like length and all those are already assign to us