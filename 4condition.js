var temp = 2;
if(temp>15){
    console.log("its hot ");
}
else{
    console.log("its cold");
}

//amazon site purchase()AND
var fname = "shub";
var email = "shub@";
var card = true

if(fname && email && card){
    console.log("successs");
}
else{
    console.log("errrorrrr");
}

//amazon site loginn(OR)
var google = false;
var fb = false;
var yahoo = true

if(google || fb || yahoo){
    console.log(" loginn successs");
}
else{
    console.log(" loginn errrorrrr");
}

// ternary operator
var memeber = true;
memeber ? console.log("he is memeber"):console.log("not a memeber");

// switch case
  var user = "tester";
  switch (user) {
      case "admin":
          console.log(" in admin");
          break;
          case "subadmin":
            console.log(" in subadmin");
            break;
            case "tester":
                console.log(" in tester");
                break;
  
      default:
          console.log("trial user in default");
          break;
  }