
const one = () =>{
    return ("i m  one");
};

// const two = async() =>{
//     setTimeout(() =>{
//         return ("i m  two");
//     },3000) 
// };

//this promise will show u pending until it is fulfilled
//if we write reject instead of promise this will give u error  
const two = () =>{
    return new Promise((resolve,reject) =>{ 
        setTimeout(() =>{
            resolve("i m  two");
        },3000);
    });
};

const three = () =>{
    return ("i m  three");
};

//calling function....sroting and getting
const callme = () =>{
    let onecall = one();
    console.log(onecall);

    let twocall = two();
    console.log(twocall);

    let threecall = three();
    console.log(threecall);
};

callme();
//if we use acyn there comes promising in output
//promise is an event will get fulfilled in the future my be not tooo