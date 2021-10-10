//maps are almost like object but not objects
//values are in key value pair

var mymap  = new Map;
mymap.set(1,"one");
mymap.set(2,"two");
mymap.set(3,"three");
mymap.set(4,"four");

console.log(mymap);

//to access keys
for(let key of mymap.keys()){
    console.log(`the keys are ${key}`);
}

//to access values
for(let value of mymap.values()){
    console.log(`the valuess are ${value}`);
}

//to access both
for(let [key,value] of mymap){
    console.log(`the keys are ${key} valuess are ${value}`);
}

//for each lop will give value first and then key
 mymap.forEach((v,k) => console.log(`the keys are ${v} valuess are ${k}`));

 //delete key
 mymap.delete(2); //the key will get deleted
