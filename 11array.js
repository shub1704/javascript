//initialize

var name = ["shu","yash", "hardik"];
var states = new Array("maha","goa","punj");


//console.log(name);
//console.log(name[2]);

//console.log(states.length);
states[0]= "delhi"
//console.log(states);

states.reverse();
//console.log(states);

var all = ["shubham","shub@mail",3,22,true]// not good to use instead use objects
//console.log(all);

all.pop();
//console.log(all);

all.unshift("rollno");   //shift the values and add at first
//console.log(all);

all.shift();        // delete first element
//console.log(all);


console.log(all.indexOf(3));        //will return the indes of element and -1 if not found

console.log(Array.from("shubham"));     // will make array of given string