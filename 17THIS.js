//all regular function call this points to window objects

console.log(this);

var user = {
    fname:"shubham",
    lname:"thakare",
    role:"student",
    logcount:32,
    fb:true,
    courselist: [],

    //methods here
    getcoures: function() {
        console.log("line 15", this);
        function sayhello(){
            console.log("heeellooooo");
            console.log("line 18",this);        }
        sayhello();
        

    },
};
//this call is through an object
user.getcoures();


//general function and call
function sayhello(){
    console.log("heeellooooo");
}
sayhello();
