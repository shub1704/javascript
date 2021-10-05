const red  =  document.querySelector(".red");
const blue =  document.querySelector(".blue");
const orange  =  document.querySelector(".orange");
const pink  =  document.querySelector(".pink");

const center  =  document.querySelector(".center");


//console.log(window.getComputedStyle(red).backgroundColor);
// method to grab
const getbgcolor = (selectelement) =>{
    return window.getComputedStyle(selectelement).backgroundColor;

};

//calling  method
console.log(getbgcolor(red));


