var states = ["maha","delhi","punjab",1223,"kerala","assam"]

for (let i = 0; i < states.length; i++) {
    //console.log(states[i]);    
}

//will not print no.
for (let i = 0; i < states.length; i++) {
    if(typeof(states[i])!=='string')continue;
    //console.log(states[i]);    
}

//will only print no.
for (let i = 0; i < states.length; i++) {
    if(typeof(states[i])==='string')continue;
    //console.log(states[i]);    
}

//will only print upto no. then stop
for (let i = 0; i < states.length; i++) {
    if(typeof(states[i])==='string')break;
    //console.log(states[i]);    
}


//not in place
let i = 0
for (;;) {
    if(i>5) break;
    console.log(i);  
    i++;  
}

//for each loop
//will take all the values of list
//states.forEach((s)=>(console.log(s)))
//or
//states.forEach((s) => console.log(s))


//for of
for(const n of states)
{
    console.log(n);
}


//for in
const symbols = {
    fb:"facebook",
    gl:"google",
    yh:"yahoo",
    ig:"instagram",
};
for(const n in symbols)
{
    console.log(`the key is ${n} and the value is ${symbols[n]}`);
}
