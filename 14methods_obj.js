//creating object
var user = {
    fname:"shubham",
    lname:"thakare",
    role:"student",
    logcount:32,
    fb:true,
    courselist: [],
    //methods here
    buycourse: function(course){
        this.courselist.push(course);
    },
    getcoures: function(){
        console.log(`${this.fname} has enroller in total ${this.courselist.length} course`);
    }

};
var courselist = true;
console.log(user.fname);
user.buycourse("python");
console.log(user.getcoures());