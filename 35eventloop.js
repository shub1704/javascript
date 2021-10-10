//if in any function the process is taking time then other function will execiute then that proceess will execute
//loading of pic in an site


const one = () =>{
    console.log("i m  one");
};
const two = () =>{
    setTimeout(() =>{
            console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii");
    },3000)
    console.log("i m  two");
};
const three = () =>{
    console.log("i m  three");
};

//here other process comes forward and lazy gets execute last
one();
two();
three();