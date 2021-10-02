// undefined
// NaN-----not present
// ""
// null----- not a vlue
// 0-----value
// these all are treated as fals values
 
console.log("2"+ 2);
//it treated it as string

console.log("2"+ "2");

//comparision
var user = "2"
if (2==user) {
    console.log("same");
}

//strict comparision
var user = "2"
if (2===user) {
    console.log("datatype  same");
}