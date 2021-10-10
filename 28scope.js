//generall {} this is scope
//in js function is a scope

//console.log(name);
var name = "shubhb";  //gives undefined but its there above

//console.log(name2);
let name2 = "ssssssss"//will give errorr

//lets c scope
if (true) {
    var lname = "qwweerr";
    //console.log(lname); //within scope
}

//lets c outside scope
if (true) {
    var lname2 = "qwweerrtttt";
}
//console.log(lname2); //not within scope still can access this is not correct


//if we use LET keyword the existence of that varible is within that scope
//for (let index = 0; index < array.length; index++) ..................so for uses let to have it in scope
// so if we give let in scope
if (true) {
    let lname3 = "qwweerrtllllllllll";
}
console.log(lname3); //not within scope and will give u an error
