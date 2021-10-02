function getuser(name,role){
    switch (role) {
        case "admin":
            return `${name} is a admin`
            break
            case "subadmin":
                return `${name} is a subadmin`
                break;
                case "tester":
                    return `${name} is a tester`
                    break;
                    case "customer":
                        return `${name} is a customer`
                        break;
    
        default:
            return `${name} is a trial user`
            break;
    }
}
console.log(getuser("shubham","tester"));

//we can have a whole function in one varible as shown below

var getuser2 = function (name,role){
    switch (role) {
        case "admin":
            return `${name} is a admin`
            break
            case "subadmin":
                return `${name} is a subadmin`
                break;
                case "tester":
                    return `${name} is a tester`
                    break;
                    case "customer":
                        return `${name} is a customer`
                        break;
    
        default:
            return `${name} is a trial user`
            break;
    }
}
console.log(getuser2("shubham","customer"));

