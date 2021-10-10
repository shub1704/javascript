//...args    this is spread and rest
//spread  distribute the combineds value into multiple

function sumone(a,b){
    return(a+b);
}
 var ans1=  sumone(5,6);
 //console.log(ans1);

 //if we pass the array in function
var arr = [5,6];
var ans2=  sumone(arr);
 //console.log(ans2); //this shows undefined

 //then we can spread that array
 var arr = [6,6];
 var ans3=  sumone(...arr);
 // console.log(ans3); //this shows the output


  //we use it when we dont know how many arguments to pass
  function sumall(...args){
    sum =0;
    for(const arg of args){
        sum+=arg;
    }
    return sum;
  }
//console.log(sumall(2,3,5)); //this converts values into array


  //we use it when we dont know how many arguments to pass
  function sumallmulti(a,b,...args){
    sum =0;
    let multi = a*b;
    for(const arg of args){
        sum+=arg;
    }
    return [multi,sum];
  }
console.log(sumallmulti(2,3,1,1,1)); //this converts values into array 
//this will treat a b differtently and agr diff
//will return the array as given


