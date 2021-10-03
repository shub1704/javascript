//fill
//it will fill value to all places
//value ,start ,end

 var arr = [2,3,4,5,6,7,8,9,10,11]
//console.log(arr.fill("H",2,5));


//will filter an entire array
//will make another array
const arr2 = [2,3,4,5,6,7,8,9,10,11]
const x = arr2.filter((num) =>(num!=7));
//console.log(x);

//slice
//cut an array start,end
var arr3= ["tim","tom","lim","lom","sim","som"]
//console.log(arr3.slice(1,3));


//splice will replace element
//start, count,value
var arr4= ["tim","tom","lim","lom","sim","som"]
arr4.splice(1,3,"HIII")
//console.log(arr4);

var arr5= ["tim","tom","lim","lom","sim","som"]
arr5.splice(1,3,"HIII","BYEE");
console.log(arr5);